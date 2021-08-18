import React, {useState} from 'react'

  const Later = (props) => {
    const [toggle, setToggle] = useState(true)

    const addToList = (link) => {
      return console.log(props.link)
    }
    

    const handleClick = () =>
    {
      return(
        setToggle(!toggle),
        addToList(props.link)
      )
    }

      return (
        <div>
          <button onClick={handleClick} style={toggle?{backgroundColor: ''}:{backgroundColor: 'red'}}>
          {toggle ? 'Na później' : 'Cofnij'}
          </button>
        </div>
      );
  }
  export default Later