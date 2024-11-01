"use client";
import { useEffect, useState } from "react";
import { ButtonBack } from "@/components/BackButton";
import FavoriteButton from "@/components/FavoriteButton";
import useRickAndMortyStore from "@/store/useRickAndMortyStore";
import { LIMIT_CONTENT } from "@/Utils/constants";
import { Pagination } from "@/components/Pagination";

export default function LocationsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { locations, fetchLocations, favorites } = useRickAndMortyStore();

  useEffect(() => {
    fetchLocations();
  }, [fetchLocations]);

  const totalPages = Math.ceil(locations.length / LIMIT_CONTENT);
  const locationsPag = locations.slice(
    (currentPage - 1) * LIMIT_CONTENT,
    currentPage * LIMIT_CONTENT
  );
  return (
    <div className="p-8 min-h-screen flex flex-col items-center bg-gray-900 text-white">
      <ButtonBack />
      <h1 className="text-3xl font-bold text-center mb-8">Locations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {locationsPag.map((locations) => {
          const isFavorite = favorites.some((fav) => fav.id === locations.id);
          return (
            <div
              key={locations.id}
              className="bg-gray-800 rounded-lg p-4 transform transition-transform duration-200 hover:scale-105 shadow-lg"
            >
              <h2 className="text-xl font-semibold">{locations.name}</h2>
              <p>Create: {locations?.created}</p>
              <p>Dimention: {locations?.dimension}</p>
              <FavoriteButton
                key={locations.id}
                isFavorite={isFavorite}
                item={locations}
              />
            </div>
          );
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
