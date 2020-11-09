import * as THREE from "three";

export const scene = new THREE.Scene();
export const camera = new THREE.OrthographicCamera( -1, 1, 1, -1, 0.1, 10 );
export const renderer = new THREE.WebGLRenderer();