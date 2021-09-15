import * as React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    z-index : 10;
    display: flex;
    align-items : flex-start;
    
    h1 {
        margin : 0.1rem;
        transition : all 0.5s;
    }
    h1:hover{
            color : rgb(0,0,0,0.1);
            transition : all 0.5s;
        }
    
    h4 {
        margin-top : 0rem;
        font-weight : normal;
    }
    
    .navigation{
        margin : 1em;
        
        a {
            margin-left : 3rem;
            padding : 0.5em;
            transition : all 0.5s;
        }
        a::before {
            content: "●";
            padding-right : 1.5em;
        }
        
        a:hover{
            color : rgb(0,0,0,0.1);
            transition : all 0.5s;
        }
    }
    
    
@media (orientation: portrait) {
    max-width : 80%;
    display: grid;
    
    
    .navigation{
        margin : 0em;
        a {
            margin-left : 0rem;
        }
    }
}
`;

const Header = ()=>{
    return <Wrapper>
        <div className="title">
            <h1><a href="#">ALESSIA SANNA</a></h1>
            <h4>Artiste Chercheuse</h4>
        </div>
        <div className={"navigation"}>
            <a href="#/bio">Bio</a>
            <a href="#/cv">CV</a>
        </div>
    </Wrapper>
}

export default Header