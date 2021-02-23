
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components';
import {HomePage} from '../HomePage';
import  Header  from '../../Components/Header';
import  Footer  from '../../Components/Footer';
import './style.scss'
import MouseTooltip from 'react-sticky-mouse-tooltip';

const Wrapper = styled.div`
}
`;

class App extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = { mouseX: 0, mouseY: 0 };
    }

    _onMouseMove(e) {
        this.setState({ mouseX: e.clientX, mouseY: e.clientY });
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