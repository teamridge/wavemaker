<template>
    <transition name="menu-fade">
        <nav class="menu-overlay">
            <ul class="nav-main">
                <li class="nav-item" @click="close" v-scroll-to="'#mission'"><a href="">Mission</a></li>
                <li class="nav-item" @click="close" v-scroll-to="'#portfolio'"><a href="">Portfolio</a></li>
                <li class="nav-item" @click="close" v-scroll-to="'#funds'"><a href="">Funds</a></li>
                <li class="nav-item" @click="close" v-scroll-to="'#team'"><a href="">Team</a></li>
                <li class="nav-item" @click="close" v-scroll-to="'#careers'"><a href="">Careers</a></li>
            </ul>
            <a class="btn-close" v-on:click="close">&#215;</a>
        </nav>
    </transition>
</template>

<script>
export default {
  name: "AppMenuMobile",
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #fbfbfb;
  color: white;
  padding: 4rem;
  overflow-y: auto;
  z-index: 100;
}

.nav-main {
  text-align: center;
  width: 100%;
}

.nav-item {
  margin-bottom: 1rem;
  & a {
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0;
    line-height: 1.5;
    color: #8491a8;
    text-decoration: none;
  }
  &:hover {
    color: #3d83f6;
  }
  &:nth-last-child(1) > a {
    margin-bottom: 0;
  }
}

.btn-close {
  position: fixed;
  top: 0;
  right: 0;
  font-size: 2rem;
  font-weight: 500;
  color: white;
  background-color: #0745af;
  text-decoration: none;
  height: 50px;
  width: 50px;
  text-align: center;
  &:active {
    cursor: pointer;
    text-decoration: none;
    background-color: #3d83f6;
  }
}

.menu-fade-enter {
  opacity: 0;
}

.menu-fade-leave-active {
  opacity: 0;
}

.menu-fade-enter-active {
  transition: all 0.05s ease-in-out;
}

.menu-fade-leave-active {
  transition: all 0.2s ease-in-out;
}
</style>