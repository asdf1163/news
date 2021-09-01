import React, { useState } from 'react'
import { BsClockHistory, BsX, BsTrash } from "react-icons/bs";

const Button = ({ list, DeleteFromList }) => {

    const [button_list, setButtonList] = useState(true)

    const onClick = () => {
        return setButtonList(!button_list);
    }

    const DeleteOption = (link) => {
        DeleteFromList({ link, remove: true })
    }

    const listItems = list.map((id) =>
        <div key={id}>
            <li>{id}</li>
            <BsTrash style={{ color: 'red', height: '35px', width: '35px', cursor: 'pointer' }} onClick={() => DeleteOption(id)} />
        </div>
    );

    const linkList = () => {
        return (
            <div className="links">
                <ul>{listItems}</ul>
            </div>
        );
    }

    return (
        <div>
            <p key={'LaterList'}
                onClick={() => onClick()}> {button_list ?
                    <BsClockHistory style={{ height: '35px', width: '35px', cursor: 'pointer' }} /> :
                    <BsX style={{ color: 'red', height: '35px', width: '35px', cursor: 'pointer' }} />}</p>
            <>{button_list ? '' : linkList()}</>
        </div>
    );
}

export default Button
