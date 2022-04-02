import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //보통은 자동으로 타입지정 해줌
  let [user, setUser] = useState([]);

  let box :JSX.IntrinsicElements['div']= <div>안녕 세상</div>;

  return (
    <div className="App">
      <h1>Hello World!</h1>
      { box }
      <Profile name ="Kim" age={25}></Profile>
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
