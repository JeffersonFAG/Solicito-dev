// pages/api/favorites.js

import { getDatabase } from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { favorites } = req.body;

    // Validación para asegurar que `favorites` es un array
    if (!Array.isArray(favorites)) {
      return res
        .status(400)
        .json({ message: "El formato de favoritos es inválido" });
    }

    try {
      const db = await getDatabase();
      const result = await db.collection("favorites").insertMany(favorites);
      res.status(200).json({
        message: "Favoritos guardados con éxito",
        insertedCount: result.insertedCount,
      });
    } catch (error) {
      console.error("Error al guardar favoritos:", error);
      res
        .status(500)
        .json({ message: "Error al guardar favoritos", error: error.message });
    }
  } else {
    // Manejo para métodos que no sean POST
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
