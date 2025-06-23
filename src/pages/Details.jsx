import { useParams } from "react-router"
import Specifications from "../components/Specifications";

export default function Detail(){

    const {id}= useParams();

    return  (
        <>

        <Specifications/>
        </>
    )
}

