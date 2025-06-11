import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cartItems: [],
  addItem: (item) =>
    set((state) => ({
      cartItems: [...state.cartItems, item],
    })),
  removeItem: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    })),
  clearCart: () => set({ cartItems: [] }),
}),{name : "cart-storage"}
)
