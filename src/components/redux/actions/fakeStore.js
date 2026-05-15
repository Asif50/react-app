
export const fakeStoreCreator = () => {

    let [state, setstate] = useState([]);

    const getProducts = (image, title, price) => {
        var promiseObject = axios.get("https://fakestoreapi.com/products");
 
        promiseObject.then((res) => {
            console.log("Successful : Data Fetched");
            console.log(res.data);
            setstate(res.data);
        }).catch((error) => {
            console.log("ERROR : Data not Found");
            console.log(error);
        });
    };

    

    return{
        type : "PRODUCTS",
        title : state.name,
        price : state.price,
        discription : state.discription
    }

}