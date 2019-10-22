<template>
  <section id="mission" class="mission-hero fullwidth">
    <div class="content">
      <h2 class="headline--hero">We partner with corporations to build disruptive technology that will drive future growth. We help partners think & execute like startups.</h2>
      <a href="#" v-scroll-to="'#portfolio'" class="text-white m-bottom--large">See how we disrupted the fast food kitchen with CaliBurger</a>
    </div>
    <div class="video">
      <video playsinline autoplay muted loop>
        <source src="~/static/WAVEMAKER_LABS_Loop_v01_H264_compressed.mp4">
      </video>
    </div>
  </section>
</template>

<script>
export default {
  name: "MissionHero"
};
</script>