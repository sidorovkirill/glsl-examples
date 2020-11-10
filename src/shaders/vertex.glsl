void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position * 0.3, 1.0);
}
