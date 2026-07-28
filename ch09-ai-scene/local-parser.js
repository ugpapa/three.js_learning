/**
 * 로컬 파서 — API 키 없이도 예제가 동작하게 하는 규칙 기반 폴백.
 *
 * LLM이 하는 일(자연어 → 장면 JSON)을 아주 좁은 범위에서 흉내 냅니다.
 * 이 파서의 한계(어순, 동의어, 복합 문장)를 직접 체감하는 것이
 * "왜 LLM인가"에 대한 가장 좋은 대답이 됩니다.
 */

const COLOR_WORDS = {
  '빨간': '#e0442c', '빨강': '#e0442c', '주황': '#f08c2e', '노란': '#f2c531',
  '노랑': '#f2c531', '초록': '#3fa65c', '녹색': '#3fa65c', '파란': '#2f6fde',
  '파랑': '#2f6fde', '하늘': '#6bc4f2', '보라': '#8a5fd6', '보라색': '#8a5fd6',
  '분홍': '#e879b9', '핑크': '#e879b9', '흰': '#f2f2f2', '하얀': '#f2f2f2',
  '검은': '#20242c', '검정': '#20242c', '회색': '#9aa2ad', '금색': '#d9a94a',
};

const SHAPE_WORDS = {
  '구': 'sphere', '공': 'sphere', '큐브': 'box', '정육면체': 'box', '상자': 'box',
  '박스': 'box', '도넛': 'torus', '토러스': 'torus', '원뿔': 'cone', '콘': 'cone',
  '원기둥': 'cylinder', '실린더': 'cylinder', '기둥': 'cylinder',
};

const MATERIAL_WORDS = { '금속': 'metal', '메탈': 'metal', '유리': 'glass', '투명': 'glass' };

const POSITION_WORDS = {
  '왼쪽': [-2.5, 1, 0], '오른쪽': [2.5, 1, 0], '가운데': [0, 1, 0], '중앙': [0, 1, 0],
  '위': [0, 2.8, 0], '앞': [0, 1, 2.2], '뒤': [0, 1, -2.2],
};

const COUNT_WORDS = {
  '한': 1, '하나': 1, '두': 2, '둘': 2, '세': 3, '셋': 3, '네': 4, '넷': 4,
  '다섯': 5, '여섯': 6, '일곱': 7, '여덟': 8,
};

/** 문장을 쉼표·접속어 기준으로 절 단위로 나눠 절마다 오브젝트를 만듭니다. */
export function parseLocally(text) {
  const clauses = text.split(/,|그리고|주위에|주변에/).filter((c) => c.trim());
  const objects = [];

  for (const clause of clauses) {
    const shapeKey = Object.keys(SHAPE_WORDS).find((w) => clause.includes(w));
    if (!shapeKey) continue;

    const colorKey = Object.keys(COLOR_WORDS).find((w) => clause.includes(w));
    const materialKey = Object.keys(MATERIAL_WORDS).find((w) => clause.includes(w));
    const positionKey = Object.keys(POSITION_WORDS).find((w) => clause.includes(w));
    // "다섯 개", "세개"처럼 반드시 '개'가 뒤따르는 경우만 개수로 인정합니다.
    // ("한 줄로"의 '한'을 개수로 오인하지 않기 위한 조건입니다.)
    const countKey = Object.keys(COUNT_WORDS).find(
      (w) => clause.includes(`${w} 개`) || clause.includes(`${w}개`),
    );
    const count = countKey ? COUNT_WORDS[countKey] : 1;
    const size = clause.includes('크게') || clause.includes('큰') ? 1.8
      : clause.includes('작게') || clause.includes('작은') ? 0.6 : 1;

    const base = positionKey ? POSITION_WORDS[positionKey] : [0, 1, 0];
    for (let i = 0; i < count; i++) {
      // 여러 개면 X축으로 줄 세우기
      const offset = (i - (count - 1) / 2) * 1.6;
      objects.push({
        shape: SHAPE_WORDS[shapeKey],
        color: colorKey ? COLOR_WORDS[colorKey] : '#8899ff',
        material: materialKey ? MATERIAL_WORDS[materialKey] : 'standard',
        position: [base[0] + offset, base[1], base[2]],
        size,
      });
    }
  }
  return { objects };
}
