// index.tsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './Containers/App'


if(!process.env._DEBUG){
  console.debug = ()=>{}
}else{
  console.debug = console.info
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
)