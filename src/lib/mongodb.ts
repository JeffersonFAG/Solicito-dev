import { MongoClient } from "mongodb";

let dbClient;

export async function connectToDatabase() {
  if (!dbClient) {
    try {
      dbClient = new MongoClient(
        `mongodb+srv://devjf08:devjf08@couster0.8ix00.mongodb.net/?retryWrites=true&w=majority&appName=Couster0`
      );
      await dbClient.connect();
    } catch (error) {
      console.error("Error al conectar a MongoDB:", error);
      throw new Error("No se pudo conectar a la base de datos");
    }
  }
  return dbClient;
}

export async function getDatabase() {
  const client = await connectToDatabase();
  return client.db(process.env.DB_NAME);
}
