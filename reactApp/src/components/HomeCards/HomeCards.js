import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./index.css"

//Images
import Artist from '../../images/Artists.jpg'
import Work from '../../images/Work.jpg'
import Gallery from '../../images/Gallery.jpg'
import Forum from '../../images/Forum.jpg'

const HomeCards = () => {

    const Imgheight = 190

    const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        height: 400
    },
    });

    const classes = useStyles();

    return (
        <div className='card-grid'>
            <Card className={classes.root}>
                {/*  First Card: For Artists  */}
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height={Imgheight}
                    image={Artist}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        ARTIST?
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>

            {/*  Second Card: For Users  */}
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height={Imgheight}
                    image={Work}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        LOOKING/AVAILABLE FOR WORK?
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>

            {/*  Thrid Card: To the Gallery  */}
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height={Imgheight}
                    image={Gallery}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        GALLERY?
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>

            {/*  Fourth Card: To the Forum  */}
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height={Imgheight}
                    image={Forum}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        FORUM?
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href="/forum">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
    
}

export default HomeCards