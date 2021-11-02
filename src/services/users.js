import axios from "axios"

// getting all the users
export const getAllUsers = () => {
    return axios.get('http://localhost:8080/users');
}

export const addUser = (user) => {
    return axios.post('http://localhost:8080/users', user);
}

export const updateUser = (user) => {
    return axios.put(`http://localhost:8080/users/${user.id}`, user);
}

export const deleteUser = (userId) => {
    return axios.delete(`http://localhost:8080/users/${userId}`);
}