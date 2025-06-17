import { Link } from "react-router";


export default function Button({text, path, productId, classname}) {

    return (
    
    <Link to={`/{path}/{productId}`} className={`button button__${classname}`}> {text} </Link>
    )
 
}