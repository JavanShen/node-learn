import { defaultTheme, defineUserConfig } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
import { sidebar } from './configs'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'NodeNote',
    description: 'Node.js笔记',
    head: [['link', { rel: 'icon', href: '/Nodejs.png' }]],
    markdown: {
        importCode: {
            handleImportPath: str =>
                str.replace(/^@/, path.resolve(__dirname, '../../code'))
        }
    },
    theme: defaultTheme({
        locales: {
            '/': {
                sidebar
            }
        },
        repo: 'https://github.com/JavanShen/node-learn',
        docsBranch: 'main',
        editLinkText: '在 GitHub 上编辑此页',
        editLinkPattern: ':repo/edit/:branch/docs/:path'
    })
})
