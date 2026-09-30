import {createBrowserRouter,Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/RootLayout';
import Error from './pages/Error';
import ProductDetails from './pages/ProductDetails';
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//       <Route path='/' element={<Home />}/>
//       <Route path='/products' element={<Products />}/>
//   </Route>
// )

const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: '',element: <Home />},
      {index: true, element: <Products/>},
      {path: '/products/:productId', element: <ProductDetails />}

    ]
  },
])

// const router = createBrowserRouter(routeDefinitions)

function App() {
  return <RouterProvider router={router} />;
}

export default App;
