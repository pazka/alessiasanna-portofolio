import * as React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    height : 5vh
`;

const Header = ()=>{
    return <Wrapper><h1><a href='/'>Alessia Sanna</a></h1></Wrapper>
}

export default Header