import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MealDetails from './MealDetails';
import CircularProgress from '@material-ui/core/CircularProgress';

const DetailHome = () => {
    const { id } = useParams();
    const [mealDetail, setMealDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => {
                setMealDetail(data.meals)
                setLoading(false)
            })
    }, [id])
    return (
        <div style={{ marginTop: '15px' }}>
            {
                loading ? <CircularProgress style={{ margin: '350px 50%' }} /> :
                    mealDetail.map(mealDetail => <MealDetails mealDetail={mealDetail} key={mealDetail.idMeal}></MealDetails>)
            }
        </div>
    );
};

export default DetailHome;