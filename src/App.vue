<template>
  <div>
   <button @click="show = !show">Menu</button>
   <transition name = "fade">
    <Menu v-show="show" />
   </transition>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue"; 
export default {
    name: "App",
    components: { Menu },
    data() {
        return {
            show: false,
        }
    },
};
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .fade-enter-from,
  .fade-leave.to {
    opacity: 0;
  }

  .fade-leave-active,
  .fade-enter-active {
    transition: opacity 1s ease;
  }
}
</style>
