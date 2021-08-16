import PropTypes from 'prop-types'

const onClick = () => {
        return (
//             instance.get('/search?api-key=86069387-0efe-47f5-a62d-bc65c5e9e7db&q='+props.id).then((response) => {
            //Jak zmienic opcje w menu
            //popracowac nad zmiana w API
             
            console.log("dziala")
        );
}


const Header = (props) => {
    return (<button className="option" onClick={onClick} style={{backgroundColor: props.color}}><img src={props.img} alt={props.name}></img>{props.title}</button>);
}

Header.defaultProps ={
    title: 'Opis',
    color: 'gray',
}

Header.propTypes ={
    title: PropTypes.string.isRequired,
}

export default Header;