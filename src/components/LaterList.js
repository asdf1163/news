import React, {useState} from 'react'
import { BsClockHistory, BsX} from "react-icons/bs";

const Button = ({list}) => {
    

    const [button_list, setList] = useState(true)

    const onClick = () => {
        return setList(!button_list);
    }

    const listItems = list.map((id) => <li>{id}</li>);

    const lista = ({list}) =>{
        return (
            <div className="links">
                    {listItems}
            </div>
        );
    }

    return (
        <div>
            <p onClick={() => onClick()}> {button_list ? <BsClockHistory style={{height: '35px', width: '35px'}}/> : <BsX style={{color: 'red', height: '35px', width: '35px'}}/>}</p>
            <>{button_list ? '' : lista({list})}</>
        </div>
        


    );
}

export default Button