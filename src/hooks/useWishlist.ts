import { useState } from 'react';

/**
 * Hook to manage wishlist state
 */
export function useWishlist() {
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(new Set());

  const toggleWishlist = (id: string) => {
    setWishlistIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const isInWishlist = (id: string): boolean => {
    return wishlistIds.has(id);
  };

  const clearWishlist = () => {
    setWishlistIds(new Set());
  };

  return {
    wishlistIds,
    toggleWishlist,
    isInWishlist,
    clearWishlist,
    wishlistCount: wishlistIds.size,
  };
}

