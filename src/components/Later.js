import React, {useState} from 'react'

  const Later = ({link, nameArticle}) => {
    const [toggle, setToggle] = useState(true)

    const addToList = (link) => {
      return console.log(link)
    }
    

    const handleClick = () =>
    {
      return(
        setToggle(!toggle),
        addToList(link)
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