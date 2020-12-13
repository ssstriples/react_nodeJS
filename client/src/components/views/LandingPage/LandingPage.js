import React, { useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function LandingPage(props) {

  useEffect(() => {
    axios.get('/api/hello') // 서버에 get request를 전달하여
    .then(response => console.log(response.data)) // response를 수신
  }, [])

  const onClickHandler = () => {
    axios.get('api/users/logout')
    .then(response => {
      //console.log(response.data)
      if(response.data.success) {
        props.history.push("/login")
      } else {
        alert('로그아웃 하는데 실패 했습니다.')
      }
    })
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      witdh: '10  0%', height: '100vh'
    }}>
      <h2>시작 페이지</h2>

      <button onClick={onClickHandler}>
        Logout
      </button>
    </div>
  );
}

export default withRouter(LandingPage);