import { Routes, Route } from "react-router-dom";
import IndexLayout from "./app/layout/IndexLayout";
import { HomePage } from "./pages";
import CartPage2 from "./pages/CartPage2";

function App() {
  return (
    <>
      <IndexLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="cart" element={<CartPage2 />} />
        </Routes>
      </IndexLayout>
    </>
  );
}

export default App;
