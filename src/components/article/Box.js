
import NewspaperImage from '../../media/images/newspaperBox.avif';
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
                <img src={NewspaperImage} alt='NewspaperImage' />
            </div>
            <div className='text'><a href={link}>{name}</a></div>
        </div>
    );
}
export default Box;
