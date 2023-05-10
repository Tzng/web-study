<template>
    <div class="button">
        <slot>提交</slot>
    </div>
</template>

<script setup>

</script>

<style scoped>
.button {
  background-color: #409eff;
  border-color: #409eff;
  width: 150px;
  height: 30px;
  text-align: center;
  color: #fff;
  border-radius: 4px;
  &:hover {
    background-color: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
</style>