import api from ".";
import { useQuery } from "@tanstack/react-query";

// BulkSettlement

// 1-DTO

// 2-Fetch
const getBulkSettlementList = async (params) => {
  const res = await api.get("merchant/checkout/batch/", { params });
  return res.data;
};
// 3-Query
export const useGetBulkSettlementList = (query, options) =>
  useQuery({
    queryKey: ["get-bulkSettlement-list", query],
    queryFn: () => getBulkSettlementList(query),
    ...options,
  });
