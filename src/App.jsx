// import { useState } from 'react'
import { Suspense } from 'react';
import './App.css'
import Batsman from './Batsman'
import Conunter from './counter'
// import Users from './users'
import Friends from './friends';
import Posts from './posts';
import Player from './players';
import Bowlers from './bowlers';

// const fetchPost = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   return res.json();
// }

// const fetctUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then((res) => res.json());


// const fetchFriends = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   return res.json();

// }

function App() {
  // const postsPromise = fetchPost();
  // onclose.log(postsPromise)
  // const frendsPromise = fetchFriends();

  function handleClick() {
    alert('i am clicked')
  }
  const handaler4 = () => {
    alert('yes i am arrow click')
  }

  const handaler5 = (num) => {
    const newNum = num
    alert(newNum)
  }

  return (
    <>
      {/* <Suspense fallback={<h2>post loding...</h2>}>
        
      <Posts postsPromise={postsPromise} ></Posts>
      </Suspense> */}

      {/* <Suspense fallback={<h3> Loding..</h3>}>
        <Users fetctUsers={fetctUsers}></Users>
      </Suspense> */}
{/* 
      <Suspense fallback={<h2>Friends Loding...</h2>}>
        <Friends frendsPromise={frendsPromise} ></Friends>
      </Suspense> */}
      <Bowlers></Bowlers>
       <Player></Player>
      <Conunter></Conunter>
      <Batsman></Batsman>
      <h3> Vite - React</h3>
      <button onClick={handleClick}>click me</button>
      <button onClick={function () { alert("Hello I am Shakib") }}>click me</button>
      <button onClick={function () { alert("Hello I am Shakib") }}>click me</button>
      <button onClick={handaler4}>click me 4</button>
      <button onClick={() => handaler5(10)}>click me 5</button>




    </>
  )
}

export default App
