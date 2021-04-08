import React, { useEffect, useState } from 'react';
import MealCategory from '../MealCategory/MealCategory';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Home.css';
import CircularProgress from '@material-ui/core/CircularProgress';

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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(res => res.json())
            .then(data => {
                setMealCategory(data.categories)
                setLoading(false);
            })

    }, [])
    return (
        <div className={classes.root}>
            <Grid container spacing={3} style={{ marginTop: '5px' }}>
                {loading ? <CircularProgress style={{ margin: '350px auto' }} /> :
                    mealCategory.map(category => <MealCategory category={category} key={category.idCategory}></MealCategory>)
                }

            </Grid>
        </div>
    );
}
export default Home;
