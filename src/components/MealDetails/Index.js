import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MealDetails from './MealDetails';
const DetailHome = () => {
    const { id } = useParams();
    const [mealDetail, setMealDetail] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setMealDetail(data.meals))
    }, [id])
    return (
        <div>
            {
                mealDetail.map(mealDetail => <MealDetails mealDetail={mealDetail} key={mealDetail.idMeal}></MealDetails>)
            }
        </div>
    );
};

export default DetailHome;