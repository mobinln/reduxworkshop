import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProductCard({
    description,
    price,
    title,
}: {
    title: string;
    description: string;
    price: string;
}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="140" image="https://picsum.photos/345/140" alt="green iguana" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add</Button>
                <Button size="small">Details</Button>
            </CardActions>
        </Card>
    );
}
