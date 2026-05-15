
import {useSelector} from 'react-redux'

function Details(){

  let data = useSelector((storedata)=>{
        return storedata;  
    })

    return(
        <div style={{paddingLeft: "100px"}}>
            <h2>Details Component</h2>
            <p style={{color:"green", fontWeight:"bold"}}>Name : {data.name}</p>
            <br />
             <p style={{color:"red", fontWeight:"bold"}}>Email : {data.email}</p>
             <br />
             <p style={{color:"blue", fontWeight:"bold"}}>City : {data.city}</p>
            


        </div>
    )
}

export default Details