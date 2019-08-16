import Vue from 'vue'
import App from './App.vue'
import '@progress/kendo-ui'
import '@progress/kendo-ui/js/kendo.dataviz.chart'
import '@progress/kendo-ui/js/kendo.dataviz.sparkline'
import '@progress/kendo-theme-default/dist/all.css'
import {
  Chart,
  ChartInstaller,
  Sparkline,
} from '@progress/kendo-charts-vue-wrapper'

Vue.config.productionTip = false
Vue.use(ChartInstaller)

new Vue({
  render: h => h(App),
  components: {
    Chart,
    Sparkline
  }
}).$mount('#app')