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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarCategoriesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const carCategory_schema_1 = require("./carCategory.schema");
let CarCategoriesService = class CarCategoriesService {
    constructor(carModel) {
        this.carModel = carModel;
    }
    async findAll() {
        return await this.carModel.find().exec();
    }
    async findById(id) {
        return await this.carModel.findById(id);
    }
    async create(car) {
        return await this.carModel.create(car);
    }
    async update(car) {
        return await this.carModel.findByIdAndUpdate(car);
    }
    async deleteById(carId) {
        return await this.carModel.findByIdAndDelete(carId);
    }
};
exports.CarCategoriesService = CarCategoriesService;
exports.CarCategoriesService = CarCategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(carCategory_schema_1.CarCategory.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CarCategoriesService);
//# sourceMappingURL=carCategory.service.js.map