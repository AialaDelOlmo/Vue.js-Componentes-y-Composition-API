<template>
   <component :is="componente"></component>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import { defineAsyncComponent } from "vue";
const HelloWorld = defineAsyncComponent(() => import("./components/HelloWorld.vue"));

export default {
    name:"App",
    components: {
        HelloWorld,
    },
    data() {
        return {
            componente: "HelloWorld",   //Mismo nombre del objeto 'components'
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
}
</style>
