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
    const monthIdx = currGame.months.length;

    const newMonth = {
      month: this.months[monthIdx],
      marketCard: marketCard,
      manipulationCards: manipulationCards,
      monthlyBonus: monthlyBonus,
      roll: roll,
      marketType: null,
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
      const trueDelta = delta * beta;
      let newPrice = prevPrice * (trueDelta + deltaMod + 1);
      company.deltaMods.push(deltaMod === 0 ? null : deltaMod);
      company.betaMods.push(betaMods[company.manipulationId] ? beta : null);
      company.prices.push(Math.ceil(newPrice));
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
        marketSym: company.stockSymbol,
        beta: company.beta,
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
    let priceCols = [{ field: "company" }];
    for (let i = 0; i < gameData.numMonths; i++) {
      priceCols.push({ field: months[i].toLowerCase() });
    }

    let modCols = [];
    for (let i = 0; i <= gameData.numMonths; i++) {
      modCols.push({ field: i.toString() });
    }

    let priceRows = [];
    for (const company of gameData.companies) {
      let row = { company: company.marketSym };
      for (let i = 0; i < gameData.numMonths; i++) {
        row[this.months[i].toLowerCase()] = company.prices[i]
          ? company.prices[i]
          : null;
      }
      priceRows.push(row);
    }

    let modRows = [{ 0: "Roll" }];
    for (let i = 0; i < gameData.numMonths; i++) {
      modRows[0][i + 1] = gameData.months[i] ? gameData.months[i].roll : null;
    }
    const doubleLength = this.companies.length * 2;
    for (let i = 0; i < doubleLength; i++) {
      const reLoopPoint = gameData.companies.length;
      const idx = i >= reLoopPoint ? i - reLoopPoint : i;
      const company = gameData.companies[idx];
      console.log(company);
      const symbol = i >= reLoopPoint ? "β" : "Δ";
      let row = { 0: `${company.marketSym}${symbol}` };
      for (let j = 0; j < gameData.numMonths; j++) {
        const val =
          i >= reLoopPoint ? company.deltaMods[j] : company.betaMods[j];
        row[j + 1] = val ? val : null;
      }
      modRows.push(row);
    }

    return {
      priceCols: priceCols,
      priceRows: priceRows,
      modCols: modCols,
      modRows: modRows,
    };
  }

  static getChartData(gameData) {
    const series = [{ type: "line", xKey: "month", yKey: "price" }];
  }

  static quitGame() {
    ipcRenderer.send("quit-game");
  }
}

export default GameApi;
