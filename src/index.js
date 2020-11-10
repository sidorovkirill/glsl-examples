import * as THREE from 'three';
import {move, onWindowResize, animate, setUp} from './utils';
import {scene, camera, renderer} from "./scene";
import vshader from './shaders/vertex.glsl';
import fshader from './shaders/fragment.glsl';

// Data

const uniforms = {
    u_color: { value: new THREE.Color(0x0000ff) },
    u_time: { value: 0.0 },
    u_mouse: { value:{ x:0.0, y:0.0 }},
    u_resolution: { value:{ x:0, y:0 }}
};

// Scene setup
setUp(uniforms);

// Add objects to scene
const geometry = new THREE.PlaneGeometry( 2, 2 );
const material = new THREE.ShaderMaterial( {
    uniforms: uniforms,
    vertexShader: vshader,
    fragmentShader: fshader
} );

const plane = new THREE.Mesh( geometry, material );
scene.add( plane );

// Start animation loop
animate(uniforms);