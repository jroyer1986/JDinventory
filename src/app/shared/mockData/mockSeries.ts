import { Series } from '../models/series';
import { MOCKCOMICS } from './mockComics';

export const MOCKSERIES: Series[] = [
    {
        id: 1,
        title: "Death to the Bat",
        comics: [
            MOCKCOMICS[0],
            MOCKCOMICS[1],
            MOCKCOMICS[2],
            MOCKCOMICS[4]
        ],
        status: "active",
        startDate: new Date("January 1, 1950"),
        endDate: new Date("December 31, 1952")
    },
    {
        id: 2,
        title: "Superman Sucks",
        comics: [
            MOCKCOMICS[5],
            MOCKCOMICS[6]
        ],
        status: "active",
        startDate: new Date("January 1, 1989"),
        endDate: new Date("December 31, 1989")
    }
]