import ListNavigation from "../components/List/ListNavigation";
import ProductRendering from "../components/List/ProductRendering";
import { useLoaderData } from "react-router";
import Chat from "../components/List/Chat"; 


export default function List() {
  const products = useLoaderData();

  return (
    <>
<<<<<<< HEAD
=======
      <section className="list">
        <ListNavigation />
      
        <ProductRendering data={products} />
      </section>
        <Chat />
>>>>>>> f434a119a4a6f1ca3e28ae4103fd1f1711080fc3

    </>
  );
}
