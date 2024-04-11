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
exports.CarCategoriesController = void 0;
const common_1 = require("@nestjs/common");
const carCategory_service_1 = require("./carCategory.service");
const carCategory_createDto_1 = require("./dto/carCategory.createDto");
const carCategory_updateDto_1 = require("./dto/carCategory.updateDto");
const swagger_1 = require("@nestjs/swagger");
let CarCategoriesController = class CarCategoriesController {
    constructor(carCategoriesService) {
        this.carCategoriesService = carCategoriesService;
    }
    async findAll() {
        return await this.carCategoriesService.findAll();
    }
    async findById(params) {
        return await this.carCategoriesService.findById(params.id);
    }
    async create(dto) {
        return await this.carCategoriesService.create(dto);
    }
    async update(dto) {
        return await this.carCategoriesService.update(dto);
    }
    async deleteByid(params) {
        return await this.carCategoriesService.deleteById(params.id);
    }
};
exports.CarCategoriesController = CarCategoriesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarCategoriesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarCategoriesController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [carCategory_createDto_1.CreateCarCategoryDto]),
    __metadata("design:returntype", Promise)
], CarCategoriesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [carCategory_updateDto_1.UpdateCarCategoryDto]),
    __metadata("design:returntype", Promise)
], CarCategoriesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarCategoriesController.prototype, "deleteByid", null);
exports.CarCategoriesController = CarCategoriesController = __decorate([
    (0, swagger_1.ApiTags)('Car categories'),
    (0, common_1.Controller)('carCategories'),
    __metadata("design:paramtypes", [carCategory_service_1.CarCategoriesService])
], CarCategoriesController);
//# sourceMappingURL=carCategory.controller.js.map