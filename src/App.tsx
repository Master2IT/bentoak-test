import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Products from "./pages/products";
import Charts from "./pages/charts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      {/* <Route component={NotFound} /> */}
    </Routes>
  );
}

export default App;
