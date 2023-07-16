/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useAppSelector } from "../../../redux/hooks";
import { useGetWishlistQuery } from "../../../redux/features/product/productApi";

import ReadlistCard from "./ReadlistCard";

const Readlist = () => {
  const { user } = useAppSelector((state) => state.user);
  const { data } = useGetWishlistQuery(user?.email, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 90000,
  });
  const readlist = data?.data;
  return (
    <div className="grid grid-cols-3 divide-x-2">
      <div className=" block">
        <h1 className="text-center font-semibold text-3xl">
          Books I will read
        </h1>
        <div className="grid grid-cols-2 mx-5 gap-5 mt-5">
          {readlist?.map((wish: { user: string | null; status: string }) => (
            <>
              {wish?.user === user.email ? (
                <>
                  {wish?.status === "will read" && (
                    <ReadlistCard wish={wish}></ReadlistCard>
                  )}
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
      <div className="block">
        <h1 className="text-center font-semibold text-3xl">I'm reading</h1>
        <div className="grid grid-cols-2 gap-5 mx-5 mt-5">
          {readlist?.map((wish: { user: string | null; status: string }) => (
            <>
              {wish?.user === user.email ? (
                <>
                  {wish?.status === "reading" && (
                    <ReadlistCard wish={wish}></ReadlistCard>
                  )}
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
      <div className="block">
        <h1 className="text-center font-semibold text-3xl">Finished reading</h1>
        <div className="grid grid-cols-2 gap-5 mx-5 mt-5">
          {readlist?.map((wish: { user: string | null; status: string }) => (
            <>
              {wish?.user === user.email ? (
                <>
                  {wish?.status === "finished" && (
                    <ReadlistCard wish={wish}></ReadlistCard>
                  )}
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
    </div>
  );
};

export default Readlist;
