export interface ISingleAuction {
  id: number;
  item_id: number;
  user_id: number;
  starting_price: number;
  start_date: string;
  end_date: string;
  item: {
    name: string;
    color: string;
    size: string;
    rating: number;
    description: string;
    item_item_picture: Array<{
      is_main_picture: boolean;
      picture: {
        type: string;
        data: any;
      };
    }>;
  };
  auction_bid: [
    {
      bidding_price: number;
      bidding_date: string;
      user: {
        name: string;
        surname: string;
      };
    }
  ];
}
