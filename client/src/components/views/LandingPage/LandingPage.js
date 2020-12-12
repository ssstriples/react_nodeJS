import React, { useEffect } from 'react';
import axios from 'axios';

function LandingPage() {

  useEffect(() => {
    axios.get('/api/hello') // 서버에 get request를 전달하여
    .then(response => console.log(response.data)) // response를 수신
  }, [])

  return (
    <div>
      LandingPage
    </div>
  );
}

export default LandingPage;