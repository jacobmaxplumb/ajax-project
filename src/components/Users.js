import { useEffect, useState } from "react";
import { addUser, deleteUser, getAllUsers, updateUser } from "../services/users";

const Users = (props) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({ firstName: '', lastName: '', email: '' });

    useEffect(() => {
        getAllUsers().then(res => {
            console.log(res);
            setUsers(res.data);
        })
    }, [])

    const handleUpdate = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const selectUser = (u) => {
        setUser(u);
    }

    const update = () => {
        updateUser(user).then(() => {
            getAllUsers().then(res => {
                setUsers(res.data);
                setUser({ firstName: '', lastName: '', email: '' })
            })
        })
    }

    const add = () => {
        addUser(user).then(res => {
            if (res.status === 201) {
                getAllUsers().then(resp => {
                    setUsers(resp.data);
                    setUser({ firstName: '', lastName: '', email: '' })
                })
            }
        })
    }

    const deleteU = (u) => {
        deleteUser(u.id).then(() => {
            getAllUsers().then(resp => {
                setUsers(resp.data);
            })
        })
    }

    return (
        <div>
            <h2>Users</h2>
            <div>
                <input name="firstName" value={user.firstName} onChange={handleUpdate} />
                <input name="lastName" value={user.lastName} onChange={handleUpdate} />
                <input name="email" value={user.email} onChange={handleUpdate} />
                <button onClick={add}>Add</button>
                <button onClick={update}>Update</button>
            </div>
            {users.map((user, index) => (
                <div key={index}>
                    <div onClick={() => selectUser(user)}>{user.id} - {user.firstName} {user.lastName}</div>
                    <button onClick={() => deleteU(user)}>delete</button>
                </div>
            ))}
        </div>
    )
}

export default Users;