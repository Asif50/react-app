import { useState } from "react"
import NewUser from "./NewUser"
import Users from "./Users"
import axios from "axios";

function UserHome(){

    const[users, setUsers] = useState([]);

    let [isNewUser, setIsNewUser] = useState(true);

     let [newUser, setNewUser] = useState(
        {
            name: "",
            city: ""
        }
    )

    const getUsers = () => {
        axios.get("http://localhost:3000/result")
            .then((res) => {
                console.log(res.data);
                setUsers(res.data);
            }).catch((err) => {
                alert("Something went wrong");
                console.log(err)
            })
    }


    return(
        <div>
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <NewUser getUsers = {getUsers} isNewUser={isNewUser} setNewUser={setNewUser} newUser={newUser} setIsNewUser={setIsNewUser}/> 
                <Users setNewUser={setNewUser} setIsNewUser={setIsNewUser} getUsers = {getUsers} users ={users}/>
            </div>
        </div>
    )
}

export default UserHome