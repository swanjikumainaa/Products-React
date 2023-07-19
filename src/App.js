import Login from './Login';
import NavigationBar from './NavigationBar';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Products from './Products'
import ProductDetailsPage from './ProductDisplay';
import AddProductForm from './AddProduct';
import ProductDisplayPage from './ProductDisplay';
function App() {
  return (
    <div >
      <NavigationBar/>
<BrowserRouter>
<Routes>
  { <Route path='/Login' element ={<Login/>}></Route> }
  { <Route path='ProductDisplay' element={<ProductDisplayPage/>}/> }
  { <Route path='/product/:productId' element ={<ProductDisplayPage/>}/> }
  {<Route path='/products' element ={<Products/>}/> }
  { <Route path ='/AddProduct' element={<AddProductForm/>}/> }
</Routes>
</BrowserRouter>
    </div>
  );
}
export default App;






