import { createBrowserRouter } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";

import { Layout } from "./components/Layout";
import { ProductDetail } from "./pages/Detail";

const router = createBrowserRouter([
    {
      element: <Layout/>,
      children:[
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/cart',
          element: <Cart />
        },
        {
          path: '/product/:id',
          element: <ProductDetail />
        },
      ]
    }
])


export {router}
 