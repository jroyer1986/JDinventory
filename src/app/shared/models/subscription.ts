import { Customer } from './customer';
import { Order } from './order';
import { Series } from './series';

export class Subscription {
    public customer: Customer;
    public orders: Order[];
    public series: Series;
    public dateStarted: Date;
    public dateEnded: Date;
    public status: string;

    constructor (){}
}