import PropTypes from 'prop-types'


const Header = (props) => {
    return (
        <header>
            <button className="option" style={{backgroundColor: props.color}}>{props.title}</button>
        </header>
    );
}

Header.defaultProps ={
    title: 'Opis',
    color: 'black',
}

Header.propTypes ={
    title: PropTypes.string.isRequired,
}

export default Header;