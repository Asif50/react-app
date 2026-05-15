let actionCreator = (cityValue) => {
    return{
        type : "CITY",
        cityName : cityValue
    }
}

export default actionCreator