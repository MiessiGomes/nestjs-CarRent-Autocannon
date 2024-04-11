/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { CarCategory } from './carCategory.schema';
import { CreateCarCategoryDto } from './dto/carCategory.createDto';
import { UpdateCarCategoryDto } from './dto/carCategory.updateDto';
export declare class CarCategoriesService {
    private carModel;
    constructor(carModel: Model<CarCategory>);
    findAll(): Promise<CarCategory[]>;
    findById(id: string): Promise<CarCategory>;
    create(car: CreateCarCategoryDto): Promise<CarCategory>;
    update(car: UpdateCarCategoryDto): Promise<CarCategory>;
    deleteById(carId: string): Promise<CarCategory>;
}
