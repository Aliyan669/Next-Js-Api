'use client'  ///   Jab koi event call karta hai isko add karta hai sabsa top pa    ///
import { useEffect, useState } from "react"

export default function page({ params }) {
    let id = params.userid;
    console.log(id)
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [city, setCity] = useState();

    useEffect(() => {
        getUserDetails()
    }, [])

    const getUserDetails = async () => {
        let data = await fetch(`http://localhost:3000/api/users/${id}`);
        data = await data.json();
        setName(data.result.name)
        setAge(data.result.age)
        setCity(data.result.city)
    }
    const updateUser = async () => {
        let result = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: "PUT",
            body: JSON.stringify({ name, age, city })
        });
        result = await result.json();
        console.log(result)
        if (result.success) {
            alert("User Successfully Updated")
        } else {
            alert("Please try with valid input")
        }
    }

    return (
        <div>
            <h1>
                Update User Details
            </h1>
            <input type="text" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} className="input-field" />
            <input type="text" value={age} placeholder="Enter Age" onChange={(e) => setAge(e.target.value)} className="input-field" />
            <input type="text" value={city} placeholder="Enter City" onChange={(e) => setCity(e.target.value)} className="input-field" />
            <button onClick={updateUser} className="btn">Update User</button>
        </div>
    )
}
