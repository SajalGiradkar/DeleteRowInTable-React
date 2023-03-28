import { useState } from 'react'
import './App.css'

const array = [
  {
    userName: "John Doe",
    email: "john@gmail.com",
    mobileNumber: 9756895789,
    address: "xyz address"
  },
  {
    userName: "Catherine Mark",
    email: "catherine@gmail.com",
    mobileNumber: 4645657669,
    address: "abc address"
  },
  {
    userName: "Max Drew",
    email: "max@gmail.com",
    mobileNumber: 6545678789,
    address: "lmn address"
  }
];
const day = ["sunday", "monday", "tuesday", "wednesday", "Thursday", "Friday", 'Saturday']
const color = ["gray", "green", "yellow", "orange", "blue", "red", 'aqua'];
const currentDate = new Date();
console.log(currentDate.toUTCString());

function App() {
  const [arrState, setArrState] = useState(array);
  const handleDelete = (i) => {
    setArrState(

      arrState.filter((item) => {
        return item.email !== i
      })
    )
  }
  return (
    <div className="App">
      <div className="head">
        <h1>User detail list</h1>
        <div className="date">
          <h2>Today is &nbsp;
            <span style={{
              color: color[currentDate.getDay()]
            }}>
              {day[currentDate.getDay()]}
            </span>
          </h2>
        </div>
      </div>
      <table id='table' cellSpacing={0}>
        <thead>
          <tr>
            <th>user name</th>
            <th>Email</th>
            <th>Mobile number</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            arrState.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.userName}</td>
                  <td>{item.email}</td>
                  <td>{item.mobileNumber}</td>
                  <td>{item.address}</td>
                  <td onClick={() => handleDelete(item.email)}><i className="fas fa-trash"></i></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div >
  )
}

export default App
