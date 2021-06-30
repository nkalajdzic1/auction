import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import React from "react";
import ItemCardSkeleton from "../ItemCard/ItemCardSkeleton";

export interface IItemListSkeleton {
  styles?: ClassNameMap<"root" | "media">;
  size: number;
}

function ItemListSkeleton({ styles, size }: IItemListSkeleton) {
  return (
    <ul>
      {new Array(size).fill(null).map((x, i) => {
        return (
          <li id={i.toString()}>
            <div className="singleCard">
              <ItemCardSkeleton styles={styles} id={i}></ItemCardSkeleton>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ItemListSkeleton;
