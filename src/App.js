import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";


const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentUserName, setCurrentUserName] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
    console.log('value is:', event.target.value);
  };

  const handleClick = event => {

    setCurrentUserName(message);
    console.log(
      `{'message': ${message}}`
    );
    console.log('The link was clickedd.');
  };

  // const dataToUpdate = {
  //   message: { message },
  // };
  // const jsonString = JSON.stringify(dataToUpdate);

  // const url = 'username'; // Replace this with the real API endpoint

  // const options = {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: jsonString
  // };

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
       fetch('/username', 'POST' ).then(res => res.json()).then(data => {
      setCurrentUserName(data.username);
    });


    // fetch(url, options)
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error(`HTTP error ${response.status}`);
    //     }
    //     return response.json();
    //   })
    //   .then(updatedData => {
    //     console.log('Data updated:', updatedData);
    //   })
    //   .catch(error => {
    //     console.error('Error updating data:', error);
    //   });
  }, []);



  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>The current time is {currentTime}.</p>
          <p>The current name is {currentUserName}.</p>
          <input
            type="text"
            id="message"
            name="message"
            onChange={handleChange}
            value={message}
          />

          <div>
            Edit user name
            <button onClick={handleClick}>Done</button>
          </div>
        </header>
      </div>
    </>
  )
}

function App() {

  return (
    <>
      <Routes>
        <Route index
          element={<Dashboard />}
        />
      </Routes>
    </>
  );
}

export default App;
