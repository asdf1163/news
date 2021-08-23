//import React, { useState } from 'react'

const Later = ({link, setList, list, toggle, setToggle}) => {
  //const [toggle, setToggle] = useState(true)
  //console.log(setToggle)

  const addToList = (link) => {
    setList(array => [...array, link])
  }

  const deleteFromList = (link, list) => {
    setList(list.filter((option) => option !== link))
  }

  const handleClick = ({link, list}) => {
    toggle ? addToList(link):deleteFromList(link, list)
    setToggle(!toggle)
  }

  //console.log('exist: '+ setToggle(link, list))


  return (
    <div>
      <button onClick={() => handleClick({link, list, setList})} style={toggle ? { backgroundColor: '' } : { backgroundColor: 'red' }}>
        {toggle ? 'Na później' : 'Cofnij'}
      </button>
    </div>
  );
}
export default Later