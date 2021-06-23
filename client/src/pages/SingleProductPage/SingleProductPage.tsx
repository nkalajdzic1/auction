import React from 'react'
import { useLocation } from 'react-router-dom';
import { IAuctionIdBody } from '../../components/ItemCard/ItemCard';
import Page from '../../components/Page/Page';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import SingleProductHeader from '../../components/SingleProductHeader/SingleProductHeader';
import Page404 from '../Page404/Page404';

function SingleProductPage() {
    const location = useLocation<IAuctionIdBody>();

    if(location.state == null || location.state.auction_id == null) 
       return <Page404></Page404>

    return (
        <Page>
            <SingleProductHeader></SingleProductHeader>
            <SingleProduct auction_id={location.state.auction_id}></SingleProduct>
        </Page>
    )
}

export default SingleProductPage
