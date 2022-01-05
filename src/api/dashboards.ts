/*
 * @Descripttion: api测试
 * @Author: pangpf
 * @Date: 2022-01-04 10:51:07
 * @LastEditors: pangpf
 */
import request from '@/utils/request'

// 获取用户详细信息
export function getCodeImg() {
    return request({
        url: '/captchaImage',
        headers: {
            isToken: false
        },
        method: 'get',
        timeout: 20000
    })
}