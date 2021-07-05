import { apiClient } from "./client";

const listingEndpoint = "/listings";

export const getListings = () => apiClient.get(listingEndpoint);
