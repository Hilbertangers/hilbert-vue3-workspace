import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'

export default defineConfig({
  title: 'hilbert-vue3-ui',
  description: '一个现代化的 Vue3 组件库',
  base: process.env.NODE_ENV === 'production' ? '/hilbert-vue3-workspace/' : '/',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/' },
      { text: '指南', link: '/guide/' },
      { text: 'vue2版本', link: 'https://github.com/Hilbertangers/hilbert-vue-ui' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
        },
      ],
      '/components/': [
        {
          text: '组件概览',
          items: [
            { text: 'Flow 与或逻辑图绘制器', link: '/components/Flow' },
            { text: 'SkuChoose 商品 SKU 选择组件', link: '/components/SkuChoose' },
            { text: 'PinInput 验证码输入框', link: '/components/PinInput' },
            { text: 'Spotlight 全局搜索', link: '/components/Spotlight' },
            { text: 'BulbSwitch 灯泡开关', link: '/components/BulbSwitch' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hilbertangers/hilbert-vue3-workspace' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present',
    },
  },
  vite: {
    resolve: {
      alias: {
        '@vue3-ui/components': '../packages/components/src',
        '@vue3-ui/theme': '../packages/theme/src',
      },
    },
    optimizeDeps: {},
  },
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin)
    },
  },
})
