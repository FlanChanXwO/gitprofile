const config = {
  base: '/gitprofile/', 
  github: {
    username: 'FlanChanXwO', 
  },
  seo: {
    title: 'FlanChanXwO | Developer Portfolio',
    description: 'Experienced developer of QQ bot plugins and more.',
    image: '',
  },
  social: {
    gitee: 'https://gitee.com/flanchanowo',
    bilibili: 'https://space.bilibili.com/184855403',
    steam: 'https://steamcommunity.com/id/Flan_owo',
    twitter: '',
    linkedin: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    website: '',
    phone: '',
    email: 'badapple495@outlook.com', 
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
      projects: [], 
    },
  },
  // 关键修复点：添加统计对象，防止读取 'id' 报错
  googleAnalytics: {
    id: '', // 留空即可
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',
    respectPrefersColorScheme: false,
    displayAppBarHighlight: true,
    fontFamily: 'sans-serif',
  },
  footer: `Made with ❤️`,
};

export default config;
