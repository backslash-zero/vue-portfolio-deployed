<template>
  <SmokeCanvas></SmokeCanvas>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  <Footer></Footer>
  <CrossHair></CrossHair>
</template>

<script>
import SmokeCanvas from './components/background/smokecanvas.vue'
import Footer from './components/navigation/footer.vue';
import CrossHair from './components/navigation/crosshair.vue';

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

export default {
  name: 'App',
  components: {
    Footer,
    SmokeCanvas,
    CrossHair,
  }
}
</script>

<style>
@import url("assets/style/font-styles.css");
@import url("assets/style/transitions.css");
@import url("assets/style/containers.css");
@import url("assets/style/cursor.css");
::selection {
  color: white;
  background-color: red;
}

</style>
