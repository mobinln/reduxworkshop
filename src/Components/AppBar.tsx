import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const MainAppBar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography variant="h6" noWrap component="div">
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} display="flex" ml={2}>
                        <Button sx={{ my: 2, color: "white" }} component={Link} to="/">
                            Home
                        </Button>
                        <Button sx={{ my: 2, color: "white" }} component={Link} to="/products">
                            Products
                        </Button>
                        <div style={{ flexGrow: 1 }} />
                        <Button sx={{ my: 2, color: "white" }} component={Link} to="/cart">
                            cart
                        </Button>
                        <Button sx={{ my: 2, color: "white" }} component={Link} to="/login">
                            Login
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default MainAppBar;
