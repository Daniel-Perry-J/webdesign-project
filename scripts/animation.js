
        // reference source https://threejs.org/manual/#en/fundamentals

        // render engine
        import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.126.1/build/three.module.js';

        const canvas = document.querySelector('#c');
        const renderer = new THREE.WebGLRenderer({antialias: true, canvas});

        // attach camera to viewport
        const fov = 75;
        const aspect = 2;
        const near = 0.1;
        const far = 5;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        // bring camera back a bit to create depth
        camera.position.z = 2;

        // build scene to render
        const scene = new THREE.Scene();

        // add cube
        const boxWidth = 1;
        const boxHeight = 1;
        const boxDepth = 1;
        const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
        const material = new THREE.MeshPhongMaterial({color: 0x44aa88});

        // create mesh
        const cube = new THREE.Mesh(geometry, material);

        // add lighting
        const color = 0x8f8f8f;
        const intensity = 2;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-2, 2, 5);

        // add objects to scene
        scene.add(cube);
        scene.add(light);

        // add custom animation
        function render(time) {
            time /= 1000;
            
            cube.rotation.x = time;
            cube.rotation.y = time;
            
            renderer.render(scene, camera);
            
            requestAnimationFrame(render);
        }
        requestAnimationFrame(render);

        // added function to change color
        cube.setColor = function(color) {
            cube.material.color.set(color);
        };

        // animation to change the color
        let hue = 0.0;
        function animateColor() {
            // Calculate a new color using hsl (hue, saturation, luminosity)
            const newColor = cube.material.color.setHSL(hue, 0.95, 0.75);

            // change the color
            hue += 0.001;

            // keep hue from going outside bounds (0 to 1)
            hue %= 1;
        
            cube.setColor(newColor);
        
            requestAnimationFrame(animateColor);
        }
        requestAnimationFrame(animateColor);
        
