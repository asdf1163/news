import React, {useState} from 'react'
import { BsClockHistory, BsX} from "react-icons/bs";

const Button = ({list}) => {
    
    const [button_list, setList] = useState(true)

    const onClick = () => {
        return setList(!button_list);
    }

    const listItems = list.map((id) => <li key={id}>{id}</li>);

    const lista = (id) => {

        return (
            <div className="links">
                   <ul>{listItems}</ul>
            </div>
        );
    }

    return (
        <div>
            <p key={'LaterList'} onClick={() => onClick()}> {button_list ? <BsClockHistory style={{height: '35px', width: '35px', cursor: 'pointer' }}/> : <BsX style={{color: 'red', height: '35px', width: '35px', cursor: 'pointer'}}/>}</p>
            <>{button_list ? '' : lista({list})}</>
        </div>
    );
}

export default Button