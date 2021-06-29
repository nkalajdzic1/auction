import axios from "axios";
import React, { useEffect, useState } from "react";
import DropDown from "../DropDown/DropDown";
import GridListToggleButton from "../GridListToggleButton/GridListToggleButton";
import ItemCardShop from "../ItemCardShop/ItemCardShop";
import ShopPageCategories from "../ShopPageCategories/ShopPageCategories";
import ShopPageColorFilter from "../ShopPageColorFilter/ShopPageColorFilter";
import ShopPageHeader from "../ShopPageHeader/ShopPageHeader";
import ShopPagePriceFilter from "../ShopPagePriceFilter/ShopPagePriceFilter";
import ShopPageSizeFilter from "../ShopPageSizeFilter/ShopPageSizeFilter";
import { toastError } from "../ToastCustom/ToastCustom";

export interface CategoryPair {
  id: number;
  name: string;
}

function ShopPageContainer() {
  const [price, setPrice] = useState<number[]>([0, 100]);
  const [items, setItems] = useState([]);
  const [colors, setColors] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [breadcrumb, setBreadcrumbs] = useState<CategoryPair[]>([
    { id: -1, name: "" },
    { id: -1, name: "" },
  ]);

  const setBreadcrumbsHelpingF = (categories: CategoryPair[]) =>
    setBreadcrumbs(categories);
  const setPriceHelpingF = (price: number[]) => setPrice(price);
  const setColorsHelpingF = (colors: string[]) => setColors(colors);
  const setSizesHelpingF = (sizes: string[]) => setSizes(sizes);

  useEffect(() => {
    axios
      .post("http://localhost:5000/shop/items", {
        ss: "1",
        aa: "1",
      })
      .then((x) => console.log(x))
      .catch((err) => console.log(err));
  });

  //<<<<<< helping functions to carry the setters into other components >>>>>>

  return (
    <div className="shop_page_containerr">
      <ShopPageHeader
        breadcrumbs={breadcrumb}
        setBreadcrumbs={setBreadcrumbsHelpingF}
      />
      <div className="shop_page">
        <div className="shop_page_filter">
          <ShopPageCategories
            breadcrumbs={breadcrumb}
            setBreadcrumbs={setBreadcrumbsHelpingF}
          />
          <ShopPagePriceFilter
            price={price}
            setPrice={setPriceHelpingF}
          ></ShopPagePriceFilter>
          <ShopPageColorFilter
            colors={colors}
            setColors={setColorsHelpingF}
          ></ShopPageColorFilter>
          <ShopPageSizeFilter
            sizes={sizes}
            setSizes={setSizesHelpingF}
          ></ShopPageSizeFilter>
        </div>
        <div className="shop_page_items">
          <div className="shop_page_sort_and_view">
            <div className="shop_page_sort">
              <DropDown></DropDown>
            </div>
            <div className="shop_page_view">
              <GridListToggleButton></GridListToggleButton>
            </div>
          </div>
          <div className="shop_page_list">
            {new Array(10).fill(null).map((x, i) => {
              return <ItemCardShop></ItemCardShop>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPageContainer;
