import * as THREE from 'three';

/**
 * 장면 명세(Scene Spec) — AI와 three.js 사이의 계약.
 *
 * LLM에게 "three.js 코드를 써 달라"고 하지 않습니다. 코드는 검증이 어렵고
 * 실행은 위험합니다. 대신 장면을 기술하는 좁은 JSON 스키마를 정의하고,
 * LLM에게는 이 JSON만 출력하게 합니다. 렌더링은 우리가 작성한 코드가
 * 담당하므로 결과는 항상 안전하고 예측 가능합니다.
 *
 * {
 *   "objects": [
 *     {
 *       "shape": "sphere" | "box" | "torus" | "cone" | "cylinder",
 *       "color": "#ff0000",
 *       "material": "standard" | "metal" | "glass",
 *       "position": [x, y, z],
 *       "size": 1.0
 *     }
 *   ]
 * }
 */

const SHAPE_BUILDERS = {
  sphere: (s) => new THREE.SphereGeometry(0.6 * s, 48, 24),
  box: (s) => new THREE.BoxGeometry(s, s, s),
  torus: (s) => new THREE.TorusGeometry(0.55 * s, 0.22 * s, 24, 64),
  cone: (s) => new THREE.ConeGeometry(0.6 * s, 1.2 * s, 48),
  cylinder: (s) => new THREE.CylinderGeometry(0.5 * s, 0.5 * s, 1.1 * s, 48),
};

function buildMaterial(spec) {
  const color = new THREE.Color(spec.color ?? '#8899ff');
  switch (spec.material) {
    case 'metal':
      return new THREE.MeshStandardMaterial({ color, metalness: 1, roughness: 0.18 });
    case 'glass':
      return new THREE.MeshPhysicalMaterial({
        color, transmission: 1, thickness: 0.6, roughness: 0.08, ior: 1.5,
      });
    default:
      return new THREE.MeshStandardMaterial({ color, roughness: 0.45, metalness: 0.1 });
  }
}

/** 스키마를 벗어난 값을 걸러내는 검증 — LLM 출력은 항상 검증을 거칩니다. */
export function validateSpec(raw) {
  const objects = Array.isArray(raw?.objects) ? raw.objects.slice(0, 30) : [];
  return {
    objects: objects
      .filter((o) => o && SHAPE_BUILDERS[o.shape])
      .map((o) => ({
        shape: o.shape,
        color: typeof o.color === 'string' ? o.color : '#8899ff',
        material: ['standard', 'metal', 'glass'].includes(o.material) ? o.material : 'standard',
        position: Array.isArray(o.position) && o.position.length === 3
          ? o.position.map((v) => THREE.MathUtils.clamp(Number(v) || 0, -8, 8))
          : [0, 1, 0],
        size: THREE.MathUtils.clamp(Number(o.size) || 1, 0.2, 4),
      })),
  };
}

/** 검증된 명세를 실제 three.js 오브젝트 그룹으로 변환합니다. */
export function buildSceneFromSpec(spec) {
  const group = new THREE.Group();
  for (const objectSpec of spec.objects) {
    const mesh = new THREE.Mesh(
      SHAPE_BUILDERS[objectSpec.shape](objectSpec.size),
      buildMaterial(objectSpec),
    );
    mesh.position.fromArray(objectSpec.position);
    mesh.castShadow = true;
    group.add(mesh);
  }
  return group;
}

/** 이전 생성 결과를 정리(dispose)합니다 — 생성기를 반복 사용하기 위한 필수 절차. */
export function disposeGroup(group) {
  group.traverse((obj) => {
    obj.geometry?.dispose();
    obj.material?.dispose();
  });
  group.removeFromParent();
}
