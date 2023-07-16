/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { useParams } from "react-router-dom";
import { useGetWishlistQuery } from "../../../../redux/features/product/productApi";
import WishlistCard from "./WishlistCard";
import { useAppSelector } from "../../../../redux/hooks";

const Wishlist = () => {
  const { user } = useAppSelector((state) => state.user);
  console.log(user);
  const { data } = useGetWishlistQuery(user?.email, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 90000,
  });
  const wishlist = data?.data;
  return (
    <div className="my-auto mx-auto mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 mx-20 gap-10 ">
        {wishlist?.map((wish) => (
          <>
            {wish?.user === user.email ? (
              <>
                <WishlistCard wish={wish}></WishlistCard>
              </>
            ) : (
              <>
                <h1>You have no books on wishlist</h1>
              </>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
