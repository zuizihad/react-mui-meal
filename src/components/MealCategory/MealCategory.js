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
const cardStyle = {
    height: '45vh'
}
const MealCategory = (props) => {
    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = props.category;
    const classes = useStyles();

    return (
        <Grid item xs={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={strCategoryThumb}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {strCategory}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">

                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/category/${strCategory}`}>
                        <Button size="small" color="primary">
                            {strCategory}
                        </Button>
                    </Link>

                    <Button size="small" color="primary">
                        SEE
                </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default MealCategory;