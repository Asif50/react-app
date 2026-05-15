
const cStyle = {
    width:"200px",
    boxShadow:"0 0 10px blue",
    textAlign:"center",
    padding:"30px",
    margin:"10px auto"
}

function C({data}){
    return(
        <div style={cStyle}>
            <h2>C component</h2>
            <h5>Data : {data}</h5>
        </div>
    )
}

export default C