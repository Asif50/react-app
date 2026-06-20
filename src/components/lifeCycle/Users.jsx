
function Users(){

    const getUser = async ()=> {
        var res = await fetch("");
        
    }

    return(
        <div style={{padding:"50px"}}>

            <h2>Users Component</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique dicta illum soluta, dignissimos veritatis excepturi repudiandae libero. Consequuntur nemo pariatur mollitia ad voluptatum ut officiis veritatis totam. Libero, non amet.</p>
            <button onClick={getUser} >Get Users</button>

        </div>
    )
}

export default Users;