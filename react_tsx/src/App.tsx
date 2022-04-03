import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

function App() {

  //보통은 자동으로 타입지정 해줌
  let [user, setUser] = useState([]);

  const state = useSelector((state: {count: number}) => state)

  const dispatch :Dispatch = useDispatch();

  let box :JSX.IntrinsicElements['div']= <div>안녕 세상</div>;
  console.log(state)

  return (
    <div className="App">
      <h1>Hello World!</h1>
      { box }
      <Profile name ="Kim" age={25}></Profile>
      {state.count}
      <button onClick={()=>{dispatch({ type: '증가' })}}>버튼</button>
    </div>
  );
}

//컴포넌트 타입지정 - 파라미터(props), return값
function Profile(props :{name :string, age? :number}) :JSX.Element {
  return (
    <div>
      { props.name } 프로필 입니다.
      <br/>
      { props.age } 살 입니다.
    </div>
  )
}

export default App;
