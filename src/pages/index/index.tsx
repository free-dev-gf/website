import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MenuIcon from '../../components/menu-icon';
import './index.less';
import 'animate.css';
import Menu, { menuNames } from '@comp/menu';
import Works from '@comp/works';

function Home() {
    const renderText = (text: string) =>
        text.split('').map((word, i) => <span key={i}>{word}</span>);
    const [menuShow, setMenuShow] = useState(false);
    const [activeMenu, setActiveMenu] = useState(menuNames[0]);

    return (
        <div className="p-home">
            <div className="p-home-nav">
                <div>
                    <div className="p-home-nav-deco" />
                    <div className="p-home-nav-deco" />
                </div>
                <MenuIcon
                    isOpen={menuShow}
                    onOpen={() => setMenuShow(true)}
                    onClose={() => setMenuShow(false)}
                />
            </div>

            <div className="p-home-content">
                {activeMenu === menuNames[0] ? (
                    <>
                        <div className="p-home-content-name animate__animated animate__fadeInUp">
                            {renderText('梁高飞')}
                        </div>
                        <div className="p-home-content-text animate__animated animate__fadeInUp">
                            {renderText('热爱探索前端技术')}
                        </div>
                        <div className="p-home-content-btn animate__animated animate__fadeInUp">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="p-home-content-btn-deco"
                                >
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} />
                                    ))}
                                </div>
                            ))}
                            <div
                                className="p-home-content-btn-text"
                                onClick={() => setActiveMenu('作品')}
                            >
                                {renderText('查看作品')}
                            </div>
                        </div>
                    </>
                ) : null}
                {activeMenu === menuNames[1] ? <Works /> : null}
                {menuShow ? (
                    <Menu
                        activeMenu={activeMenu}
                        onChangeMenu={(name: string) => {
                            setMenuShow(false);
                            setActiveMenu(name);
                        }}
                    />
                ) : null}
            </div>
        </div>
    );
}

ReactDOM.render(<Home />, document.getElementById('app'));
