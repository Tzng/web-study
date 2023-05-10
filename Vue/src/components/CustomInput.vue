<template>
    <div>
        <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" >
    </div>
</template>

<script setup lang="ts">
// 定义一个props，包括：modelValue，和update:modelValue方法
defineProps({
    modelValue: {
        type: String,
        default: ""
    },
    "update:modelValue": {
        type: Function,
        default: () => {}
    }
})

</script>

<style scoped>

</style>