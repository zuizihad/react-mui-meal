import React, { useEffect, useState } from 'react';
import MealCategory from '../MealCategory/MealCategory';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Home.css';

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

const Home = () => {
    const classes = useStyles();
    const [mealCategory, setMealCategory] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(res => res.json())
            .then(data => setMealCategory(data.categories))
    }, [])
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {
                    mealCategory.map(category => <MealCategory category={category} key={category.idCategory}></MealCategory>)
                }

            </Grid>
        </div>
    );
}
export default Home;
