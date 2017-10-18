import { Order } from '../models/order';
import { MOCKCOMICS } from './mockComics';
import { MOCKCUSTOMERS } from './mockCustomers';

export const MOCKORDERS: Order[] = [
    {
        customer: MOCKCUSTOMERS[1],
        comic: MOCKCOMICS[1],
        status: "active",
        dateRequested: new Date("February 4, 2016 10:13:00"),
        dateOrdered: new Date("February 7, 2016 10:13:00")
    },
    {
        customer: MOCKCUSTOMERS[1],
        comic: MOCKCOMICS[3],
        status: "active",
        dateRequested: new Date("January 11, 2016 10:13:00"),
        dateOrdered: new Date("January 17, 2016 10:13:00")
    },
    {
        customer: MOCKCUSTOMERS[2],
        comic: MOCKCOMICS[3],
        status: "active",
        dateRequested: new Date("January 11, 2016 10:13:00"),
        dateOrdered: new Date("January 17, 2016 10:13:00")
    },
    {
        customer: MOCKCUSTOMERS[2],
        comic: MOCKCOMICS[3],
        status: "active",
        dateRequested: new Date("January 11, 2016 10:13:00"),
        dateOrdered: new Date("January 17, 2016 10:13:00")
    }
];