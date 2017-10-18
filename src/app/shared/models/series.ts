import { Comic } from './comic';

export class Series {
    public id: number;
    public title: string;
    public comics: Comic[];
    public status: string;
    public startDate: Date;
    public endDate: Date;

    constructor (){}
}