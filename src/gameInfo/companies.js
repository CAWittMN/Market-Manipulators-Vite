import config from "../config/config";

const companies = {
  boog: {
    name: "Boogle",
    stockSymbol: "BOOG",
    price: config.initialValues.boog.price,
    beta: config.initialValues.boog.beta,
  },
  blu: {
    name: "Blue Chip Inc.",
    stockSymbol: "BLU",
    price: config.initialValues.blu.price,
    beta: config.initialValues.blu.beta,
  },
  meme: {
    name: "MemeShop",
    stockSymbol: "MEME",
    price: config.initialValues.meme.price,
    beta: config.initialValues.meme.beta,
  },
  bird: {
    name: "Birdshire-Happaday",
    stockSymbol: "BIRD",
    price: config.initialValues.bird.price,
    beta: config.initialValues.bird.beta,
  },
  safe: {
    name: "Safe-N-Slow",
    stockSymbol: "SAFE",
    price: config.initialValues.safe.price,
    beta: config.initialValues.safe.beta,
  },
};

export default companies;
