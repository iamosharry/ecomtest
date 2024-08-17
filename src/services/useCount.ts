import create from "zustand";

interface Products {
  _id: number;
  name: string;
  image: string;
  price: number;
}

interface IncrementState {
  increments: { [key: number]: number };
  increment: (id: number) => void;
  decrement: (id: number) => void;
  total: () => number; // Method to calculate total increments
  carts: Products[]; // Array to hold products in the cart
  addToCart: (product: Products) => void; // Method to add product to cart
  removeFromCart: (id: number) => void; // Method to remove product from cart
  sum: () => number; // Method to calculate total price
}

// Utility function to load state from local storage
const loadState = <T>(key: string, defaultValue: T): T => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
};

// Utility function to save state to local storage
const saveState = (key: string, state: any) => {
  localStorage.setItem(key, JSON.stringify(state));
};

const useCount = create<IncrementState>((set, get) => ({
  carts: loadState<Products[]>("carts", []), // Load carts from local storage
  increments: loadState<{ [key: number]: number }>("increments", {}), // Load increments from local storage

  increment: (id) =>
    set((state) => {
      const newIncrements = {
        ...state.increments,
        [id]: (state.increments[id] || 0) + 1, // Increment the count for the product
      };
      saveState("increments", newIncrements); // Save increments to local storage
      return { increments: newIncrements };
    }),

  decrement: (id) =>
    set((state) => {
      const newIncrements = {
        ...state.increments,
        [id]: Math.max((state.increments[id] || 0) - 1, 0), // Decrement but ensure it doesn't go below 0
      };
      saveState("increments", newIncrements); // Save increments to local storage
      return { increments: newIncrements };
    }),

  total: () => {
    return Object.values(get().increments).reduce(
      (sum, count) => sum + count,
      0
    );
  },

  addToCart: (product: Products) =>
    set((state) => {
      const exists = state.carts.some((item) => item._id === product._id);
      const newCarts = exists ? state.carts : [...state.carts, product]; // Only add if it doesn't exist
      saveState("carts", newCarts); // Save carts to local storage
      return { carts: newCarts };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedCarts = state.carts.filter((item) => item._id !== id);
      const { [id]: _, ...remainingIncrements } = state.increments;

      saveState("carts", updatedCarts); // Save updated carts to local storage
      saveState("increments", remainingIncrements); // Save updated increments to local storage

      return {
        carts: updatedCarts,
        increments: remainingIncrements,
      };
    }),

  sum: () => {
    const state = get();
    return state.carts.reduce((total, product) => {
      const quantity = state.increments[product._id] || 0; // Get quantity from increments
      return total + product.price * quantity; // Calculate total price for this product
    }, 0); // Return the total price of all items
  },
}));

export default useCount;
