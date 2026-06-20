import Details from "./Details"
import Profile from "./Profile"
import Search from "./Search"

function Home(){
    return(
        <div className="container">

            <div className="row">
                <Search/>
            </div>
            <div className="row">
                <div className="col-4">
                    <Profile/>
                </div>
                <div className="col-8">
                    <Details/>
                </div>
            </div>

        </div>
    )
}

export default Home