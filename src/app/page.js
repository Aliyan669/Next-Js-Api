import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Hello Next Js Api</h1>
      <Link href={"/product"}>Product</Link><br />
      <Link href={"/addProduct"}>Add Product</Link>
    </div>
  )
}
