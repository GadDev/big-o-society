import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Big O Society',
  description: 'Recognize the pattern. Crack the problem.',
  appearance: 'force-dark',
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#090908' }],
    ['meta', { name: 'color-scheme', content: 'dark' }]
  ],

  themeConfig: {
    siteTitle: 'BIG O SOCIETY',
    nav: [
      { text: 'Case Files', link: '/patterns/' },
      { text: 'Curriculum', link: '/curriculum' }
    ],
    sidebar: {
      '/patterns/': [
        {
          text: 'CASE FILES',
          items: [
            { text: '01 · Two Pointers', link: '/patterns/two-pointers' },
            { text: '02 · Hash Map', link: '/patterns/hash-map' },
            { text: '03 · Sliding Window', link: '/patterns/sliding-window' },
            { text: '04 · Prefix Sum', link: '/patterns/prefix-sum' },
            { text: '05 · Stack', link: '/patterns/stack' },
            { text: '06 · Queue', link: '/patterns/queue' },
            { text: '07 · Binary Search', link: '/patterns/binary-search' },
            { text: '08 · Fast & Slow', link: '/patterns/fast-slow' },
            { text: '09 · DFS', link: '/patterns/dfs' },
            { text: '10 · BFS', link: '/patterns/bfs' },
            { text: '11 · Backtracking', link: '/patterns/backtracking' },
            { text: '12 · Greedy', link: '/patterns/greedy' },
            { text: '13 · Dynamic Programming', link: '/patterns/dynamic-programming' },
            { text: '14 · Graph Traversal', link: '/patterns/graph-traversal' }
          ]
        }
      ]
    },
    outline: {
      level: [2, 3],
      label: 'Evidence'
    },
    docFooter: {
      prev: 'Previous case',
      next: 'Next case'
    },
    search: {
      provider: 'local'
    },
    socialLinks: []
  }
})
