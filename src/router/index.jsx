import Home from '../pages/Home'
import Search from '../pages/Search'
import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from '../pages/layout/Layout';
import Create from '../pages/Create';
import BookDetail from '../pages/BookDetail';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "", 
          element: <Home/>,
        },
        {
          path: "/create", 
          element: <Create/>,
        },
        {
          path: "/search",
          element: <Search/>,
        },
        {
          path:"/books/:id",
          element:<BookDetail/>
        }
      ]
    },
   
  ]);

  export default router;  