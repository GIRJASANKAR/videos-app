import React from 'react';
import SingleVideo from './SingleVideo'
class Listvideoo extends React.Component{
    render(){
        
        const single=this.props.arrayBhejRa.map((ekek)=>{
              
              return <SingleVideo key={ekek.id.videoId} video={ekek} ekaurprop={this.props.ekaurprop}/>
        })
        
        return(
           <div className="ui list">{single}</div>
        );
    }
}

export default Listvideoo;