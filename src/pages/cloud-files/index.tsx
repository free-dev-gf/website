import React from 'react';
import ReactDOM from 'react-dom';
import Preview from '@comp/preview';
import video from '@assets/videos/cloudfiles.mp4';
import img1 from '@assets/screenshots/cloudfiles-1.jpg';
import img2 from '@assets/screenshots/cloudfiles-2.jpg';

class CloudFiles extends React.Component {
    render() {
        return (
            <Preview
                title="CloudFiles"
                video={video}
                screenshots={[img1, img2]}
            />
        );
    }
}

ReactDOM.render(<CloudFiles />, document.getElementById('app'));
