import React, { useState } from "react";
import GridListToggleButton from "../GridListToggleButton/GridListToggleButton";
import ShopPageCategories from "../ShopPageCategories/ShopPageCategories";
import ShopPageColorFilter from "../ShopPageColorFilter/ShopPageColorFilter";
import ShopPageHeader from "../ShopPageHeader/ShopPageHeader";
import ShopPagePriceFilter from "../ShopPagePriceFilter/ShopPagePriceFilter";
import ShopPageSizeFilter from "../ShopPageSizeFilter/ShopPageSizeFilter";

export interface CategoryPair {
  id: number;
  name: string;
}

function ShopPageContainer() {
  const [price, setPrice] = useState<number[]>([0, 100]);
  const [colors, setColors] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [breadcrumb, setBreadcrumbs] = useState<CategoryPair[]>([
    { id: -1, name: "" },
    { id: -1, name: "" },
  ]);

  //<<<<<< helping functions to carry the setters into other components >>>>>>

  const setBreadcrumbsHelpingF = (categories: CategoryPair[]) =>
    setBreadcrumbs(categories);
  const setPriceHelpingF = (price: number[]) => setPrice(price);
  const setColorsHelpingF = (colors: string[]) => setColors(colors);
  const setSizesHelpingF = (sizes: string[]) => setSizes(sizes);

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
            <div className="shop_page_sort">sort</div>
            <div className="shop_page_view">
              <GridListToggleButton></GridListToggleButton>
            </div>
          </div>
          <div className="shop_page_list">sss</div>
        </div>
      </div>
    </div>
  );
}

export default ShopPageContainer;
