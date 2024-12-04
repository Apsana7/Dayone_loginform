import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="Main">
        <div className="leftSide">
          <div className="svg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M9 19.99a.01.01 0 0 0-.01-.008a6.5 6.5 0 1 1 5.464-9.094C14.73 11.518 15.312 12 16 12a4 4 0 0 1 0 8H9.01a.01.01 0 0 1-.01-.01m10.46-8.265A4.001 4.001 0 1 0 14.012 7.7a8 8 0 0 1 1.816 2.584c.043.096.1.162.145.195l.033.02c1.31.001 2.512.46 3.456 1.225M16.01 10.5h-.003z" clip-rule="evenodd"/></svg></div>

          <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </div>

          <button className="readMoreBtn">Read More</button>
        </div>

        <div className="rightSide">
          <div className="signUp">Sign Up</div>
          <div className="data">
            <input type="text" name="User Name" id="Name" placeholder="User Name"  />
            <input type="password" name="password" id="Password" placeholder="Password"  />
          </div>
          <button className="signUpBtn">Submit</button>
        </div>
      </div>
    </>
  )
}

export default App
