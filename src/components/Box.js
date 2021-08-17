import Later from './Later';
import Joker from '../media/images/joker.jpg';
//import Arrow from '../media/images/arrow.png';

const Box = (props) => {
    return (
        <div className='article'>
            {/* <div className='info'><img src={Arrow} alt='brak'></img></div> */}
            <div className="pozniej"><Later link={props.link} name_article={props.name}/></div>
            <div className='img'><img src={Joker} alt=''></img></div>
            <div className='text'><a href={props.link}>{props.name}</a></div>
        </div>
    );
}

export default Box;