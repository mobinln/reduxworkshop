import { Button, Card, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";

export default function Login() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Container>
            <Button onClick={handleBack}>Back</Button>
            <Box height="90vh" display="flex" justifyContent="center" alignItems="center">
                <Card style={{ width: 400 }}>
                    <Box m={2} display="flex" flexDirection="column" gap={1}>
                        <Typography style={{ marginBottom: "1em" }} variant="h1" fontSize="24pt">
                            Login
                        </Typography>
                        <TextField label="Email" />
                        <TextField label="Password" type="password" />
                        <Button variant="contained">Login</Button>
                    </Box>
                </Card>
            </Box>
        </Container>
    );
}
