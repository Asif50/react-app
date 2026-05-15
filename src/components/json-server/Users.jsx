import { useEffect, useState } from "react"
import axios, { Axios } from "axios";

function Users({getUsers, users, setIsNewUser, setNewUser}) {

    useEffect(() => {
        getUsers();
    }, []);

    const deleteUser = (id)=>{
        axios.delete(`http://localhost:3000/result/${id}`)
        .then((res)=>{
            alert("User Deleted Successfully");
            getUsers();
        })
        .catch((err)=>{
            alert("Failed to delete User");
            console.log(err);
        })
    }

    let updateUser = (user) => {
        setIsNewUser(false);
        setNewUser(user)
    }

    return (
        <div>
            <h2 style={{textAlign:"center", marginTop:"30px"}}>User Information</h2>
            {
                users.length > 0 &&
                <div style={{ marginTop: "30px auto", width:"500px" }}>
                    <table frame="box" rules="all" cellPadding={"10px"} width={"100%"}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>City</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody align="center">
                            {
                                users.map((element)=>{
                                    return (
                                    <tr key={element.id}>
                                        <td>{element.name}</td>
                                        <td>{element.city}</td>
                                        <td>
                                            <button onClick={()=>{
                                                updateUser(element);
                                            }}>Edit</button>
                                        </td>
                                        <td>
                                            <button onClick={()=>{deleteUser(element.id)}}>Delete</button>
                                        </td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default Users