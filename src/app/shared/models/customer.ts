import { Order } from './order';

export class Customer {
    public id: number;
    public name: string;
    public phone: string;
    public email: string;
    public orders: Order[];
    public notes: any[];
    public status: string;

    constructor (){}
}