import React from "react";

const image = "https://via.placeholder.com/150"; // Replace with your image URL or import statement

const item = () => {
  return (
    <div>
      <img
        src={image}
        alt="primeira imagem"
        className="aspect-square rounded-2xl object-cover"
      />
      <a href="/" className="flex-col gap-2">
        <h3 className="text-xl font-semibold">Cabo Frio, Rio de Janeiro</h3>
        <p className="truncate text-gray-700">
          Cobertura, duplex, em frente a praia das Dunas, Cabo Frio. As três
          suítes com ar condicionado. TV na suíte master e sala, com sky na
          sala. Cozinha equipada. Wi-fi de 120mbs da Vivo Fibra. Piscina e
          churrasqueira privativas. Estacionamento para dois carros dentro do
          prédio. Com uma área externa com vista panorâmica da praia das Dunas.
          O espaço Cobertura duplex em frente a praia das Dunas, em Cabo Frio. O
          apartamento conta com três suítes e mais um banheiro social, piscina e
          churrasqueira privativas, com uma área externa com vista panorâmica da
          praia das Dunas. Bairro calmo. Na rua lateral você encontra uma
          padaria que oferece café da manhã e alguns restaurantes. 3-5min da
          Praia do Forte (indo de carro). Cobertura fica no 4º andar.
        </p>
        <p>
          <span className="font-semibold">R$ 550 por noite</span>
        </p>
      </a>
    </div>
  );
};

export default item;
