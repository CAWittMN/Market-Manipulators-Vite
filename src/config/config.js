const config = {
  initialValues: {
    boog: {
      price: 300,
      beta: 1.5,
    },
    safe: {
      price: 80,
      beta: 0.5,
    },
    bird: {
      price: 800,
      beta: 0.75,
    },
    meme: {
      price: 20,
      beta: 2,
    },
    blu: {
      price: 200,
      beta: 1,
    },
  },
  fileConfig: {
    savedGamesPath: "savedGames/",
    settingsPath: "settings/",
    fileFormat: ".json",
  },
};

export default config;
