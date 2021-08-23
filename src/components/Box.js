import {useState, useEffect} from 'react';
import Later from './Later';
import Joker from '../media/images/joker.jpg';

const Box = ({link, name, setList, list}) => {
    const [toggle,setToggle] = useState(true);

    useEffect (() => {
        const existInArray = (link, list) => {    
            list.map((option) => option === link)? setToggle(false) : setToggle(true)
            //return false
        }
        console.log(list)
        // Zmienna 'list' powtarza się w App.js/Box w pętil i wywołuje się pełno zbędnych tablic
    }, []);

    return (
        <div className='article'>
            <div className="later"><Later link={link} nameArticle={name} setList={setList} list={list} toggle={toggle} setToggle={setToggle /*existInArray(link, list)*/}/></div>
            <div className='img'><img src={Joker} alt=''></img></div>
            <div className='text'><a href={link}>{name}</a></div>
        </div>
    );
}
export default Box;