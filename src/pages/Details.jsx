import { useParams } from "react-router"
import ProductDetails from "../components/Details/Product-details";



export default function Detail(){

    const {id}= useParams();
    console.log(id)

 

    return  (
        <>
<<<<<<< HEAD
        <h2>DETAILS</h2>
           <ProductDetails />
=======
        <h1 className="headline">PRODUCT</h1>
>>>>>>> f434a119a4a6f1ca3e28ae4103fd1f1711080fc3
        </>
    )
}

