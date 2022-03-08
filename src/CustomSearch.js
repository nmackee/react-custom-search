import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'

export const CustomSearch = () => {
  const [userData, setUserData] = useState([])
  const [userSearchData, setUserSearchData] = useState([])
  const [name, setName] = useState("")
  const [profession, setProfession] = useState("")

  useEffect(() => {
    const data = [
      {name: "Manoj", age: "29", profession: "SE"},
      {name: "Virat", age: "32", profession: "Batsman"},
      {name: "Rohit", age: "28", profession: "Batsman"},
      {name: "Shami", age: "31", profession: "Bowler"},
      {name: "Bumrah", age: "30", profession: "Bouwler"}
    ]

    setUserData(data);
    setUserSearchData(data)
  }, [])

  const handleSearch = () => {
    const newData = userData
    .filter(x => x.name == (name == '' ? x.name : name))
    .filter(y => y.profession == (profession == '' ? y.profession : profession))
    setUserSearchData(newData)
  }
  return (
    <div>
      <Table>
        <tr>
          <td>
            <input className="form-control" type='text' placeholder="Enter name..." onChange={(e) => setName(e.target.value)}/>
          </td>
          <td>
            <select className='form-control' onChange={(e) => setProfession(e.target.value)}>
              <option value=''>-Select-</option>
              <option value='Batsman'>Batsman</option>
              <option value='SE'>SE</option>
              <option value='Bowler'>Bowler</option>
              
            </select>
          </td>
          <td>
            <button className="btn btn-primary" onClick={() => handleSearch()}>Search</button>
          </td>
        </tr>
      </Table>
      <Table responsive striped size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Profession</th>
          </tr>
        </thead>
        <tbody>
          {
            userSearchData && userSearchData.length > 0 ?
            userSearchData.map((item) => 
              <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.profession}</td>
              </tr>
              )
              : 'No data'
          }
        </tbody>
      </Table>
    </div>
  )
}