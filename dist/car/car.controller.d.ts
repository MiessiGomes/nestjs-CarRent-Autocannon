import { CarsService } from './car.service';
import { Car } from './car.schema';
import { CreateCarDto } from './dto/car.createDto';
import { UpdateCarDto } from './dto/car.updateDto';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    findAll(): Promise<Car[]>;
    findById(params: any): Promise<Car>;
    create(dto: CreateCarDto): Promise<Car>;
    update(dto: UpdateCarDto): Promise<Car>;
    deleteByid(params: any): Promise<Car>;
}
