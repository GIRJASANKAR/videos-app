import React from 'react';

class YeVideo extends React.Component {
    render() {
        if (!this.props.anew) {
            return <div></div>
        }
         const videoSrc=`https://www.youtube.com/embed/${this.props.anew.id.videoId}`
        return (
            <div>
                <div className="ui embed">
                    <iframe src={videoSrc} title="youtube se aayi hui video"/>
                </div>
                <div className="ui segment">
                    <h4 className="ui header"> {this.props.anew.snippet.title}  </h4>
                    <p>{this.props.anew.snippet.description}</p>
                </div>
            </div>
            
        );
    }
}

export default YeVideo;