
async function getUsers(id) {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    return data.result;
}

export default async function page({ params }) {
    // console.log(params)
    const user = await getUsers(params.userid);
    // console.log(user)

    return (
        <div>
            <h1>User List</h1>
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>
            <h3>City: {user.city}</h3>
        </div>
    )
}