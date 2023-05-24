import React from 'react';
import womenImage from './images/women.png';
import homeImage from './images/home.png';
import girlImage from './images/girl.png';
import './Cards0.css';


function Cards() {
    const array = [
        {
            id: 1,
            title: 'Supporting Commuity Health',
            imag1: womenImage,
            date: 'May 23, 2022'
        },
        {
            id: 2,
            title: 'Planning for the future: a new framework for improving health outcomes worldwide',
            imag1: homeImage,
            date: 'October 10, 2022'
        },
        {
            id: 3,
            title: 'Women in leadership: paving the way for equal health',
            imag1: girlImage,
            date: 'December 07, 2022'
        }
    ]
    // console.log(array);

    return (
        <div>
            <div className='d-flex flex-wrap justify-content-lg-between justify-content-center my-5' >
                {array.map(item => {
                    return (
                        <div className="card card3 rounded-0 mt-3  shadow border-0 " key={item.id}>
                            <img src={item.imag1} className="card-img-top rounded-0 brdr " alt="..." />
                            <div className="card-body border-0 ">
                                <p className="card-text fst-italic mb-5">{item.title}</p>
                                <p className='mb-0'>{item.date}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards;
