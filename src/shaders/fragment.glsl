uniform vec3 u_color;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;

varying vec2 v_uv;
varying vec3 v_position;

void main() {
    // vec3 color = vec3(v_uv.x, v_uv.y, 1.0);
    vec3 color = vec3(v_position.x, v_position.y, 1.0);
    gl_FragColor = vec4(color, 1.0);
}
