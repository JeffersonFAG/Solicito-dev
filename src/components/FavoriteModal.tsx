import React from "react";

interface Favorite {
  id: number;
  name: string;
  // Agrega más propiedades según tus necesidades
}

interface FavoritesModalProps {
  message: string | null;
  favorites: Favorite[];
  toggleModal: () => void;
  onSaveFavorites: () => void;
}

const FavoritesModal: React.FC<FavoritesModalProps> = ({
  message,
  favorites,
  toggleModal,
  onSaveFavorites,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md" />
      <div className="bg-black rounded-lg shadow-lg p-4 mx-auto relative overflow-hidden min-w-[300px] md:min-w-[500px] max-w-lg z-50">
        <div className="absolute inset-0 bg-green-500 opacity-30" />
        {/* Fondo verde biche con opacidad */}

        <h2 className="text-2xl font-bold text-center text-white mb-4 z-50">
          Favoritos
        </h2>
        {/* Título centrado */}

        <div className="max-h-60 overflow-y-auto mb-4 bg-white bg-opacity-10 backdrop-blur-md rounded-md p-2 z-50">
          {/* Contenedor con scroll */}
          {favorites.length > 0 ? (
            <ul className="mb-4 space-y-2">
              {favorites.map((favorite) => (
                <li
                  key={favorite.id}
                  className="border-b border-gray-300 py-2 text-white"
                >
                  {favorite.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white">No tienes personajes favoritos.</p>
          )}
        </div>

        <button
          onClick={toggleModal}
          className="absolute top-2 right-2 text-white text-lg font-semibold z-50"
        >
          ✖ {/* Botón de cerrar como "X" */}
        </button>
        {message && <p className="text-center text-white z-50">{message}</p>}
        <button
          onClick={onSaveFavorites}
          className="relative mt-4 bg-green-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-500 transition duration-300 block mx-auto z-50"
        >
          Guardar Favoritos
        </button>
      </div>
    </div>
  );
};

export default FavoritesModal;
