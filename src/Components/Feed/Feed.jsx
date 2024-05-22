import React from 'react';
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';

const Feed=()=>{

    return (
        <div className='feed'>
        <div className='card'>
            <img src={thumbnail1} alt=""></img>
            <h2>Best Channel to learn coding as web developer</h2>
            <h3>GreatStack</h3>
            <p>15k Views;2days ago</p>
        </div>
        <div className='card'>
            <img src={thumbnail2} alt=""></img>
            <h2>Best Channel to learn coding as web developer</h2>
            <h3>GreatStack</h3>
            <p>15k Views;2days ago</p>
        </div>
        <div className='card'>
            <img src={thumbnail3} alt=""></img>
            <h2>Best Channel to learn coding as web developer</h2>
            <h3>GreatStack</h3>
            <p>15k Views;2days ago</p>
        </div>
        <div className='card'>
            <img src={thumbnail4} alt=""></img>
            <h2>Best Channel to learn coding as web developer</h2>
            <h3>GreatStack</h3>
            <p>15k Views;2days ago</p>
        </div>
        <div className='card'>
            <img src={thumbnail5} alt=""></img>
            <h2>Best Channel to learn coding as web developer</h2>
            <h3>GreatStack</h3>
            <p>15k Views;2days ago</p>
        </div>
        <div className='card'>
            <img src={thumbnail6} alt=""></img>
            <h2>Best Channel to learn coding as web developer</h2>
            <h3>GreatStack</h3>
            <p>15k Views;2days ago</p>
        </div>
        <div className='card'>
            <img src={thumbnail7} alt=""></img>
            <h2>Best Channel to learn coding as web developer</h2>
            <h3>GreatStack</h3>
            <p>15k Views;2days ago</p>
        </div>
        <div className='card'>
            <img src={thumbnail8} alt=""></img>
            <h2>Best Channel to learn coding as web developer</h2>
            <h3>GreatStack</h3>
            <p>15k Views;2days ago</p>
        </div>
        </div>

    )
}
export default Feed;