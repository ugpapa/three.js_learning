import * as THREE from "three";
        import Stats from "three/examples/jsm/libs/stats.module";
        import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

        // Three.js Setup
        // (unchanged Three.js setup code)

        // Cannon.js Physics Setup
        const world = new CANNON.World();
        world.gravity.set(0, -9.82, 0); // gravity in m/s^2

        // Ball physics
        const ballShape = new CANNON.Sphere(0.25);
        const ballBody = new CANNON.Body({
            mass: 1,
            shape: ballShape,
            position: new CANNON.Vec3(0, 3, 0)
        });
        world.addBody(ballBody);

        // Ground physics
        const groundShape = new CANNON.Plane();
        const groundBody = new CANNON.Body({
            mass: 0 // Setting mass to 0 makes it static
        });
        groundBody.addShape(groundShape);
        groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2); // Rotate the ground plane to match Three.js
        world.addBody(groundBody);

        function animate() {
            // Update physics
            world.step(1 / 60);

            // Copy coordinates from Cannon.js to Three.js
            ball.position.copy(ballBody.position);

            delta = clock.getDelta();
            time += delta;
            // console.log(time);
            // console.log(Math.cos(time));
            // console.log(Math.abs(Math.cos(time)));
            ball.position.y = 0.25 + Math.abs(Math.cos(time)) * 2.5;
            controls.update();
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            stats.update();
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
          }