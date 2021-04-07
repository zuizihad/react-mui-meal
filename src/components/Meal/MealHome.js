import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import Meal from './Meal';
import { useParams } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const MealHome = (props) => {
    const classes = useStyles();
    const { categoryName } = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [categoryName])
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {
                    meals.map(meal => <Meal meal={meal} key={meal.idMeal}></Meal>)
                }
            </Grid>
        </div>
    );
};

export default MealHome;