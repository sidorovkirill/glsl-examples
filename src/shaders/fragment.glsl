uniform vec3 u_color;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;

varying vec2 v_uv;
varying vec3 v_position;

void main() {
    vec3 color = vec3(1.0);
    // color.r = clamp(v_position.x, 0.0, 1.0);
    // color.g = clamp(v_position.y, 0.0, 1.0);
    // color.r = step(-0.3, v_position.x);
    // color.g = step(-0.3, v_position.y);
    color.r = smoothstep(0.0, 0.3, v_position.x);
    color.g = smoothstep(0.0, 0.3, v_position.y);
    gl_FragColor = vec4(color, 1.0);
}
