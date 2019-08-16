<template>
  <div id="vueapp" class="vue-app">
    <h4>Bitcoin live price</h4>
    <p>
      <kendo-sparkline
        :data="[936, 968, 1025, 999, 998, 1014, 1017, 1010, 1010, 1007,
                1004, 988, 990, 988, 987, 995, 946, 954, 991, 984,
                974, 956, 986, 936, 955, 1021, 1013, 1005, 958, 953,
                952, 940, 937, 980, 966, 965, 928, 916, 910, 980]"
        :theme="'sass'"
      ></kendo-sparkline>
    </p>
  </div>
</template>

<script>
export default {};
var ably = new Ably.Realtime({
  authUrl: "https://ably-kendo-ui.glitch.me/auth"
});
var jpyPriceChannel = ably.channels.get(
  "[product:ably-bitflyer/bitcoin]bitcoin:jpy"
);
jpyPriceChannel.subscribe(msg => {
  console.log(`${msg.data.side} at ${msg.data.price}`);
});
</script>

<style scoped>
</style>