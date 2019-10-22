<template>
    <header>
      <AppMenu/>
    </header>
</template>

<script>
import AppMenu from "~/components/AppMenu.vue";
export default {
  name: "AppHeader",
  components: {
    AppMenu
  }
};
</script>
