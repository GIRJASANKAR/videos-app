import React from 'react'; 
import './SingleVideo.css';
class SingleVideo extends React.Component {
    render() {
        return (
            <div onClick={()=>{this.props.ekaurprop(this.props.video)}} className="single-video item">
                <img className="ui image" src={this.props.video.snippet.thumbnails.high.url} alt="ni ho paayi load" />
                <div className="content">
                    <div className="header"> {this.props.video.snippet.title} </div>
                </div>
            </div>


        );
    }
}

export default SingleVideo;

                // <div>
                //         <img src={this.props.video.snippet.thumbnails.high.url} />
                //         {this.props.video.snippet.title}
                //     </div>

                // <div class="ui relaxed divided list">

                // <div className="description">{this.props.video.snippet.description}</div>