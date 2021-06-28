import { CategoryPair } from "../ShopPageContainer/ShopPageContainer";

export interface IShopPageCategories {
  id: number;
  name: string;
  category_category: Array<{
    id: number;
    parent_category_id: number;
    name: string;
    category_item: Array<{
      id: number;
    }>;
  }>;
}

export interface IShopPageCategoriesProps {
  breadcrumbs?: CategoryPair[];
  setBreadcrumbs?: (categories: CategoryPair[]) => void;
}

export interface ISubList {
  breadcrumbs?: CategoryPair[];
  setBreadcrumbs?: (categories: CategoryPair[]) => void;
  category: IShopPageCategories;
}
