import React from 'react'

export default function Slider() {


    let slider = [1, 2, 3]



    return (
        <div className='slider'>
            {slider.map((item, index) => <div key={index} className='slide'>{item}</div>)}
        </div>
    )
}
