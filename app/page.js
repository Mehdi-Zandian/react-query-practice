"use client";
import { useGetBulkSettlementList } from "@/api/Checkout";
import { useState } from "react";

export default function Home() {
  const [params, setParams] = useState({
    page: 0,
    size: 5,
  });
  const bulkSettlement = useGetBulkSettlementList(params, {
    gcTime: 3 * 1000,
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <div>
          {bulkSettlement.isPending && "loading..."}
          {bulkSettlement.isFetched && JSON.stringify(bulkSettlement.data)}
          <br />
          <button
            className="bg-red-300"
            onClick={() =>
              setParams({
                page: 0,
                size: 10,
              })
            }
          >
            change dependencies
          </button>
          <br />
          <button
            className="bg-green-300"
            onClick={() =>
              setParams({
                page: 0,
                size: 5,
              })
            }
          >
            change back
          </button>
        </div>
      </main>
    </div>
  );
}
