import React from "react";

interface IButton {
  label: string;
  currentPage: number;
  totalPages: number;
  handlePage: () => void;
  isNextBtn: boolean;
}

export const PagButton = ({
  label,
  currentPage,
  totalPages,
  handlePage,
  isNextBtn,
}: IButton) => {
  const numberPage = !isNextBtn ? 1 : totalPages;

  const isDisabled = currentPage === numberPage;

  return (
    <button
      onClick={handlePage}
      disabled={isDisabled}
      className={`bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {label}
    </button>
  );
};
