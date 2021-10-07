import React from 'react';
import './index.less';

interface IPreviewProps {
    title: string;
    video: string;
    screenshots: string[];
}

export default class Preview extends React.Component<IPreviewProps> {
    constructor(props: IPreviewProps) {
        super(props);
    }
    render() {
        return (
            <div className="c-preview">
                <div className="c-preview-title">{this.props.title}</div>
                {/* @ts-ignore */}
                <div className="c-preview-video">
                    <div className="c-preview-sub-title">演示视频</div>
                    <video src={this.props.video} autoPlay muted loop controls playsInline />
                </div>
                <div className="c-preview-screenshots">
                    <div className="c-preview-sub-title">截图</div>
                    {this.props.screenshots.map((s, i) => <img key={i} src={s} />)}
                </div>
            </div>
        );
    }
}
