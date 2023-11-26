'use client'  ///   Jab koi event call karta hai isko add karta hai sabsa top pa    ///
import { useRouter } from "next/navigation"

export default function DeleteProduct(props) {
    const router = useRouter();

    const deleteProduct = async () => {
        let response = await fetch("http://localhost:3000/api/products/" + props.id, {
            method: "delete"
        });
        response = await response.json();
        if (response.success) {
            alert("Product Deleted")
            router.push("/product")
        }
    }
    return (
        <button onClick={deleteProduct}>Delete</button>
    )
}
