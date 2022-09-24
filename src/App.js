import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUser></ExternalUser>
      
    </div>
  );
}

// data load from user
function ExternalUser(){
  const [users, setUsers] = useState([]);
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);
  return (
    <div>
      <h2>External User</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props){
  return (
    <div style={{color: 'blue', backgroundColor: 'aqua', margin: '20px', border: '2px solid black', borderRadius: '10px'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}
///       count down part

function Counter(){
  const [count, setCount] = useState(10);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button> <span></span>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}
export default App;
