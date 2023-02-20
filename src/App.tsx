import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import Dashboard from "./pages/dashboard/DashBoard";
import { UserContextProvider } from "./context/UserCoxtext";
import Nav from "./components/Nav";
// import { User } from "./context/user";

const App: React.FC = () => {
    return (
        <UserContextProvider>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </UserContextProvider>
    );
};

export default App;
