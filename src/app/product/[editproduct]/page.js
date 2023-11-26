'use client'  ///   Jab koi event call karta hai isko add karta hai sabsa top pa    ///
import { useEffect, useState } from 'react'
// Ye Product Update Karna ka Method Hai

export default function page(props) {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [company, setCompany] = useState("")
    const [category, setCategory] = useState("")
    const [color, setColor] = useState("")


    useEffect(() => {
        getProductDetail()

    }, []);

    const getProductDetail = async () => {
        let productId = props.params.editproduct
        let productData = await fetch("http://localhost:3000/api/products/" + productId);
        productData = await productData.json();
        if (productData.success) {
            let result = productData.result;
            setName(result.name)
            setPrice(result.price)
            setCompany(result.company)

            setCategory(result.category)
            setColor(result.color)


        }

    }

    const updateProduct = async () => {
        let productId = props.params.editproduct
        let data = await fetch("http://localhost:3000/api/products/" + productId, {
            method: "PUT",
            body: JSON.stringify({ name, price, company, category, color })
        });
        data = await data.json();
        if (data.result) {
            alert("Product has been updated")
        }
    }

    return (
        <div>
            <h1>Product Update Page</h1>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Product Name' /><br /><br />
            <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter Product Price' /><br /><br />
            <input type='text' value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Enter Product Company' /><br /><br />
            <input type='text' value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Enter Product Category' /><br /><br />
            <input type='text' value={color} onChange={(e) => setColor(e.target.value)} placeholder='Enter Product Color' /><br /><br />
            <button onClick={updateProduct} >Update Product</button>
        </div>
    )
}
