import React, { useState } from 'react'

const Later = ({link, setList, list}) => {
  const [toggle, setToggle] = useState(true)

  const addToList = (link) => {
    setList(array => [...array, link])
  }

  const deleteFromList = (link, list, setList) => {
    setList(list.filter((option) => option !== link))
  }

  const handleClick = ({link, list, setList}) => {
    toggle ? addToList(link):deleteFromList(link, list, setList)
    setToggle(!toggle)
  }

  // const existInArray = (link, list) => {
  //       list.map((option) => option === link)? setToggle(false) : setToggle(true)
  // }

  return (
    <div>
      <button onClick={() => handleClick({link, list, setList})} style={toggle ? { backgroundColor: '' } : { backgroundColor: 'red' }}>
        {toggle ? 'Na później' : 'Cofnij'}
      </button>
    </div>
  );
}
export default Later