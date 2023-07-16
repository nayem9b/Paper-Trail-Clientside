/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { useParams } from "react-router-dom";
import { useGetWishlistQuery } from "../../../../redux/features/product/productApi";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
  const router = useParams();
  const { id } = router;
  const { data } = useGetWishlistQuery(id);
  const wishlist = data?.data;
  return (
    <div className="my-auto mx-auto mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 mx-20 gap-10 ">
        {wishlist.map((wish) => (
          <WishlistCard wish={wish}></WishlistCard>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
