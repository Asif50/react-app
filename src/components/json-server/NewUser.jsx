import axios from "axios";
import { useState } from "react"

function NewUser({ getUsers, isNewUser, setNewUser, newUser, setIsNewUser}) {

    const updateUser = () => {
        axios.put(`http://localhost:3000/result/${newUser.id}`,newUser)
        .then((res)=>{
            alert("user Updated");
            getUsers();
            setNewUser({
                name : "",
                city : ""
            });
            setIsNewUser(true); 
        })
        .catch((err)=>{
            alert("Somthing went wrong while updating");
        })
    }

    let getNewUserData = () => {
        axios.post("http://localhost:3000/result", newUser).then((res) => {
            console.log("Success");
            alert("User Created Successfully");
            getUsers();
            setNewUser(
                {
                    name: "",
                    city: "",
                }
            );

        }).catch((err) => {
            alert("NewUser is Not Created");
            console.log(err)
        })
    }

    return (
        <div style={{ padding: "50px" }}>

            <h2>
                {
                    isNewUser ? "NewUser" : "Update User"
                }
            </h2>
            <input
                value={newUser.name}
                onChange={(event) => { setNewUser({ ...newUser, name: event.target.value }) }}
                type="text" placeholder="username" style={{ marginBottom: "10px 0px" }} />
            <br /><br />
            <select
                value={newUser.city}
                onChange={(event) => { setNewUser({ ...newUser, city: event.target.value }) }}>
                <option>Noida</option>
                <option>GZB</option>
                <option>Faridabad</option>
                <option>Haryana</option>
                <option>Delhi</option>
            </select>
            <br /><br />
            <button onClick={isNewUser ? getNewUserData : updateUser}>
                {
                    isNewUser ? "NewUser" : "Update User"
                }
            </button>
        </div>
    )
}

export default NewUser