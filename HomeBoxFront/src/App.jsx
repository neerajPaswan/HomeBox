import {lazy,Suspense} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Components/registrationa-sign-page/Registration";
import SignIn from "./Components/registrationa-sign-page/SignIn";
import Header from "./Components/header-footer/Header";
import ProtectedRoute from "./Components/home-componet/ProtectedRoute";
import Loading from "./Components/loading-compoent/Loading";

const Home = lazy(()=>import("./Components/home-componet/Home")) 
const Error = lazy(()=>import("./Components/Error/Error")) 
const ServerError = lazy(()=>import("./Components/Error/ServerError")) 
const ProductSet = lazy(()=>import("./Components/product-pages/ProductSet")) 
const Cart = lazy(()=>import("./Components/cart-component/Cart")) 

function App() {
  return (
    <Router>
        <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route
          element={
            <ProtectedRoute>
              <Header />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="home/products" element={<ProductSet />} />
          <Route path="/cart" element={<Cart/>}/>
        </Route>
        <Route path="server-error " element={<ServerError />} />
        <Route path="*" element={<Error />} />
      </Routes>
        </Suspense>
    </Router>
  );
}

export const baseUrl = "http://localhost:8000";
// export const baseUrl = "https://homebox-ozqs.onrender.com";

export default App;
