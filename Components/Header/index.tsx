import * as React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    z-index : 10
`;

const Header = ()=>{
    return <Wrapper><h1><a href="#">ALESSIA SANNA</a></h1> </Wrapper>
}

export default Header