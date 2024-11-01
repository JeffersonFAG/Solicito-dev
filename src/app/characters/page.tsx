"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ButtonBack } from "@/components/BackButton";
import FavoriteButton from "@/components/FavoriteButton";
import { Pagination } from "@/components/Pagination";
import useRickAndMortyStore from "@/store/useRickAndMortyStore";
import { LIMIT_CONTENT } from "@/Utils/constants";

export default function CharactersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { favorites, characters, fetchCharacters } = useRickAndMortyStore();

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  const totalPages = Math.ceil(characters.length / LIMIT_CONTENT);
  const charactersPag = characters.slice(
    (currentPage - 1) * LIMIT_CONTENT,
    currentPage * LIMIT_CONTENT
  );

  return (
    <div className="p-8 min-h-screen flex flex-col items-center bg-gray-900 text-white">
      <ButtonBack />
      <h1 className="text-3xl font-bold text-center mb-8">Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {charactersPag.map((character) => {
          const isFavorite = favorites.some((fav) => fav.id === character.id);

          return (
            <div
              key={character.id}
              className="bg-gray-800 rounded-lg p-4 transform transition-transform duration-200 hover:scale-105 shadow-lg"
            >
              <Image
                width={300}
                height={300}
                src={character.image}
                alt={character.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold">{character.name}</h2>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <FavoriteButton
                key={character.id}
                isFavorite={isFavorite}
                item={character}
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
