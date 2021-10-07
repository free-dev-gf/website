import React from 'react';
import './index.less';

export const menuNames = ['首页', '作品'];

interface IProps {
    activeMenu: string;
    onChangeMenu: (name: string) => void;
}

export default function Menu(props: IProps) {
    const { activeMenu, onChangeMenu } = props;

    return (
        <div className="c-menu animate__animated animate__fadeIn">
            {menuNames.map((name) => (
                <div
                    key={name}
                    className={`c-menu-item${
                        activeMenu === name ? ' active' : ''
                    }`}
                    onClick={() => {
                        onChangeMenu(name);
                    }}
                >
                    <span>{name}</span>
                    <div className="mark" />
                </div>
            ))}
            <div className="c-menu-other">
            <div
                className="c-menu-other-item"
                onClick={() =>
                    window.open('/resume.pdf')
                }
            >
                <img src={require('@assets/images/resume.svg')} />
                简历
            </div>
            <div
                className="c-menu-other-item"
                onClick={() =>
                    window.open(
                        'https://github.com/free-dev-gf?tab=repositories',
                    )
                }
            >
                <img src={require('@assets/images/github.svg')} />
                GitHub
            </div>
            </div>
            
        </div>
    );
}
