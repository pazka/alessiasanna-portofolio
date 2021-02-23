
import * as React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    color : gray;
    font-size : 0.8em;

    display: flex;
    flex-direction: column;
    
    bottom : 2rem;
    right : 2rem;
`;

const Footer = ()=>{
    return <Wrapper>
        <p>Designed by Alessia Sanna, Delivered by Alexandre Weisser</p>
    </Wrapper>
}

export default Footer