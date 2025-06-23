import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import User from "./pages/User";
import List from "./pages/List";    
import Details from "./pages/Details";
import Contact from "./pages/Contact"; 
import NotFound from "./pages/NotFound";
import Loading from "./components/loading";
import AboutUs from "./pages/aBOUTuS.JSX";
import { ErrorBoundary } from "./components/Error";
import MoreInfo from "./pages/MoreInfo";
import { getProducts, getProduct } from "./api/typicode";
// import { handleSubmit } from "./api/actions";
// import RequireAuth from "./components/RequireAuth";



const router = createBrowserRouter([
{
    path: "/",
    element: <Layout />,
    hydrateFallbackElement: < Loading/>,
    errorElement: < ErrorBoundary />,
    children: [{
        index: true,
        element: <Home />,
        loader: getProducts,
    },
    {
        path: "list",
        element: (
                <List /> 
        )
        ,
        loader: getProducts,
    },

      {   
        path: "user",
        element: <User />,
        // loader: getProduct
    },  

    {   
        path: "details/:id",
        element: <Details />,
        // loader: getProduct
    },  
    {
        path: "contact",
        element: <Contact />,
        // action: handleSubmit,
    },
    {
        path: "about",
        element: <AboutUs />,
        // action: handleSubmit,
    },
    {
        path: "moreinfo",
        element: <MoreInfo />,
        // action: handleSubmit,
    },
    {   
        path: "*",
        element: < NotFound />
    }
    ]
}

]);

export default router