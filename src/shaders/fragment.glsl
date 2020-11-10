uniform vec3 u_color;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;


void main() {
    vec3 startColor = vec3(0.0, 0.0, 1.0);
    vec3 endColor = vec3(1.0, 0.0, 0.0);
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec3 colorY = mix(startColor, endColor, uv.y);
    vec3 colorX = mix(startColor, endColor, uv.x);
    vec3 color = colorY * colorX;
    gl_FragColor = vec4(color, 1.0);
}
