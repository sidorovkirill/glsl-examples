uniform vec3 u_color;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;


void main() {
//    vec2 v = u_mouse / u_resolution;
//    vec3 color = vec3(v.x, v.y, 1.0);
    vec3 color = vec3((sin(u_time) + 1.0) / 2.0, 0.0, (cos(u_time) + 1.0) / 2.0);
    gl_FragColor = vec4(color, 1.0);
}
