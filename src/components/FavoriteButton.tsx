import React from "react";
import useRickAndMortyStore from "@/store/useRickAndMortyStore";
import { Character, Episode, Location } from "@/interfaces/generalsInterfaces";

interface FavoriteButtonProps {
  item: Episode | Location | Character;
  isFavorite: boolean;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  item,
  isFavorite,
}) => {
  const { addFavorite, removeFavorite } = useRickAndMortyStore();

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(item.id); // Eliminar de favoritos
    } else {
      addFavorite(item); // Agregar a favoritos (puedes ajustar este objeto según tu modelo)
    }
  };

  return (
    <button
      className={`mt-4 py-1 px-4 rounded transition-colors ${
        isFavorite
          ? "bg-red-600 hover:bg-red-500"
          : "bg-green-600 hover:bg-green-500"
      } text-white`}
      onClick={handleClick}
    >
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
};

export default FavoriteButton;
