import React from 'react';
import './index.less';

const worksData = [
  {
    name: '自由音乐',
    desc: '一款桌面音乐应用，可跨端 Windows 和 Mac 使用，支持播放用户本地音乐、创建歌单分组管理、搜索、歌词动效、随机播放、播放队列修改、播放进度音量控制等功能。',
    techs: ['react', 'electron'],
    preview: '',
    github: 'https://github.com/free-dev-gf/free_music',
    text: 'FreeMusic',
    img: require('@/assets/images/1.jpg'),
  },
];

export default function Works() {
  return (
    <div className="c-works">
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
    </div>
  );
}
