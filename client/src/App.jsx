import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route element={<ProtectedRoute />}>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/upload" element={<Homepage />} />
                        <Route path="/products" element={<ProductsPage />} />
                        <Route
                            path="/product-detail"
                            element={<ProductDetailsPage />}
                        />
                    </Route>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;
