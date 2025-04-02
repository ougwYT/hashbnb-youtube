import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URL } = process.env;
console.log("MONGO_URL:", MONGO_URL);

if (!MONGO_URL) {

  process.exit(1); // Encerra o processo com erro


}

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexão com o MongoDB estabelecida com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error.message);
    process.exit(1); // Encerra o processo com erro
  }
};

connectToDatabase();