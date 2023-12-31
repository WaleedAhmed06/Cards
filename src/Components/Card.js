import React from 'react'

function Card({ id, userName, age, institute, isActive}) {
  return (
    <div className='card'>
      <div>ID: {id}</div>
      <div>UserName: {userName}</div>
      <div>Age: {age}</div>
      <div>Institute: {institute}</div>
      <div>Active: {isActive}</div>
    </div>
  )
}
export default Card