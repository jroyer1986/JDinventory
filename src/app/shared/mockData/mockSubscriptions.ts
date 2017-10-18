import { Subscription } from '../models/subscription';
import { MOCKORDERS } from './mockOrders';
import { MOCKCUSTOMERS } from './mockCustomers';
import { MOCKCOMICS } from './mockComics';
import { MOCKSERIES } from './mockSeries';

export const MOCKSUBSCRIPTIONS: Subscription[] = [
    {
        customer: MOCKCUSTOMERS[1],
        orders: [
            MOCKORDERS[1],
            MOCKORDERS[2]
        ],
        series: MOCKSERIES[1],
        dateStarted: new Date("October 21, 2011 10:10:10"),
        dateEnded: new Date("December 24, 2013 10:10:10"),
        status: "active"
    },
    {
        customer: MOCKCUSTOMERS[2],
        orders: [
            MOCKORDERS[4],
            MOCKORDERS[3]
        ],
        series: MOCKSERIES[1],
        dateStarted: new Date("October 26, 2011 10:10:10"),
        dateEnded: new Date("December 27, 2013 10:10:10"),
        status: "active"
    }
]