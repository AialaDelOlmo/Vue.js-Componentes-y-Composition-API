<template>
    <div>
        <div>FullName: {{ fullName }}</div>
        <div> {{ username }}</div>
        <button ref="btn">Click!</button>
    </div>
</template>

<script setup>
    import { defineProps, defineExpose, ref, toRefs, computed, inject, watch } from 'vue';

    const props = defineProps({
        firstName: String, 
        lastName: String
    });

    const { firstName , lastName } = toRefs(props);
       
    const fullName = computed(() => {
        return `${firstName.value} ${lastName.value}`;  
    });

    const username = inject("username");

    defineExpose({
        fullName,
    });

    const btn = ref(null)
    console.log(btn.value);

    watch(btn, (valor) => {
        console.log(valor);
    });
</script>
