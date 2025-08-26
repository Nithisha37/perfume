import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Product from './components/Products';
import Search from './components/Search';

function App()
{
  return(
    <>
    <Navbar></Navbar>
    <Search></Search>
    <Product></Product>
    <About></About>
    <Footer></Footer>
    </>
  )
}
export default App