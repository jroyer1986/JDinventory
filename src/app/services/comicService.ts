import { Injectable } from '@angular/core';
import { Comic } from '../shared/models/comic';
import { Customer } from '../shared/models/customer';
import { Order } from '../shared/models/order';
import { Series } from '../shared/models/series';

import { MOCKCOMICS } from '../shared/mockData/mockComics';
import { MOCKCUSTOMERS } from '../shared/mockData/mockCustomers';
import { MOCKORDERS } from '../shared/mockData/mockOrders';
import { MOCKSERIES } from '../shared/mockData/mockSeries';

@Injectable()
export class ComicService {
    public useMockData: boolean = true;

    getComics(): Promise<Comic[]> {
        if(this.useMockData)
            return Promise.resolve(MOCKCOMICS);
    }

    getComic(diamondCode: string): Promise<Comic> {
        if(this.useMockData)
            return Promise.resolve(MOCKCOMICS[1]);
    }

    getCustomers(): Promise<Customer[]> {
        if(this.useMockData)
            return Promise.resolve(MOCKCUSTOMERS);
    }

    getCustomer(customerId: number): Promise<Customer> {
        if(this.useMockData)
            return Promise.resolve(MOCKCUSTOMERS[1]);
    }

    getOrders(): Promise<Order[]> {
        if(this.useMockData)
            return Promise.resolve(MOCKORDERS);
    }
    
    getOrder(orderId: number): Promise<Order> {
        if(this.useMockData)
            return Promise.resolve(MOCKORDERS[1]);
    }

    getSeries(seriesId: number): Promise<Series> {
        if(this.useMockData)
            return Promise.resolve(MOCKSERIES[1]);
    }
}