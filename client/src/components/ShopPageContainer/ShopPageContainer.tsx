import axios from "axios";
import React, { useEffect, useState } from "react";
import { TMBD_API_URL } from "../../const";
import DropDown from "../DropDown/DropDown";
import GridListToggleButton from "../GridListToggleButton/GridListToggleButton";
import ShopPageCategories from "../ShopPageCategories/ShopPageCategories";
import ShopPageColorFilter from "../ShopPageColorFilter/ShopPageColorFilter";
import ShopPageHeader from "../ShopPageHeader/ShopPageHeader";
import ShopPageList from "../ShopPageList/ShopPageList";
import ShopPagePriceFilter from "../ShopPagePriceFilter/ShopPagePriceFilter";
import ShopPageSizeFilter from "../ShopPageSizeFilter/ShopPageSizeFilter";

export interface CategoryPair {
  id: number;
  name: string;
}

export interface IAuctionItemShop {
  id: number;
  starting_price: number;
  start_date: Date;
  end_date: Date;
  numOfBids: number;
  item: {
    id: number;
    name: string;
    color: string;
    size: string;
    rating: number;
    description: string;
    item_item_picture: Array<{
      picture: {
        type: string;
        data: any;
      };
    }>;
    item_category: Array<{
      category_id: number;
    }>;
  };
}

function ShopPageContainer() {
  const [selectedPrice, setSelectedPrice] = useState<number[]>([-1, -1]);
  const [items, setItems] = useState<IAuctionItemShop[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [sizes, setSizes] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [dropdown, setDropdown] = useState<string>("");
  const [breadcrumb, setBreadcrumbs] = useState<CategoryPair[]>([
    { id: -1, name: "" },
    { id: -1, name: "" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryPair[]>([
    { id: -1, name: "" },
    { id: -1, name: "" },
  ]);
  const setBreadcrumbsHelpingF = (categories: CategoryPair[]) =>
    setBreadcrumbs(categories);
  const setColorsHelpingF = (colors: string[]) => setColors(colors);
  const setSizesHelpingF = (sizes: string[]) => setSizes(sizes);
  const setSelectedColorHelpingF = (color: string) => setSelectedColor(color);
  const setSelectedSizeHelpingF = (size: string) => setSelectedSize(size);

  useEffect(() => {
    axios
      .post(`${TMBD_API_URL}/shop/items`, {
        category: selectedCategory[0].id,
        subcategory: selectedCategory[1].id,
        minPrice: selectedPrice[0] != -1 ? selectedPrice[0] : -1,
        maxPrice: selectedPrice[1] != -1 ? selectedPrice[1] : -1,
        color: selectedColor == "" ? -1 : selectedColor,
        size:
          selectedSize == "" ? -1 : selectedSize.replaceAll(/\s\(\d\)/g, ""),
      })
      .then((x) => {
        setItems(x.data);
      })
      .catch((err) => console.log(err));
  }, [selectedPrice, selectedCategory, selectedColor, selectedSize]);

  return (
    <div className="shop_page_containerr">
      <ShopPageHeader
        breadcrumbs={breadcrumb}
        setBreadcrumbs={setBreadcrumbsHelpingF}
        setCategory={setSelectedCategory}
      />
      <div className="shop_page">
        <div className="shop_page_filter">
          <ShopPageCategories
            breadcrumbs={breadcrumb}
            setBreadcrumbs={setBreadcrumbsHelpingF}
            setCategory={setSelectedCategory}
          />
          <ShopPagePriceFilter
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
          ></ShopPagePriceFilter>
          <ShopPageColorFilter
            colors={colors}
            setColors={setColorsHelpingF}
            setSelectedColor={setSelectedColorHelpingF}
          ></ShopPageColorFilter>
          <ShopPageSizeFilter
            sizes={sizes}
            setSizes={setSizesHelpingF}
            setSelectedSize={setSelectedSizeHelpingF}
          ></ShopPageSizeFilter>
        </div>
        <div className="shop_page_items">
          <div className="shop_page_sort_and_view">
            <div className="shop_page_sort">
              <DropDown
                dropdown={dropdown}
                setDropdown={setDropdown}
              ></DropDown>
            </div>
            <div className="shop_page_view">
              <GridListToggleButton></GridListToggleButton>
            </div>
          </div>
          <div className="shop_page_list">
            <ShopPageList items={items} sort={dropdown} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPageContainer;
