import { useEffect } from "react";
import { CssBaseline } from "@mui/material";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router";

import MainAppBar from "./Components/AppBar";
import { AppDispatch } from "./store";
import { fetchProducts } from "./features/products/productsSlice";

function App() {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <>
            <CssBaseline />
            <MainAppBar />
            <Outlet />
        </>
    );
}

export default App;
