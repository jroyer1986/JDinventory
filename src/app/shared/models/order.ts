import { Customer } from './customer';
import { Comic } from './comic';

export class Order {
    public customer: Customer;
    public comic: Comic;
    public status: string;
    public dateRequested: Date;
    public dateOrdered: Date;

    constructor (){}
}