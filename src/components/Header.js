import PropTypes from 'prop-types';
import { useState } from 'react';
import Categories from './Categories';
import { link } from '../api/link';
import { useTranslation } from 'react-i18next';

function Header({ setSearch }) {

  const { t } = useTranslation();
  const [className, setClassName] = useState(null)

  const handleChange = (id) => {
    setClassName(id)
    setSearch(link + '&section=' + id)
  }

  return (
    Categories.map((index) => (
      <button
        className={index.id === className ? 'option active' : 'option disactive'}
        key={index.id}
        onClick={() => handleChange(index.id)}>
        <img src={index.img} alt={index.alternative_name} /> {t('Category.'+index.name)}
      </button>
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