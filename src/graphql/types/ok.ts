import { extendType, intArg, nonNull, objectType } from "nexus";

const book = [
    {
        title: 'The Boy and The Heron',
        publishing_house: 'Ghibli Studio',
        pages: 197,
        author: 'Haruki Murakami',
        authorId: 7,
        release_year: 2023
    },
    {
        title: 'Adventure in Wonderland',
        publishing_house: 'Wonderland Publishing',
        pages: 250,
        author: 'Lewis Carroll',
        authorId: 2,
        release_year: 2022
    },
    {
        title: 'Mysteries of the Cosmos',
        publishing_house: 'Galaxy Publications',
        pages: 300,
        author: 'Carl Sagan',
        authorId: 3,
        release_year: 2021
    },
    {
        title: 'Lost in Time',
        publishing_house: 'Temporal Books',
        pages: 180,
        author: 'H.G. Wells',
        authorId: 4,
        release_year: 2020
    },
    {
        title: 'Whispers in the Wind',
        publishing_house: 'Breeze Books',
        pages: 220,
        author: 'Gabriel Garcia Marquez',
        authorId: 5,
        release_year: 2019
    },
    {
        title: 'Echoes of Eternity',
        publishing_house: 'Infinity Press',
        pages: 280,
        author: 'Isaac Asimov',
        authorId: 6,
        release_year: 2018
    },
    {
        title: 'Sailing Through Dreams',
        publishing_house: 'Dreamscape Publishers',
        pages: 210,
        author: 'J.K. Rowling',
        authorId: 7,
        release_year: 2017
    }
];

export const Book = objectType({
    name: 'Book',
    description: 'book type',
    definition(t) {
        t.nonNull.string('title');
        t.nonNull.string('publishing_house');
        t.nonNull.int('pages');
        t.nonNull.int('authorId');
        t.nonNull.field('author', {
            type: "Author",
            description: 'author field in book',
            resolve(root, args, ctx) {
                return ctx.authorLoader.load(root.authorId);
            }
        });
        t.nonNull.int('release_year');
    },
});

export const Author = objectType({
    name: 'Author',
    description: 'book author type',
    definition(t) {
        t.nonNull.string('name');
        t.nonNull.int('age');
        t.nonNull.string('birthdate');
        t.nonNull.int('id');
        t.nonNull.string('hometown');
    },
});

export const Ok = objectType({
    name: 'Ok',
    description: 'example of object type that returns ok',
    definition(t) {
        t.nonNull.boolean('value');
    },
});

export const OkQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.field('ok', {
            type: 'Ok',
            description: 'example of query that return type ok',
            resolve(_root, _args, _ctx) {
                return { value: true };
            }
        });
    },
});

export const BookQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('book', {
            type: 'Book',
            args: { books: nonNull(intArg()) },
            resolve(_root, args, _context) {
                return book.slice(0, args.books);
            }
        });
    },
});