import Later from './Later';
import Joker from '../media/images/joker.jpg';

const Box = ({link, name, setList, list}) => {
    return (
        <div className='article'>
            <div className="later"><Later link={link} nameArticle={name} setList={setList} list={list}/></div>
            <div className='img'><img src={Joker} alt=''></img></div>
            <div className='text'><a href={link}>{name}</a></div>
        </div>
    );
}

export default Box;