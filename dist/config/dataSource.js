"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Airport_1 = require("src/models/Airport");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "flightsAndSearch",
    synchronize: true,
    logging: true,
    entities: [Airport_1.Airport],
});
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield AppDataSource.initialize();
        console.log("Database connected successfully.");
    }
    catch (error) {
        console.error("Error during database connection:", error);
        process.exit(1);
    }
});
exports.connectToDatabase = connectToDatabase;
exports.default = AppDataSource;
//# sourceMappingURL=dataSource.js.map