"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface FavoritesContextValue {
  favoritos: number[];
  toggleFavorito: (id: number) => void;
  isFavorito: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favoritos, setFavoritos] = useState<number[]>([]);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("favoritos");
      if (stored) {
        const parsed = JSON.parse(stored) as number[];
        if (Array.isArray(parsed)) {
          setFavoritos(parsed);
        }
      }
    } catch {
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("favoritos", JSON.stringify(favoritos));
    } catch {
    }
  }, [favoritos]);

  const toggleFavorito = useCallback((id: number) => {
    setFavoritos((current) =>
      current.includes(id) ? current.filter((favId) => favId !== id) : [...current, id]
    );
  }, []);

  const isFavorito = useCallback((id: number) => favoritos.includes(id), [favoritos]);

  const value = useMemo(
    () => ({ favoritos, toggleFavorito, isFavorito }),
    [favoritos, toggleFavorito, isFavorito]
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }

  return context;
}
