import * as React from 'react'
import ImageGallery from 'react-image-gallery'
import styled from 'styled-components';
import "react-image-gallery/styles/css/image-gallery.css";


const Wrapper = styled.div`
`

class MyImageGallery extends ImageGallery{
    constructor(props){
        super(props)
    }

    renderLeftNav(onClick, disabled) {
        return (
            <Wrapper>
                <button
                    className='custom-navigation image-gallery-custom-left-nav'
                    disabled={disabled}
                    onClick={onClick}/>
            </Wrapper>
        )
    }
    
    renderRightNav(onClick, disabled) {
        return (
            <Wrapper>
                <button
                    className='custom-navigation image-gallery-custom-right-nav'
                    disabled={disabled}
                    onClick={onClick}/>
            </Wrapper>
        )
    }
}

export default MyImageGallery