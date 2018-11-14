module.exports = {
    title: '落天罐头',
    description: '懒虫笔记',
    base: 'blog',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文章', link: '/vue/' },
            { text: '谷歌', link: 'https://google.com' }
        ],
        sidebar: {
            '/vue/': [
                '',
                'one',
            ],
            '/iOS/': [
                '',
                'runtime'
            ]
        },
        lastUpdated: 'Last Updated'

    },

}