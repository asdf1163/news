import React from 'react'

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          id: 0,
          isToggleOn: true,
          name_article: props.name_article,
          link: props.link,
        };

  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    

    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <div>
          <button onClick={this.handleClick} style={this.state.isToggleOn?{backgroundColor: ''}:{backgroundColor: 'red'}}>
          {this.state.isToggleOn ? 'Na później' : 'Cofnij'}
          </button>
        </div>
      );
    }
  }
  export default Toggle