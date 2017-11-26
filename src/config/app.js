// 系统配置项
/**
 * Api接口地址
 */
let ApiRootUrl = 'http://112.124.46.250:8090'

let Locale = 'default'
// 如果是 epc 编译环境，则设置 locale，另外设置api接口地址为epc的地址。
if (process.BUILD_LOCALE === 'epc') {
  Locale = 'epc'
  ApiRootUrl = 'http://106.14.76.113:8090'
} else if (process.BUILD_LOCALE === 'default') {
  ApiRootUrl = 'http://112.124.46.96:8090'
} else if (process.BUILD_LOCALE === 'local') {
  Locale = 'epc'
  ApiRootUrl = 'http://localhost:8090'
}

export {ApiRootUrl, Locale}