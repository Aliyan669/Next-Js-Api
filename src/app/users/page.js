import DeleteUser from "@/utility/deleteUser";
import Link from "next/link";

async function getUsers() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
}

export default async function page() {
  const users = await getUsers();
  console.log(users)

  return (
    <div>
      <h1>User List</h1>
      {
        users.map((e) => (
          <div>
            <Link href={`users/${e.id}`} >{e.name}</Link>
            <span style={{ marginLeft: "50px" }}><Link href={`users/${e.id}/update`}>Edit</Link></span>
            <sapn>   <DeleteUser id={e.id} /></sapn>
          </div>
        ))
      }
    </div>
  )
}
