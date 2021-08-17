import PropTypes from 'prop-types';
import React from 'react';

//const [click,onClick] = useState();
class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          data: props.id,
          img: {
               src:props.img
          },
          title: props.title,
          alt: props.name,
          bgcolor: 'none'
        };

        this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isActiveIndex: !prevState.isActiveIndex
      }));
    }

    
  
    render() {
      return (
        <button className="option" onClick={this.handleClick} style={this.state.isActiveIndex?{backgroundColor: 'red'}:{backgroundColor: ''}}>
            <img src={this.state.img.src} alt={this.state.name}></img>{this.state.title}
        </button>
      );
    }
  }
// const Header = (props) => {
//     return (<button className="option" data={props.id} onClick={onClick}><img src={props.img} alt={props.name}></img>{props.title}</button>);
// }

Header.defaultProps ={
    title: 'Opis',
    color: 'gray',
}

Header.propTypes ={
    title: PropTypes.string.isRequired,
}

export default Header;