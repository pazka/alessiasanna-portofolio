
import * as React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    color : gray;
    font-size : 0.8em;

    display: flex;
    flex-direction: column;
`;

const Footer = ()=>{
    return <Wrapper>
        <p>Designed by Alessia Sanna, Delivered by Alexandre Weisser</p>
        <a href = "mailto: a.sannaprojects@gmail.com">a.sannaprojects@gmail.com</a>

        <a href="tel:06.74.00.25.70">06.74.00.25.70</a>
    </Wrapper>
}

export default Footer