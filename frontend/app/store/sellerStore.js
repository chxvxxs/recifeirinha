import { create } from 'zustand';

export const useSellerStore = create((set) => ({
  seller: null,
  sellerId: null,
  setSeller: (sellerData) => set({ seller: sellerData, sellerId: sellerData.id }),
}));
