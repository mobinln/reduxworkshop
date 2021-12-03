import { Container } from "@mui/material";
import { Outlet } from "react-router";

import MainAppBar from "./Components/AppBar";

function App() {
    return (
        <Container>
            <MainAppBar />
            <Outlet />
        </Container>
    );
}

export default App;
