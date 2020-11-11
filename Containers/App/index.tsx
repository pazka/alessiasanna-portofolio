
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {HomePage} from '../HomePage';
import  Header  from '../../Components/Header';
import  Footer  from '../../Components/Footer';

class App extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <Header />
          <HomePage/>
          <Footer />
        </div>
      );
    }
  }

export default App