"use client";
import FavoritesModal from "@/components/FavoriteModal";
// import handleDatabase from "@/core/handleDatabase";
import useRickAndMortyStore from "@/store/useRickAndMortyStore";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const { favorites } = useRickAndMortyStore();

  const toggleModal = () => {
    setMessage("");
    setIsModalOpen(!isModalOpen);
  };

  const handleSaveFavorites = async () => {
    try {
      const response = await fetch("/api/favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ favorites }),
      });
      const data = await response.json();
      if (!response.ok) {
        setMessage("Ocurrió un error al guardar los favoritos");
        throw new Error(
          data.message || "Ocurrió un error al guardar los favoritos"
        );
      }
      setMessage("Favoritos guardados con éxito");
    } catch (error) {
      setMessage("Ocurrió un error al guardar los favoritos");
      console.error("Error:", error.message);
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/bg_home_page.webp')`,
      }}
    >
      <div className="text-center p-8 sm:p-12 bg-black/50 rounded-lg shadow-lg backdrop-blur-md max-w-lg w-full mx-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4">
          Bienvenido a Rick and Morty Universe
        </h1>
        <h2 className="text-lg sm:text-2xl text-gray-300 mb-8">
          Explora episodios, personajes y locaciones
        </h2>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-4">
          <Link href="/episodes" legacyBehavior>
            <a className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
              Episodes
            </a>
          </Link>
          <Link href="/characters" legacyBehavior>
            <a className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
              Characters
            </a>
          </Link>
          <Link href="/locations" legacyBehavior>
            <a className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
              Locations
            </a>
          </Link>
        </div>

        {/* Botón para abrir el modal de favoritos */}
        <button
          onClick={toggleModal}
          className="bg-blue-600 text-white text-sm py-1 px-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 shadow-sm hover:shadow-md"
        >
          Ver Favoritos
        </button>
      </div>

      {/* Modal de favoritos */}
      {isModalOpen && (
        <FavoritesModal
          message={message}
          favorites={favorites}
          toggleModal={toggleModal}
          onSaveFavorites={handleSaveFavorites}
        />
      )}
    </div>
  );
}
