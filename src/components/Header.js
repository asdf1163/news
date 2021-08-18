import PropTypes from 'prop-types';

function Header({id, name, title, img, handleChange})
{
  return (
  <button className="option" data={id} onClick={() => handleChange(id)}><img src={img} alt={name}></img>{title}</button>
  );
}

Header.defaultProps ={
    title: 'Opis',
    color: 'gray',
}

Header.propTypes ={
    title: PropTypes.string.isRequired,
}

export default Header;