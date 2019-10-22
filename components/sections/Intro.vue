<template>
    <section class="intro">
        <Waves/>
        <div class="row">
            <div class="col xs9">
                <img src="~/static/logo.png" alt="logo" class="logo">
                <div class="tagline">
                <span>Disrupt</span>
                <span class="opacity--20">Yourself</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Waves from "~/components/Waves.vue";
export default {
  name: "Intro",
  components: {
    Waves
  }
};
</script>
