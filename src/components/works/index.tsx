import React, { useRef } from 'react';
import { useScroll } from 'react-use';
import './index.less';

const worksData = [
  {
    name: 'CloudFiles',
    desc: '一个云端文件管理系统，支持创建账户或 GitHub 登录，支持手机和电脑上传、删除、下载文件，实践了 session、jwt、oauth 等多种登录鉴权技术及 mongodb、redis 等数据存储技术。',
    techs: ['koa', 'mongodb', 'nuxt', 'vue'],
    preview: '/cloud-files.html',
    github: 'https://github.com/free-dev-gf/cloud_files',
    text: '云文件',
    img: require('@assets/images/1.jpg'),
  },
  {
    name: 'FreeMusic',
    desc: '一款桌面音乐应用，可跨端 Windows 和 Mac 使用，支持播放用户本地音乐、创建歌单分组管理、搜索、歌词动效、随机播放、播放队列修改、播放进度音量控制等功能。',
    techs: ['react', 'electron', 'webpack', 'webAduio', 'nodejs'],
    preview: '/free-music.html',
    github: 'https://github.com/free-dev-gf/free_music',
    text: '音乐',
    img: require('@assets/images/2.jpg'),
  },
  {
    name: 'Shopping',
    desc: '一个基于 Flutter 开发的购物 APP 示例项目，可跨端 Android、iOS、Web 使用，支持商品分类展示、购物车、商品数量管理、商品详情展示等功能。',
    techs: ['flutter', 'dart'],
    preview: '/shopping.html',
    github: 'https://github.com/free-dev-gf/market',
    text: '电商购物',
    img: require('@assets/images/3.jpg'),
  },
];

export default function Works() {
  const worksRef = useRef<HTMLDivElement>(null);
  const { y } = useScroll(worksRef);
  const { clientHeight = 0, scrollHeight = 0 } = worksRef.current || {};

  return (
    <div className="c-works" ref={worksRef}>
      {worksData.map((w) => (
        <div key={w.name} className="c-works-item">
          <div className="c-works-item-info">
            <div className="c-works-item-info-name">{w.name}</div>
            <div className="c-works-item-info-techs">
              {w.techs.map((tech) => (
                <div key={tech}>{tech}</div>
              ))}
            </div>
            <div className="c-works-item-info-desc">{w.desc}</div>
            <span
              className="c-works-item-info-preview"
              onClick={() => window.open(w.preview)}
            >
              效果预览
            </span>
            <span
              className="c-works-item-info-github"
              onClick={() => window.open(w.github)}
            >
              GitHub
            </span>
          </div>
          <div className="c-works-item-clip">
            <div className="c-works-item-clip-img">
              <img src={w.img} />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="380px"
              height="380px"
              viewBox="0 0 600 530"
            >
              <polygon points="150.7,520.8 1.5,262.4 150.7,4 449,4 598.2,262.4 449,520.8" />
            </svg>
            <span className="c-works-item-clip-text">{w.text}</span>
          </div>
        </div>
      ))}
      <div
        className={`c-works-down${
          scrollHeight - (clientHeight + y) < 100 ? ' toggle' : ''
        }`}
      >
        <img src={require('@assets/images/down2.svg')} />
        <img src={require('@assets/images/down1.svg')} />
      </div>
    </div>
  );
}
