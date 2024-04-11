import { CarCategoriesService } from './carCategory.service';
import { CarCategory } from './carCategory.schema';
import { CreateCarCategoryDto } from './dto/carCategory.createDto';
import { UpdateCarCategoryDto } from './dto/carCategory.updateDto';
export declare class CarCategoriesController {
    private readonly carCategoriesService;
    constructor(carCategoriesService: CarCategoriesService);
    findAll(): Promise<CarCategory[]>;
    findById(params: any): Promise<CarCategory>;
    create(dto: CreateCarCategoryDto): Promise<CarCategory>;
    update(dto: UpdateCarCategoryDto): Promise<CarCategory>;
    deleteByid(params: any): Promise<CarCategory>;
}
