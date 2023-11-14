'use client'  ///   Jab koi event call karta hai isko add karta hai sabsa top pa    ///
import React from 'react'

export default function DeleteUser(props) {
    const userId = props.id;
    console.log(userId)
    const deleteuser = async () => {
        let result = await fetch("http://localhost:3000/api/users/" + userId, {
            method: "delete"
        });
        result = await result.json();
        if (result.success) {
            alert("User Successfullly Deleted")
        }
    }

    return (
        <button onClick={deleteuser}>Delete</button>
    )
}
