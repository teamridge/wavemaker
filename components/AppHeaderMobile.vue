<template>
    <div class="header--mobile">
        <img src="~/static/logo.png" alt="logo" class="logo--mobile">
        <!-- Toggle -->
        <a href="#" class="menu-toggle" v-on:click.prevent="showMenu">
          <img src="~/static/menu-toggle-icon.svg" alt="menu toggle">
        </a>
        <!-- /Toggle -->
        <!-- Mobile Full Screen Menu -->
        <AppMenuMobile v-show="isMenuVisible" v-on:close="closeMenu"/>
        <!-- /Mobile Full Screen Menu -->
    </div>
</template>

<script>
import AppMenuMobile from "~/components/AppMenuMobile.vue";
export default {
  name: "AppHeaderMobile",
  components: {
    AppMenuMobile
  },
  data() {
    return {
      isMenuVisible: false
    };
  },
  methods: {
    showMenu() {
      this.isMenuVisible = true;
    },
    closeMenu() {
      this.isMenuVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.header--mobile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  width: 100vw;
  padding: 0.9rem 1.1rem;
  background-color: #fbfbfb;
  z-index: 10;
  border-bottom: 1px solid #eceded;
  @media (min-width: 1245px) {
    display: none;
  }
}

.logo--mobile {
  max-width: 140px;
}

.menu-toggle {
  display: flex;
  align-content: center;
}
</style>
