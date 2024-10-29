import config from "../config/config";

const companies = [
  {
    name: "Boogle",
    stockSymbol: "BOOG",
    price: config.initialValues.boog.price,
    beta: config.initialValues.boog.beta,
  },
  {
    name: "Blue Chip Inc.",
    stockSymbol: "BLU",
    price: config.initialValues.blu.price,
    beta: config.initialValues.blu.beta,
  },
  {
    name: "MemeShop",
    stockSymbol: "MEME",
    price: config.initialValues.meme.price,
    beta: config.initialValues.meme.beta,
  },
  {
    name: "Birdshire-Happaday",
    stockSymbol: "BIRD",
    price: config.initialValues.bird.price,
    beta: config.initialValues.bird.beta,
  },
  {
    name: "Safe-N-Slow",
    stockSymbol: "SAFE",
    price: config.initialValues.safe.price,
    beta: config.initialValues.safe.beta,
  },
];

export default companies;
