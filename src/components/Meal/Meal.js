import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Meal = (props) => {
    const { idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb, strTags } = props.meal;
    const classes = useStyles();

    return (
        <Grid item xs={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={strMealThumb}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">

                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {strMeal}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        SEE
                </Button>
                    <Link to={`/meal/${idMeal}`}>
                        <Button size="small" color="primary">
                            Details
                </Button>
                    </Link>

                </CardActions>
            </Card>
        </Grid>
    );
}

export default Meal;