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
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

//Images
import Artist from '../../images/Artists.jpg'
import Work from '../../images/Work.jpg'
import Gallery from '../../images/Gallery.jpg'
import Info from '../../images/Info.jpg'

const HomeCards = () => {

    const Imgheight = 190

    const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        height: 360
    },
    });

    const classes = useStyles();

    return (
        <div className='card-grid'>
             {/*  Fourth Card: To the Forum  */}
             <Link underline='none' component={RouterLink} to='/About'>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="AboutPageLink"
                        height={Imgheight}
                        image={Info}
                        title="About Page Link"
                        />
                        <CardContent >
                        <Typography gutterBottom variant="h5" component="h2">
                            WHAT IS PORTFOLIGO?
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Learn more about what this PortFoliGo is through the about page
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Link>

            {/*  Second Card: For Users  */}
            <Link underline='none' component={RouterLink} to='/Forum'>
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
                            AVAILABILITY OF/FOR WORK?
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Take a peek of the Post forum to see people looking for work or opening comssion slots. 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Feel free to create a post while you look
                        </Button>
                    </CardActions>
                </Card>
            </Link>

            {/*  Thrid Card: To the Gallery  */}
            <Link underline='none' component={RouterLink} to='/Gallery'>
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
                            HOW ABOUT THE GALLERY?
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="textSecondary" component="p">
                            See work uploaded by artists or upload your own work within this page if that's what you're into
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            The place to check for artists and clients
                        </Button>
                    </CardActions>
                </Card>
            </Link>

            <Link underline='none' component={RouterLink} to='/Auth'>
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
                            WISH TO JOIN UP?
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Create a new account or use an existing google account to join up.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Click here to start creating your account
                        </Button>
                    </CardActions>
                </Card>
            </Link>

        </div>
    );
}

export default HomeCards