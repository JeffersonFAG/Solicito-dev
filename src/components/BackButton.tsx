import Link from "next/link";

export const ButtonBack = () => {
  return (
    <div className="w-full flex justify-start mb-6">
      <Link href="/">
        <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">
          ← Volver
        </button>
      </Link>
    </div>
  );
};
