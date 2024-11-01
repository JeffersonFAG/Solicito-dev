// store/useRickAndMortyStore.ts
import { Character, Episode, Location } from "@/interfaces/generalsInterfaces";
import { create } from "zustand";

interface RickAndMortyStore {
  episodes: Episode[];
  locations: Location[];
  characters: Character[];
  favorites: (Episode | Location | Character)[];
  queryset: string;
  order: "asc" | "desc";
  fetchEpisodes: () => Promise<void>;
  fetchLocations: () => Promise<void>;
  fetchCharacters: () => Promise<void>;
  updateQueryset: (newQueryset: string) => void;
  updateOrder: (newOrder: "asc" | "desc") => void;
  addFavorite: (item: Episode | Location | Character) => void;
  removeFavorite: (id: number) => void;
}

const API_BASE_URL = "https://rickandmortyapi.com/api";

const useRickAndMortyStore = create<RickAndMortyStore>((set) => ({
  episodes: [],
  locations: [],
  characters: [],
  favorites: [],
  queryset: "", // Query string para filtrar
  order: "asc", // Orden por defecto

  fetchEpisodes: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/episode`);
      const data = await response.json();
      set({ episodes: data.results });
    } catch (error) {
      console.error("Error fetching episodes:", error);
    }
  },

  fetchLocations: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/location`);
      const data = await response.json();
      set({ locations: data.results });
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  },

  fetchCharacters: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/character`);
      const data = await response.json();
      set({ characters: data.results });
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  },

  updateQueryset: (newQueryset) => set({ queryset: newQueryset }),

  updateOrder: (newOrder) => set({ order: newOrder }),

  addFavorite: (item) =>
    set((state) => ({
      favorites: [...state.favorites, item],
    })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== id),
    })),
}));

export default useRickAndMortyStore;
