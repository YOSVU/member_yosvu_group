import { defineUserConfig } from 'vuepress'
import { gitPlugin } from '@vuepress/plugin-git'
import { searchPlugin } from '@vuepress/plugin-search'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({

    head: [['link', { rel: 'icon', href: 'https://yosvu.eu.org/img/logo.ico' }]],
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/en/': {
          lang: 'English',
          title: 'YOSVU Member',
          description: 'Youth Open Source Virtual University Group Member Achieved',
        },
        '/zh/': {
          lang: '中文',
          title: '青年开源虚拟大学 团队档案',
          description: '青年开源虚拟大学团队档案存档',
        },
      },
  lang: 'zh',
  title: '青开大团队档案',
  description: '青年开源虚拟大学团队档案存档',
  theme: defaultTheme({
    logo: 'https://yosvu.eu.org/img/logo.ico',
    repo: 'YOSVU/member_yosvu_group',
    locales: {
      '/en/': {
        selectLanguageName: 'English',
      },
      '/zh/': {
        selectLanguageName: '简体中文',
      },
    },
  }),
  plugins: [
    gitPlugin({
      // 配置项
    }),

    searchPlugin({
      // 配置项
    }),
    nprogressPlugin(),
  ],
})
