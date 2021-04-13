import React from 'react'

const ImageSlide = ({ img }) => {

    const imgStyle = {
        width: 100 + '%',
        height: 'auto'
    }

    return (
        <img
            className='slide__img'
            src={img}
            style={imgStyle}
            alt='slide-img'
        />
    )
}

export default ImageSlide
