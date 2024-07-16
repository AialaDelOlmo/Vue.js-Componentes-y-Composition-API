<template>
  <div>
   <div> {{ text }}</div>
   <div> {{ title }}</div>
  </div>
</template>

<script>
import base from "@/mixins/base"; //@ se refiere a la carpeta src

export default {
    name:"App",
    mixins: [base],
    data() {
        return {
          text: "Hola Vue",
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
