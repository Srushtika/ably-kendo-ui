<template>
  <div id="app">
    <LiveChart />
  </div>
</template>


<style>
#app {
  font-family: "helvetica";
  margin-top: 60px;
}
</style>
<script>
import LiveChart from "./components/LiveChart.vue";

export default {
  name: "app",
  components: {
    LiveChart
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
