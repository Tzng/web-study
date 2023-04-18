<template>
  <div id="app" :class="{red: isRed}" :style="{backgroundColor: bgColor}"></div>
</template>

<script>
var vm = new Vue({
  el: '#app', data: function () {
    return {isRed: true, bgColor: 'blue'};
  }, methods: {
    changeColor() {
      this.isRed = !this.isRed;
      if (this.bgColor === 'blue') {
        this.bgColor = 'red';
      } else {
        this.bgColor = 'blue';
      }
    }
  }, mounted() {
    setInterval(this.changeColor, 1000);
  }
});
</script>

<style scoped>

</style>