import PropTypes from 'prop-types';
import { useState } from 'react';
import Categories from './Categories';

function Header({ setSearch }) {

  const [className, setClassName] = useState(null)

  const handleChange = (id) => {
    setClassName(id)
    setSearch('/search?show-elements=image&api-key=86069387-0efe-47f5-a62d-bc65c5e9e7db&section=' + id)
  }

  return (
    Categories.map((index) => (
      <button className={index.id === className ? 'option active': 'option disactive'} key={index.id} 
      onClick={() => handleChange(index.id)}><img src={index.img} alt={index.alternative_name}></img>{index.name}</button>
    ))
    )
}

Header.defaultProps = {
  title: 'Opis',
  color: 'gray',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;