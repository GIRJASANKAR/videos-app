import React from 'react';
import YeVideo from './YeVideo';
import SearchBar from './SearchBar';
import Listvideoo from './ListVideoo'
import axios from 'axios'
const abc = 'AIzaSyD6ql8qeloSi4siZT3k8WJRAbN2H9oCqOo'
class App extends React.Component {
    state = { saarivideo: [], ekaurstate: null }

componentDidMount(){
    this.takeThatState('elon musk')
}

    takeThatState = async (takevalue) => {
        //  console.log(takevalue)
        const joaaya = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: { part: 'snippet', maxResults: 5, q: takevalue, key: abc }

        })
        this.setState({ 
            saarivideo: joaaya.data.items,
            ekaurstate: joaaya.data.items[0]
         })

    }

    ekaurcallback = (wahaselekeaaunga) => {
        this.setState({ 
            ekaurstate: wahaselekeaaunga,
            
         })
        

    }


    render() {
        return (
            <div className="ui container">
                
                <SearchBar lekeaa={this.takeThatState} />
                <div className="ui grid">  
                <div className="ui row">
                    <div className="eleven wide column">
                <YeVideo anew={this.state.ekaurstate} /></div>
               <div className="five wide column"> <Listvideoo arrayBhejRa={this.state.saarivideo} ekaurprop={this.ekaurcallback} /> </div>
                </div></div>
            </div>
        );
    }
}

export default App;