import { useState } from "react"
import { getUserDetails } from "./service";

function Search() {

    let [username, setUserName] = useState("");

    let getUser = () => {
        getUserDetails(username)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);

        })
    }

    return (
        <div className="container">
            <div className="row my-2">
                <h2 className="text-primary">Github Search Application</h2>
            </div>

            <div className="row my-2">
                <div className="col-8">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Enter UserName"
                        onChange={(e)=>{setUserName(e.target.value)}} 
                    />
                </div>
                <div className="col-4">
                    <button className="btn btn-outline-primary px-5" onClick={getUser}>
                        Search <i className="bi bi-search"></i>
                    </button>
                </div>
            </div>

        </div>
    )

}

export default Search