import React from 'react';
import ReactDOM from 'react-dom';
import Preview from '../../preview';
import video from '@assets/videos/shopping.mp4';
import img1 from '@assets/screenshots/shopping-1.jpg';
import img2 from '@assets/screenshots/shopping-2.jpg';
import img3 from '@assets/screenshots/shopping-3.jpg';

class CloudFiles extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Preview
                title="shopping"
                video={video}
                screenshots={[img1, img2, img3]}
            />
        );
    }
}

ReactDOM.render(<CloudFiles />, document.getElementById('app'));
