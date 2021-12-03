import { Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import App from "../App";
import Login from "../Pages/Login";
import Products from "../Pages/Products";

export default function Router() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<App />}>
                <Route index element={<Typography>Home</Typography>} />
                <Route path="products" element={<Products />} />
                <Route path="profile" element={<h1>Profile</h1>} />
                <Route path="cart" element={<h1>Cart</h1>} />
            </Route>
        </Routes>
    );
}
