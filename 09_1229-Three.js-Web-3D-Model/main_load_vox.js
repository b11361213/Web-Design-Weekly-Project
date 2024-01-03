// Document
// [Installation – three.js docs](https://threejs.org/docs/#manual/en/introduction/Installation)

// vox loader
// [three.js/examples/webgl_loader_vox.html at dev · mrdoob/three.js · GitHub](https://github.com/mrdoob/three.js/blob/dev/examples/webgl_loader_vox.html)

import * as THREE from 'three';
// WebGL compatibility check
// import WebGL from 'three/addons/capabilities/WebGL.js';

// if ( WebGL.isWebGLAvailable() ) {

// 	// Initiate function or other initializations here
// 	animate();

// } else {

// 	const warning = WebGL.getWebGLErrorMessage();
// 	document.getElementById( 'container' ).appendChild( warning );

// }

// vox loader
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { VOXLoader, VOXMesh } from 'three/addons/loaders/VOXLoader.js';

let vox_model = 'assets\\vox\\chr_knight-2.vox';

init();


function init() {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    const controls = new OrbitControls( camera, renderer.domElement );
    controls.minDistance = .1;
    controls.maxDistance = 0.5;


    const background_color = new THREE.Color( 0x262626 );
    renderer.setClearColor( background_color, 1 );

    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const meterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, meterial);
    // scene.add(cube);


    const hemiLight = new THREE.HemisphereLight( 0xcccccc, 0x444444, 3 );
    scene.add( hemiLight );

    const dirLight = new THREE.DirectionalLight( 0xffffff, 2.5 );
    dirLight.position.set( 1.5, 3, 2.5 );
    scene.add( dirLight );

    const dirLight2 = new THREE.DirectionalLight( 0xffffff, 1.5 );
    dirLight2.position.set( - 1.5, - 3, - 2.5 );
    scene.add( dirLight2 );


    const loader = new VOXLoader();
    loader.load( vox_model, function ( chunks ) {

        for ( let i = 0; i < chunks.length; i++ ) {

            const chunk = chunks[ i ];

            const mesh = new VOXMesh( chunk );
            mesh.scale.setScalar( 0.0090 );
            scene.add( mesh );
        }
    })

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
    
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
        
        controls.update();
    
        renderer.render(scene, camera);
    }
    animate();
}

