import DataLoader from "dataloader";
import { NexusGenObjects } from "../../nexus-typegen";

const author = [
    {
        id: 1,
        name: 'Haruki Murakami',
        age: 72,
        birthdate: new Date(1949, 0, 12).toISOString(),
        hometown: 'Kyoto'
    },
    {
        id: 2,
        name: 'Lewis Carroll',
        age: 65,
        birthdate: new Date(1832, 0, 27).toISOString(),
        hometown: 'Daresbury'
    },
    {
        id: 3,
        name: 'Carl Sagan',
        age: 62,
        birthdate: new Date(1934, 10, 9).toISOString(),
        hometown: 'Brooklyn'
    },
    {
        id: 4,
        name: 'H.G. Wells',
        age: 79,
        birthdate: new Date(1866, 8, 21).toISOString(),
        hometown: 'Bromley'
    },
    {
        id: 5,
        name: 'Gabriel Garcia Marquez',
        age: 87,
        birthdate: new Date(1927, 2, 6).toISOString(),
        hometown: 'Aracataca'
    },
    {
        id: 6,
        name: 'Isaac Asimov',
        age: 72,
        birthdate: new Date(1920, 0, 2).toISOString(),
        hometown: 'Petrovichi'
    },
    {
        id: 7,
        name: 'J.K. Rowling',
        age: 57,
        birthdate: new Date(1965, 6, 31).toISOString(),
        hometown: 'Yate'
    }
];


type Loader = Promise<Array<NexusGenObjects['Author']>>;
export const authorLoader = new DataLoader(async (keys: readonly number[]): Loader => {
    const authors = author;
    console.log('keys are: ', keys);

    const authorMap: any = {};
    authors.forEach(author => {
        authorMap[author.id] = author;
    });

    return keys.map((key: number) => authorMap[key]);
});