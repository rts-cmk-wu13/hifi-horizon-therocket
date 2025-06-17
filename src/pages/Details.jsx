import { useParams } from "react-router"

export default function Detail(){

    const {id}= useParams();
    console.log(id)

 

    return  (
        <>
        <h2>DETAILS</h2>
        </>
    )
}

