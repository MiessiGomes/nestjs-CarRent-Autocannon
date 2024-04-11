"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsModule = void 0;
const common_1 = require("@nestjs/common");
const car_controller_1 = require("./car.controller");
const mongoose_1 = require("@nestjs/mongoose");
const car_schema_1 = require("./car.schema");
const car_service_1 = require("./car.service");
let CarsModule = class CarsModule {
    constructor(carsService) {
        this.carsService = carsService;
    }
};
exports.CarsModule = CarsModule;
exports.CarsModule = CarsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: car_schema_1.Car.name, schema: car_schema_1.CarSchema }])],
        controllers: [car_controller_1.CarsController],
        providers: [car_service_1.CarsService]
    }),
    __metadata("design:paramtypes", [car_service_1.CarsService])
], CarsModule);
//# sourceMappingURL=car.module.js.map