/*
 * @Descripttion:
 * @Author: pangpf
 * @Date: 2022-01-04 10:03:24
 * @LastEditors: pangpf
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn' // 中文语言
import 'element-plus/dist/index.css'

import * as echarts from 'echarts'

import highcharts from 'highcharts'
import highcharts3d from 'highcharts/highcharts-3d'

// highcharts 3d
highcharts3d(highcharts)

const app = createApp(App)
app.use(router)

// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
    locale: locale
})

app.config.globalProperties.echarts = echarts
declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        echarts: any,
    }
  }


app.mount('#app')
