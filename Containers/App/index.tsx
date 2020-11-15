
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components';
import {HomePage} from '../HomePage';
import  Header  from '../../Components/Header';
import  Footer  from '../../Components/Footer';


const Wrapper = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
`;

class App extends React.Component {
    constructor(props) {
      super(props);
    }
  
    

    render() {
      return (
        <Wrapper>
          <Header />
          <HomePage/>
          <Footer />
        </Wrapper>
      );
    }
  }

export default App