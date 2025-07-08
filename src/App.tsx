import CartSidebar from "./components/CartSidebar";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
//import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <AppRoutes />
      </div>
      <CartSidebar />
    </div>
  );
}

export default App;
