
import Joker from '../../media/images/joker.jpg';
import ToggleButton from "../ToggleButton";
import './article.css';


const Box = ({ link, name, setList, list }) => {
    const handleChange = (data) => {
        setList(data)
    }

    return (
        <div className='article'>
            <div className="later">
                <ToggleButton link={link} changeList={handleChange} ifExist={list.find((option) => option === link ? true : false)} />
            </div>
            <div className='img'>
                <img src={Joker} alt='Joker' />
            </div>
            <div className='text'><a href={link}>{name}</a></div>
        </div>
    );
}
export default Box;
