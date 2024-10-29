import config from "./config/config";
import companies from "./gameInfo/companies";
import months from "./gameInfo/months";
import scale from "./gameInfo/scale";
import markets from "./gameInfo/markets";
import phases from "./gameInfo/phases";
import objectMap from "./helpers/objectMap";
// const fs = require("fs");
const { ipcRenderer } = require("electron");

const savedGamePath = config.fileConfig.savedGamesPath;
const fileFormat = config.fileConfig.fileFormat;

class GameApi {
  static companies = companies;
  static months = months;
  static scale = scale;
  static markets = markets;
  static phases = phases;

  static manipulate(data, currGame) {
    const {
      marketCard,
      manipulationCards,
      roll,
      monthlyBonus,
      betaMods,
      deltaMods,
    } = data;
    const { companies } = currGame;
    const monthIdx =
      this.months.findIndex((month) => month == prevMonth.month) + 1;

    const newMonth = {
      month: this.months[monthIdx],
      marketCard: marketCard,
      manipulationCards: manipulationCards,
      monthlyBonus: monthlyBonus,
      roll: roll,
      marketType: this.getMarketType(roll),
    };

    const newCompaniesData = companies.map((company) => {
      const delta = scale[roll];
      const beta = betaMods[company.manipulationId]
        ? betaMods[company.manipulationId]
        : company.beta;
      const deltaMod = deltaMods[company.manipulationId]
        ? deltaMods[manipulationId]
        : 0;
      const prevPrice = company.prices[company.prices.length - 1];
      let newPrice = prevPrice * (delta * beta + deltaMod + 1);
      company.deltaMods.push(deltaMod === 0 ? null : deltaMod);
      company.betaMods.push(betaMods[company.manipulationId] ? beta : null);
      company.prices.push(newPrice);
      return company;
    });

    const newGameData = { ...currGame, companies: newCompaniesData };
    newGameData.months.push(newMonth);

    return newGameData;
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
  // static getGame(fileName) {
  //   try {
  //     const game = fs.readFileSync(savedGamePath + fileName + fileFormat);
  //   } catch {
  //     throw Error("Error loading game.");
  //   }
  // }

  // static saveGame(data) {
  //   const jsonData = JSON.stringify(data);
  //   try {
  //     fs.writeFileSync(`${filePath}${data.createdAt}${fileFormat}`, jsonData);
  //   } catch {
  //     // throw Error("Error saving game.");
  //     console.log("Error saving game");
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
          marketCard: null,
          manipulationsCards: null,
          monthlyBonus: null,
          roll: null,
          marketType: null,
        },
      ],
      companies: this.companies.map((company, i) => ({
        manipulationId: i + 1,
        name: company.name,
        prices: [company.price],
        betaMods: [null],
        deltaMods: [null],
      })),
    };
    // this.saveGame(newGame);
    return newGame;
  }

  static getMarketType;
  static makeTableData(gameData) {
    let cols = [{ field: "company" }];
    for (i = 0; i < gameData.numMonths; i++) {
      cols.push({ field: months[i] });
    }
    let rows = [];
    for (const company of gameData.companies) {
      let row = { company: company.marketSym };
      for (i = 0, i < gameData.numMonths; i++; ) {
        row[this.months[i]] = company.prices[i];
      }
      rows.push(row);
    }
    return { cols: cols, rows: rows };
  }

  static quitGame() {
    ipcRenderer.send("quit-game");
  }
}

export default GameApi;
