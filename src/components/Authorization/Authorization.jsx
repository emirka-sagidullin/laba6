import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const Autorization = ({users, setUser, isAuthorized, setIsAuthorized}) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const autorization = (event) => {
    event.preventDefault()
    users.map((user) => {
      if (user.login === login){
        if (user.password === password){
          setIsAuthorized(true)
          setUser({ login: user.login, name: user.name, password: user.password });
          navigate('/catalog')
          localStorage.setItem('login', user.login)
          localStorage.setItem('password', user.password)
        }
      }
    })
  }
  return (
    <div>
      <h2>Авторизация</h2>
      <form onSubmit={autorization}>
        <input type="text" placeholder='login' onChange={(e) => {setLogin(e.target.value)}} />
        <input type="text" placeholder='password' onChange={(e) => {setPassword(e.target.value)}} />
        <button type='submit'>Вход</button>
      </form>
    </div>
  )
}

export default Autorization
