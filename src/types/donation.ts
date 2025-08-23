import type { Address } from "./address";

export type Donation = {
  id: number;
  title: string;
  description: string;
  quantity: number;
  status: string;
  category: string;
  pickupAddress: Address;
  images: string[];
};
