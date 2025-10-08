import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating messages={['Terrible', 'Bad', 'OK', 'Good', 'Awesome']} />
    <StarRating size={24} color="red" maxRating={10} defaultRating={3} /> */}
  </React.StrictMode>
);
