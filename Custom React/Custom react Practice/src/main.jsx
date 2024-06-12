import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const fourthElement = "Abhay" 

const thirdElement = React.createElement(
  'h1',
   {
    className: "header;",
   },
   'This is h1 ',
   fourthElement
)
ReactDOM.createRoot(document.getElementById('root')).render(
    thirdElement
  )
