// 1. import react and reactDOM libs.
import React from 'react';
import ReactDOM from 'react-dom/client';
// 2. get a reference to the dic with ID root
const el = document.getElementById('root');

// 3. Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4. Create a component 
function App() {
    let message = 'Bye There!';
    if (Math.random() > 0.5) {
        message = 'Hello There!'
    }
    return <h2>{message}</h2>;
}

// 5. Show the component of the screen

root.render(<App />)