import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
import Collection from './pages/Collection.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import Orders from './pages/Orders.jsx'

const router = createBrowserRouter([
  {
    path: "/testing/",
    element: <App />,
    children: [
      {
        path: "/testing/",
        element: <Home />,
      },
      {
        path: "/testing/collection",
        element: <Collection />,
      },
      {
        path: "/testing/about",
        element: <About />,
      },
      {
        path: "/testing/product/:productId",
        element: <Product />,
      },
      {
        path: "/testing/cart",
        element: <Cart />,
      },
      {
        path: "/testing/login",
        element: <Login />,
      },
      {
        path: "/testing/place-order",
        element: <PlaceOrder />,
      },
      {
        path: "/testing/orders",
        element: <Orders />,
      },
      {
        path: "/testing/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  <ShopContextProvider>
   <RouterProvider router={router} />
   </ShopContextProvider>
  // </BrowserRouter>
);