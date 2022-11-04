import type { SidebarConfig } from 'vuepress'

const sidebar: SidebarConfig = {
    '/': [
        {
            text: '文档',
            children: [
                'README.md',
                'setup.md',
                'basic.md',
                'http.md',
                'url.md',
                'querystring.md'
            ]
        }
    ]
}

export default sidebar
