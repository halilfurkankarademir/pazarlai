import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import RegisterPage from "./pages/RegisterPage";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import PricingPage from "./pages/PricingPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import ExamplesPage from "./pages/ExamplesPage";
import HelpPage from "./pages/HelpPage";
import UploadPage from "./pages/UploadPage";
import { AuthProvider, AuthContext } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const MainRoute = () => {
    const { isLoggedIn, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return isLoggedIn ? <Navigate to="/products" replace /> : <Homepage />;
};

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route element={<ProtectedRoute />}>
                        <Route path="/upload" element={<UploadPage />} />
                        <Route path="/products" element={<ProductsPage />} />
                        <Route
                            path="/product-detail"
                            element={<ProductDetailsPage />}
                        />
                    </Route>
                    <Route path="/" element={<MainRoute />} />
                    <Route path="/home" element={<Homepage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/how-it-works" element={<HowItWorksPage />} />
                    <Route path="/examples" element={<ExamplesPage />} />
                    <Route path="/help" element={<HelpPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;
