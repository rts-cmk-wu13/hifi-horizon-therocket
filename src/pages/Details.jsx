import { useParams } from "react-router"

export default function Detail(){

    const {id}= useParams();
    console.log(id)

 

    return  (
        <>
        <h1 className="headline">PRODUCT</h1>
        </>
    )
}

