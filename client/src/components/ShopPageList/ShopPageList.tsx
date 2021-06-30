import React from "react";
import ItemCardShop from "../ItemCardShop/ItemCardShop";
import { IAuctionItemShop } from "../ShopPageContainer/ShopPageContainer";

export interface IShopPageListProps {
  items: IAuctionItemShop[];
  sort: string;
}

const sortByPopularity = (x: IAuctionItemShop, y: IAuctionItemShop) => {
  return y.numOfBids - x.numOfBids;
};

const sortByRating = (x: IAuctionItemShop, y: IAuctionItemShop) => {
  return y.item.rating - x.item.rating;
};

const sortByNewness = (x: IAuctionItemShop, y: IAuctionItemShop) => {
  console.log(new Date(y.start_date).getTime());
  return new Date(y.start_date).getTime() - new Date(x.start_date).getTime();
};

const sortByPrice = (x: IAuctionItemShop, y: IAuctionItemShop) => {
  return x.starting_price - y.starting_price;
};

function ShopPageList({ items, sort }: IShopPageListProps) {
  var sortedItems = items.sort(
    sort == "Sort by Popularity"
      ? sortByPopularity
      : sort == "Sort by Rating"
      ? sortByRating
      : sort == "Sort by Newness"
      ? sortByNewness
      : sortByPrice
  );

  return (
    <>
      {sortedItems.map((x, i) => {
        return <ItemCardShop item={x}></ItemCardShop>;
      })}
    </>
  );
}

export default ShopPageList;
