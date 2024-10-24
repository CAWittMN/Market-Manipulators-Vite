import config from "./config/config";
import companies from "./companies/companies";
import months from "./months/months";
import scale from "./scale/scale";
import markets from "./markets/markets";

import objectMap from "./helpers/objectMap";
const fs = require("fs");
const { ipcRenderer } = require("electron");

const savedGamePath = config.fileConfig.savedGamesPath;
const fileFormat = config.fileConfig.fileFormat;

class GameApi {
  static companies = companies;
  static months = months;
  static scale = scale;
  static markets = markets;

  static Manipulate(
    prevMonth,
    marketCard,
    manipulationCards,
    roll,
    monthlyBonus,
    betaMods = {},
    deltaMods = {}
  ) {
    const monthIdx =
      this.months.findIndex((month) => month == prevMonth.month) + 1;

    const newMonth = {
      month: this.months[monthIdx],
      companies: objectMap(this.companies, (company, name) => {
        const delta = scale[roll];
        const beta = betaMods[name] ? betaMods[name] : company.beta;
        const deltaMod = deltaMods[name] ? deltaMods[name] : 0;
        const prevPrice = prevMonth.companies[name].price;
        let newPrice = prevMonth * (delta * beta + deltaMod + 1);
        return {
          price: newPrice,
          gain: prevPrice < newPrice,
          loss: prevPrice > newPrice,
          deltaMod: deltaMods[name] ? deltaMods[name] : null,
          betaMod: betaMods[name] ? betaMods[name] : null,
        };
      }),
      marketCard: marketCard,
      manipulationCards: manipulationCards,
      monthlyBonus: monthlyBonus,
      roll: roll,
      marketType: this.getMarketType(),
    };
    return newMonth;
  }

  // static getGames() {
  //   let games = [];
  //   try {
  //     const fileList = fs.readdirSync(savedGamePath);
  //     for (const file of fileList) {
  //       games.push(JSON.parse(fs.readFileSync(`${savedGamePath}${file}`)));
  //     }
  //   } catch {
  //     throw Error("Error loading games.");
  //   }
  //   return games;
  // }

  // static saveGame(data) {
  //   const jsonData = JSON.stringify(data);
  //   try {
  //     fs.writeFileSync(`${filePath}${data.createdAt}${fileFormat}`, jsonData);
  //   } catch {
  //     throw Error("Error saving game.");
  //   }
  //   console.log("Game saved.");
  // }

  static newGame(options) {
    const newGame = {
      createdAt: Date.now(),
      numPlayers: options.numPlayers,
      numMonths: options.numMonths,
      months: [
        {
          month: this.months[0],
          companies: objectMap(this.companies, (company) => {
            return {
              price: company.price,
              gain: false,
              loss: false,
              deltaMod: null,
              betaMod: null,
              roll: 0,
            };
          }),
          marketCard: [],
          manipulationCards: [],
          monthlyBonus: null,
          marketType: this.markets.something,
        },
      ],
    };
    this.saveGame(newGame);
    return newGame;
  }
  static getNumMonths(numPlayers) {
    if (null) {
      return;
    } else if (null) {
      return;
    }
  }
  static getMarketType;

  static quitGame() {
    ipcRenderer.send("quit-game");
  }
}

export default GameApi;
