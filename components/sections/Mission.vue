<template>
    <section class="mission-desc">
      <!-- About -->
      <div class="row p-bottom--xx-large">
        <div class="col xs9 xl2 offset-xl1">
          <h3 class="title-small--grey m-bottom--x-small">We Are</h3>
          <p class="title-short m-bottom--large">The next-generation corporate innovation venture fund.</p>
        </div>
        <div class="col xs9 xl2 offset-xl1">
          <h3 class="title-small--grey m-bottom--x-small">We Believe</h3>
          <p class="title-short m-bottom--large">Corporations will control the future of innovation.</p>
        </div>
        <div class="col xs9 xl2 offset-xl1">
          <h3 class="title-small--grey m-bottom--x-small">We Build</h3>
          <p class="title-short m-bottom--large">Disruptive technology that fuels your business.</p>
        </div>
      </div>
      <!-- /About -->
      <!-- How -->
      <div class="row p-bottom--xx-large">
        <div class="col xs9 offset-xl1">
          <h3 class="title-small--grey m-bottom--x-small">How we work with corporate partners</h3>
        </div>
        <div class="col xs9 sm4 md4 lg2 xl2 offset-xl1">
          <h4 class="title-number">01</h4>
          <p class="text-small--grey">Identify a core <br> business problem.</p>
        </div>
        <div class="col xs9 sm4 md4 lg2 xl2">
          <h4 class="title-number">02</h4>
          <p class="text-small--grey">Arrive to a <br> technical solution.</p>
        </div>
        <div class="col xs9 sm4 md4 lg2 xl2">
          <h4 class="title-number">03</h4>
          <p class="text-small--grey">We fund <br> &amp; build it.</p>
        </div>
        <div class="col xs9 sm4 md4 lg2 xl2">
          <h4 class="title-number">04</h4>
          <p class="text-small--grey">Together, we <br> take it to market.</p>
        </div>
      </div>
      <!-- /How -->
      <!-- Contact Us -->
      <div class="row">
        <div class="col xs9 xl2 offset-xl7">
          <button class="button" v-on:click="showModal">Contact Us</button>
        </div>
      </div>
      <!-- Contact Us -->
      <!-- Modal -->
      <ContactModal v-show="isModalVisible" v-on:close="closeModal"/>
      <!-- /Modal -->
    </section>
</template>

<script>
import ContactModal from "~/components/ContactModal.vue";
export default {
  name: "Mission",
  components: {
    ContactModal
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>