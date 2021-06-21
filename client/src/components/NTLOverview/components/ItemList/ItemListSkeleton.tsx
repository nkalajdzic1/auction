import React from "react";
import ItemCardSkeleton from "../../../ItemCard/ItemCardSkeleton";

function ItemList() {
  return (
    <ul>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((x, i) => {
        return (
          <li id={i.toString()}>
            <div className="singleCard">
              <ItemCardSkeleton id={i}></ItemCardSkeleton>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ItemList;
