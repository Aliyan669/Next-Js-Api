'use client'  ///   Jab koi event call karta hai isko add karta hai sabsa top pa    ///
import { useState } from "react"

export default function page() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [city, setCity] = useState();

  const addUser = async () => {
    let response = await fetch("http://localhost:3000/api/users", {
      method: "Post",
      body: JSON.stringify({ name, age, city })
    });
    response = await response.json();
    console.log(response)
    if (response.success) {
      alert("new user added")
    }
    else {
      alert("some error with data please cehck it ")
    }
  }
  return (
    <div className="add-user">
      <h1>Add New User</h1>
      <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} className="input-field" />
      <input type="text" placeholder="Enter Age" onChange={(e) => setAge(e.target.value)} className="input-field" />
      <input type="text" placeholder="Enter City" onChange={(e) => setCity(e.target.value)} className="input-field" />
      <button onClick={addUser} className="btn">Add User</button>
    </div>
  )
}
