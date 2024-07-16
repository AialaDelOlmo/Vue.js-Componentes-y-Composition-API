<template>
    <div>{{ obj.counter }}</div>
</template>

<script>
//import { ref } from 'vue';
import { reactive, watch } from 'vue';
export default {
    setup() {
        //const counter = ref(0);
        const obj = reactive({ counter: 0 });
        setInterval(() => obj.counter++, 1000);

        watch(() => obj.counter, (valor, anterior) => {
            console.log('El valor del contador ha cambiado: ', valor, 'antes: ', anterior);
        });
        return { 
            obj,
        };
    }, 
};
</script>
