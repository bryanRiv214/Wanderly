import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));

// can fetch username from token
const [token, setToken] = useState(false);

if(token) {
  sessionStorage.setItem('token', JSON.stringify(token))
}

useEffect(() => {
  if(sessionStorage.getItem('token')) {
    let data = JSON.parse(sessionStorage.getItem('token'))
    setToken(data)
  }
}, [])

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();