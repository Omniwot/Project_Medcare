import React, { useEffect } from "react";
import './styles.scss';
import { useDispatch, useSelector } from "react-redux";
import {fetchProductsStart} from './../../redux/Prices/prices.actions';

const Prices = ({})=>{
    const dispatch= useDispatch;

    useEffect(()=>{
        dispatch(
            fetchProductsStart()
        )
    }, [])

    return (
        <div className="products">

        </div>
    );
};

export default Prices;