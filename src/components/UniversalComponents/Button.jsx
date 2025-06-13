export default function Button ({text, path}) {
return (
 
<Link to={`/{path}`}> {text} </Link>
)
 
}