
function Profile(){
    return(
        <div className="card">
            <div className="card-header">
                <img
                 src="https://images.pexels.com/photos/997512/pexels-photo-997512.jpeg" 
                 alt="" 
                 width={"100%"}
                 height={200}
                />
            </div>
            <div className="card-body">
                <h3 className="text-primary">
                    <i className="bi bi-person-add"></i>S. M. Asif
                </h3>
                <p>Hello This is My profile from Oxford Software Institute.</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-primary">Profile Details</button>
            </div>

        </div>
    )
}

export default Profile