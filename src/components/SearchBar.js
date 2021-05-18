import React from 'react';


class SearchBar extends React.Component {
    state={answer:''};
  onSubmitHandler=(event)=>{
      event.preventDefault();
      this.props.lekeaa(this.state.answer);
  }
    render() {
        
        return (<div className="ui segment">
            <form onSubmit={this.onSubmitHandler} className="ui form">
                <div className="field">
                    <label>Search your video</label>
                    <input value={this.state.answer} onChange={(e)=>{this.setState({answer:e.target.value})}} type="text" />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;