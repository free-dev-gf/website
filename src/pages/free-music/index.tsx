import React from 'react';
import ReactDOM from 'react-dom';
import Preview from '@comp/preview';
import video from '@assets/videos/freemusic.mp4';
import img1 from '@assets/screenshots/freemusic-1.jpg';
import img2 from '@assets/screenshots/freemusic-2.jpg';
import img3 from '@assets/screenshots/freemusic-3.jpg';

class CloudFiles extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Preview
                title="FreeMusic"
                video={video}
                screenshots={[img1, img2, img3]}
            />
        );
    }
}

ReactDOM.render(<CloudFiles />, document.getElementById('app'));
