import React, { useState } from 'react'
import ImageSlide from './ImageSlide'
import Icon from './Icon'

export default function Slider() {
    const [x, setX] = useState(0)

    let slider = [
        <ImageSlide img={'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=954&q=80'} />,
        <ImageSlide img={'https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'} />,
        <ImageSlide img={'https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'} />,
    ]

    const onLeft = () => {
        x === 0 ?
            setX(-100 * (slider.length - 1))
            : setX(x + 100)
    }

    const onRight = () => {
        (x === (-100 * (slider.length - 1))) ?
            setX(0)
            : setX(x - 100)
    }

    return (
        <div className='slider'>
            {slider.map((item, index) => <div key={index} className='slider__slide' style={{ transform: `translateX(${x}%)` }}>{item}</div>)}
            <button className='slider__button slider__button--left' onClick={onLeft}>
                <Icon name="fas fa-chevron-left" />
            </button>
            <button className='slider__button slider__button--right' onClick={onRight}>
                <Icon name="fas fa-chevron-right" />
            </button>
        </div>
    )
}
