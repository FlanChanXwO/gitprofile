const config = {
  github: {
    username: 'FlanChanXwO', 
  },
  seo: {
    title: 'Portfolio of FlanChanXwO',
    description: '',
    image: '',
  },
  social: {
    gitee: 'https://gitee.com/flanchanowo',
    bilibili: 'https://space.bilibili.com/184855403',
    steam: 'https://steamcommunity.com/id/Flan_owo'
  },
  resume: {
    fileUrl: '', 
  },
  skills: [
    'Python', 'Java', 'TypeScript', 'MySQL', 'Docker'
  ],
  projects: {
    github: {
      display: true, 
      header: 'My Projects',
      mode: 'automatic',
      limit: 10,
      exclude: {
        forks: false, 
        projects: [], 
      },
    },
    external: {
      header: 'My Projects',
      projects: [], // 外部项目留空即可
    },
  },
  footer: `Made with ❤️`,
  themeConfig: {
    defaultTheme: 'dark',
    respectPrefersColorScheme: false,
    displayAppBarHighlight: true,
    fontFamily: 'sans-serif',
  },
};

export default config;
