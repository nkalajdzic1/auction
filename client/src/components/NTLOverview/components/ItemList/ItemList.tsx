import React from "react";
import ItemCard from "../../../ItemCard/ItemCard";
import { IItemCard } from "./IItemCard";
import { blobToImage } from "../../NTLOverview";
import { smallCard } from "./Styles";

function openItem() {}

export interface IItemListProps {
  items: IItemCard[];
}

function ItemList({ items }: IItemListProps) {
  const smallCardClasses = smallCard();
  return (
    <ul>
      {items.map((x, i) => {
        return (
          <li id={x.id.toString()}>
            <div className="singleCard">
              <ItemCard
                id={x.id}
                key={i}
                imageURL={blobToImage(x.item.item_item_picture[0].picture)}
                title={x.item.name}
                starting_price={x.starting_price}
                styles={smallCardClasses}
                onClickF={openItem}
              ></ItemCard>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ItemList;
