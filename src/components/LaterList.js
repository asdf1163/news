import React, {useState} from 'react'
import { BsClockHistory, BsX} from "react-icons/bs";

const Button = () => {
    

    const [button_lista, setLista] = useState(true)

    const onClick = () => {
        return setLista(!button_lista);
    }

    const lista = () =>{
        return (
            <div className="lista"></div>
        );
    }

    return (
        <div>
            <p onClick={() => onClick()}> {button_lista ? <BsClockHistory style={{height: '35px', width: '35px'}}/> : <BsX style={{color: 'red', height: '35px', width: '35px'}}/>}</p>
            <>{button_lista ? '' : lista()}</>
        </div>
        


    );
}

export default Button