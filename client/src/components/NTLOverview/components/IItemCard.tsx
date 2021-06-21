export interface IItemCard {
  id: number;
  item_id: number;
  user_id: number;
  starting_price: number;
  item: {
    name: string;
    item_item_picture: [
      {
        picture: {
          type: string;
          data: any;
        };
      }
    ];
  };
}
