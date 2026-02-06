const config = {
  github: {
    username: 'FlanChanXwO', 
  },
  social: {
    gitee: 'https://gitee.com/flanchanowo',
    bilibili: 'https://space.bilibili.com/184855403',
    steam: 'https://steamcommunity.com/id/Flan_owo'
  },
  skills: [
    'Python', 'Java', 'TypeScript', 'MySQL', 'Docker'
  ],
  projects: {
    github: {
      display: true, // 开启自动展示
      header: 'My Projects',
      mode: 'automatic',
      limit: 10,
      exclude: {
        forks: false, // 是否排除fork的项目
        projects: [], // 排除特定的项目
      },
    },
  },
  themeConfig: {
    defaultTheme: 'dark',
  }
}
