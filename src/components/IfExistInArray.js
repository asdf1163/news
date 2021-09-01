import { createContext, useState } from 'react';

export const IfExistInArray = createContext();

export const IfExistInArrayProvider = (props) => {

    const [toggle, setToggle] = useState(true)

    //check if link exist in a list
    return (
        <IfExistInArray.Provider value={[toggle, setToggle]}>
            {props.children}
        </IfExistInArray.Provider>
    );
};