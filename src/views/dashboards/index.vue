<!--
 * @Descripttion: hello world
 * @Author: pangpf
 * @Date: 2022-01-04 10:24:32
 * @LastEditors: pangpf
-->
<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="big-screen-template Vue 3 + Vite" />
    <img :src="codeImg" alt="">
    <div class="echarts-container">
      <div id="main" style="height: 200px; width: 400px;"></div>
      <Chart :options="chartOption"></Chart>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getCodeImg } from '@/api/dashboards'
import HelloWorld from '@/components/HelloWorld.vue'
import { Chart } from 'highcharts-vue'

// 接口测试
const codeImg = ref('')
async function fetchInfo () {
  const { img } = await getCodeImg()
  codeImg.value = `data:image/png;base64,${img}`
}
fetchInfo()

const chartOption = {
  chart: {
    type: 'pie',
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0
    }
  },
  title: {
      text: '2014年某网站不同浏览器访问量占比'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      depth: 35,
      dataLabels: {
          enabled: true,
          format: '{point.name}'
      }
    }
  },
  series: [{
    type: 'pie',
    name: '浏览器占比',
    data: [
        ['Firefox', 45.0],
        ['IE', 26.8],
        {
          name: 'Chrome',
          y: 12.8,
          sliced: true,
          selected: true
        },
        ['Safari', 8.5],
        ['Opera', 6.2],
        ['Others', 0.7]
    ]
  }]
}

const { proxy } = getCurrentInstance()
onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = proxy.echarts.init(document.getElementById('main'))
  // 绘制图表
  myChart.setOption({
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  })
})
</script>
<style lang="scss">
.echarts-container {
  display: flex;
  justify-content: center;
}
</style>
