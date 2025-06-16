export default function Button ({text, path, classname}) {
return (
 
<Link to={`/{path}`} classname={`button button__${classname}`}> {text} </Link>
)
 
}