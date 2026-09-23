import React from 'react'

const App = () => {

 const user = {
    username: 'Danish khan',
    age: 20,
    email: '@gmail.com'
 }
 localStorage.setItem('user',JSON.stringify(user));
 const userdata = JSON.parse(localStorage.getItem('user'));
 console.log(userdata);

  return (
    <div>
      app
    </div>
  )
}

export default App