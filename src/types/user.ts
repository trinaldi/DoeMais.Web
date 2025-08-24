import type { Address } from "./address";
import type { Donation } from "./donation";

export type UserProfileType = {
  userId: number;
  avatarUrl: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: Address;
  donations: Donation[];

};

