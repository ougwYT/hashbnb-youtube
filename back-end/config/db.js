import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URL } = process.env;
console.log("MONGO_URL:", MONGO_URL);



export const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Conexão com o MongoDB estabelecida com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error.message);
    // Encerra o processo com erro
  }
};

connectToDatabase();