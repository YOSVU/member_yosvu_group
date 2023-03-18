import { defineUserConfig } from 'vuepress'

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
})
