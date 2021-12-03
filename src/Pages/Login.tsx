import { useState } from "react";
import { Button, Card, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../store";
import { sendLoginAction } from "../features/session/sessionSlice";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const handleBack = () => {
        navigate(-1);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!username || !password) {
            return;
        }
        try {
            await dispatch(sendLoginAction({ username, password }));
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <Button onClick={handleBack}>Back</Button>
            <Box height="90vh" display="flex" justifyContent="center" alignItems="center">
                <Card style={{ width: 400 }}>
                    <form onSubmit={handleSubmit}>
                        <Box m={2} display="flex" flexDirection="column" gap={1}>
                            <Typography style={{ marginBottom: "1em" }} variant="h1" fontSize="24pt">
                                Login
                            </Typography>
                            <TextField label="Username" onChange={(e) => setUsername(e.target.value)} />
                            <TextField label="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                            <Button variant="contained" type="submit">
                                Login
                            </Button>
                        </Box>
                    </form>
                </Card>
            </Box>
        </Container>
    );
}
