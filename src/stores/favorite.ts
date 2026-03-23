import { defineStore } from "pinia";

interface FavoriteItem {
  id: number;
  title: string;
}

export const useFavoriteStore = defineStore("favorite", {
  state: () => ({
    username: "" as string,
    favorites: [] as FavoriteItem[],
  }),
  actions: {
    setUsername(name: string) {
      this.username = name;
    },
    addFavorite(course: FavoriteItem) {
      this.favorites.push(course);
    },
  },
});