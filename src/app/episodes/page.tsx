"use client";
import { useEffect, useState } from "react";
import { ButtonBack } from "@/components/BackButton";
import FavoriteButton from "@/components/FavoriteButton";
import useRickAndMortyStore from "@/store/useRickAndMortyStore";
import { LIMIT_CONTENT } from "@/Utils/constants";
import { Pagination } from "@/components/Pagination";

export default function EpisodesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { episodes, favorites, fetchEpisodes } = useRickAndMortyStore();

  useEffect(() => {
    fetchEpisodes();
  }, [fetchEpisodes]);

  const totalPages = Math.ceil(episodes.length / LIMIT_CONTENT);
  const episodiesPag = episodes.slice(
    (currentPage - 1) * LIMIT_CONTENT,
    currentPage * LIMIT_CONTENT
  );

  return (
    <div className="p-8 min-h-screen flex flex-col items-center bg-gray-900 text-white">
      <ButtonBack />
      <h1 className="text-3xl font-bold text-center mb-8">Episodios</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {episodiesPag.map((episode) => {
          const isFavorite = favorites.some((fav) => fav.id === episode.id);
          return (
            <div
              key={episode.id}
              className="bg-gray-800 rounded-lg p-4 transform transition-transform duration-200 hover:scale-105 shadow-lg"
            >
              <h2 className="text-xl font-semibold">{episode.name}</h2>

              <p>Status: {episode.episode}</p>
              <p>Air date: {episode.air_date}</p>
              <FavoriteButton
                key={episode.id}
                isFavorite={isFavorite}
                item={episode}
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
