'use client'  ///   Jab koi event call karta hai isko add karta hai sabsa top pa    ///
import { useState } from 'react'

export default function page() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [company, setCompany] = useState("")
    const [category, setCategory] = useState("")
    const [color, setColor] = useState("")

    const addProduct = async () => {
        console.log(name, price, company, color, category)
        let result = await fetch("http://localhost:3000/api/products", {
            method: "POST",
            body: JSON.stringify({ name, price, company, category, color })
        })
        result = await result.json();
        if (result.success) {
            alert("New Product Added SuccessFully")
        }
    }

    return (
        <div>
            <h1>Add Product Page</h1>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Product Name' /><br /><br />
            <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter Product Price' /><br /><br />
            <input type='text' value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Enter Product Company' /><br /><br />
            <input type='text' value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Enter Product Category' /><br /><br />
            <input type='text' value={color} onChange={(e) => setColor(e.target.value)} placeholder='Enter Product Color' /><br /><br />
            <button onClick={addProduct}>Add Product</button>
        </div>
    )
}
