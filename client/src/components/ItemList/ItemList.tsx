import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import { IItemCard } from "./IItemCard";
import { blobToImage } from "../NTLOverview/NTLOverview";
import { smallCard } from "./Styles";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

function openItem() {}

export interface IItemListProps {
  items: IItemCard[];
  style?: ClassNameMap<"root" | "media">;
}

function ItemList({ items, style }: IItemListProps) {
  const smallCardClasses = style == null ? smallCard() : style;
  return (
    <ul>
      {items.length > 0 ? (
        items.map((x, i) => {
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
                ></ItemCard>
              </div>
            </li>
          );
        })
      ) : (
        <></>
      )}
    </ul>
  );
}

export default ItemList;
