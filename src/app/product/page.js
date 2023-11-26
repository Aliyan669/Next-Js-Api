import DeleteProduct from '@/lib/DeleteProduct';
import Link from 'next/link';
import React from 'react'

// Ye Product Get Karna ka Method Hai

const getProduct = async () => {
  let data = await fetch("http://localhost:3000/api/products", { cache: "no-cache" });
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return { success: false }
  }
}

export default async function page() {
  let products = await getProduct();
  console.log(products)

  return (
    <div>
      <h1>
        DataBase Product Page
      </h1>
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Company</td>
            <td>Category</td>
            <td>Color</td>

          </tr>
        </thead>
        <tbody>
          {
            products.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.price}</td>
                <td>{e.company}</td>
                <td>{e.category}</td>
                <td>{e.color}</td>
                <td><Link href={"product/" + e._id}>Edit</Link>
                  <DeleteProduct id={e._id} />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
