<template>
    <div>{{ text }}</div>
</template>

<script>

export default {
    name:"App",
    
    data() {
        return {
            text: "Hola Vue",  
        }
    },
    beforeCreate() {
      console.log("El componente está siendo creado", this.$data, this.$el);
    },
    created() {
      console.log("El componente ha sido creado", this.$data, this.$el);
    },
    mounted() {
      console.log("El componente ha sido montado", this.$data, this.$el);
    }
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
