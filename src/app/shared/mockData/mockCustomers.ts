import { Customer } from '../models/customer';
import { MOCKORDERS } from './mockOrders';

export const MOCKCUSTOMERS: Customer[] = [
    {
        id: 1,
        name: "Benaldo Hernandez",
        phone: "2158675309",
        email: "bensemail@gmail.com",
        orders: [
            MOCKORDERS[1],
            MOCKORDERS[2]
        ],
        notes: [
            "These are all my notes"
        ],
        status: "active"
    },
    {
        id: 2,
        name: "Justin Royer",
        phone: "2044800821",
        email: "jroyer@gmail.com",
        orders: [
            MOCKORDERS[3],
            MOCKORDERS[4]
        ],
        notes: [
            "I don't often take notes!"
        ],
        status: "active"
    }
];