<template>
  <div ref="container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "Waves",
  mounted() {
    const ambient_intensity = 0.2; // waves move at least this much
    const disrupter_range = 0.3; // percentage of screen width
    const disrupter_strength = 0.8; // multiplier for disruption effect strength
    const disrupter_x_vel = -7 * 60; // disrupter.x moves by this each second
    const disrupter_y_vel = 5 * 60; // disrupter.y moves by this each second
    const disrupter_buffer = 0.4; // % of screen size, 'safe zone' outside canvas to pop in
    const line_segments = 30; // line 'resolution', more = smoother lines
    const wave_length = 0.1; // tightness of waves
    const wave_timescale = 0.002; // vertical speed of waves
    const amplitude_a = 0.2; // amplitude of inner sine wave
    const amplitude_b = 10; // amplitude of outer sine wave


    const canvas = this.$refs.canvas;
    const container = this.$refs.container;

    const render_scale = window.devicePixelRatio;
    canvas.width = canvas.clientWidth * render_scale;
    canvas.height = canvas.clientHeight * render_scale;

    window.addEventListener('resize', () => {
      canvas.width = canvas.clientWidth * render_scale;
      canvas.height = canvas.clientHeight * render_scale;
    });

    const ctx = canvas.getContext('2d');


    const mod = (a, b) => ((a % b) + b) % b;

    const render = (time) => {
      requestAnimationFrame(render);

      const disrupter = {
        x: mod(time / 1000 * disrupter_x_vel, canvas.width * (1 + disrupter_buffer * 2)) - canvas.width * disrupter_buffer,
        y: mod(time / 1000 * disrupter_y_vel, canvas.height * (1 + disrupter_buffer * 2)) - canvas.height * disrupter_buffer
      };

      ctx.strokeStyle = 'rgb(233, 238, 248)';
      ctx.lineWidth = render_scale;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      const line_count = 10;
      const gap_between_lines = container.clientWidth / (line_count - 1) * render_scale;
      const line_offset = (canvas.clientWidth - container.clientWidth) / 2 * render_scale;
      for (let i = 0; i < line_count; i++) {
        const lineCenter = line_offset + gap_between_lines * i;
        ctx.beginPath();

        ctx.moveTo(lineCenter, 0);

        for (let j = 0; j < line_segments; j++) {
          const wave = Math.sin(Math.sin(i + j / line_segments / wave_length + time * wave_timescale) * Math.PI * amplitude_a) * amplitude_b * i * render_scale;

          const x = lineCenter;
          const y = j / (line_segments - 1) * ctx.canvas.height;

          const max_dist = Math.pow(ctx.canvas.width * disrupter_range, 2);
          const disrupter_dist = Math.pow(x - disrupter.x, 2) + Math.pow(y - disrupter.y, 2);
          const clamped_dist = Math.min(max_dist, disrupter_dist);

          const x_offset = wave * Math.min(1, ambient_intensity + Math.pow((1 - clamped_dist / max_dist), 5) * disrupter_strength);

          ctx.lineTo(x + x_offset, y);
        }

        ctx.stroke();
      }
    };

    requestAnimationFrame(render);
  }
};
</script>

<style lang="scss" scoped>
div {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}

canvas {
  background: #fbfbfb;
  position: relative;
  left: -10%;
  width: 120%;
  height: 100%;
}
</style>
