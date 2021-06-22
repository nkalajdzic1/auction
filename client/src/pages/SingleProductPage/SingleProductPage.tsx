import React from 'react'
import Page from '../../components/Page/Page';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import SingleProductHeader from '../../components/SingleProductHeader/SingleProductHeader';

function SingleProductPage({}) {
    return (
        <Page>
            <SingleProductHeader></SingleProductHeader>
            <SingleProduct></SingleProduct>
        </Page>
    )
}

export default SingleProductPage
