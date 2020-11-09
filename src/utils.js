import * as THREE from "three";
import {scene, camera, renderer} from "./scene";

const clock = new THREE.Clock();

export const move = (evt) => {
    uniforms.u_mouse.value.x = (evt.touches) ? evt.touches[0].clientX : evt.clientX;
    uniforms.u_mouse.value.y = (evt.touches) ? evt.touches[0].clientY : evt.clientY;
};

export const onWindowResize = ( uniforms ) => {
    const aspectRatio = window.innerWidth/window.innerHeight;
    let width, height;
    if (aspectRatio>=1){
        width = 1;
        height = (window.innerHeight/window.innerWidth) * width;
    }else{
        width = aspectRatio;
        height = 1;
    }
    camera.left = -width;
    camera.right = width;
    camera.top = height;
    camera.bottom = -height;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
     changeUniformsResolution(uniforms);
};

const changeUniformsResolution = (uniforms) => {
    uniforms.u_resolution.value.x = window.innerWidth;
    uniforms.u_resolution.value.y = window.innerHeight;
};

export const animate = (uniforms) => {
    requestAnimationFrame( () => animate(uniforms) );
    uniforms.u_time.value += clock.getDelta();
    renderer.render( scene, camera );
};

export const setUp = (uniforms) => {
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    camera.position.z = 1;

    onWindowResize(uniforms);
    if ('ontouchstart' in window){
        document.addEventListener('touchmove', move);
    }else{
        window.addEventListener( 'resize', () => onWindowResize(uniforms), false );
        document.addEventListener('mousemove', move);
    }
};