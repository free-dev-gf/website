import React from 'react';
import './index.less';

const worksData = [
  {
    name: '',
    desc: '',
    techs: [],
    preview: '',
    github: '',
  },
];

export default function Works() {
  return (
    <div className="c-works">
      {worksData.map((w) => (
        <div key={w.name} className="c-works-item">
          {w.name}
        </div>
      ))}
    </div>
  );
}
