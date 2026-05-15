const initialData = {
    name : "",
    email : "",
    city : ""
}


const myReducer = (state = initialData, action) => {
    
    if(action.type === "NAME"){
        state = {
            ...state,
            name : action.nameComp,
            email : action.emailCom
        }
    }else if (action.type === "CITY"){
        state = {
            ...state,
            city: action.cityName
        }
    }

    // alert("Reducer Triggered");
    return state;
}

export default myReducer;