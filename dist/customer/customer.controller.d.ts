import { CustomersService } from './customer.service';
import { Customer } from './customer.schema';
import { CreateCustomerDto } from './dto/customer.createDto';
import { UpdateCustomerDto } from './dto/customer.updateDto';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    findAll(): Promise<Customer[]>;
    findById(params: any): Promise<Customer>;
    create(dto: CreateCustomerDto): Promise<Customer>;
    update(dto: UpdateCustomerDto): Promise<Customer>;
    deleteByid(params: any): Promise<Customer>;
}
