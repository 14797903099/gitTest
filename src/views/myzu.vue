<template>
  <div ref="line" style="height:400px">

  </div>
</template>
<script>
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 引入柱状图
import 'echarts/lib/chart/bar'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
export default {
  data() {
    return {
      option:{
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  },
  methods: {
    inItChart() {
      let myChart = echarts.init(this.$refs.line)
      myChart.setOption(this.option)
    }
  },
  mounted () {
    this.inItChart()
  }
}
</script>
