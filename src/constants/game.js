export const ItemTypes = {
    black: 'stone-black',
    green: 'stone-green',
    red: 'stone-red',
    yellow: 'stone-yellow',
};

export const AllItemTypes = [
    ItemTypes.black,
    ItemTypes.green,
    ItemTypes.red,
    ItemTypes.yellow,
];


export const defaultGameState = {
    board: {
        stones: new Array(40).fill(''),
    },
    home: {
        black: new Array(4).fill(''),
        yellow: new Array(4).fill(''),
        red: new Array(4).fill(''),
        green: new Array(4).fill(''),
    },
    resting: {
        black: ['black-0','black-1','black-2','black-3'],
        yellow: ['yellow-0','yellow-1','yellow-2','yellow-3'],
        red: ['red-0','red-1','red-2','red-3'],
        green: ['green-0','green-1','green-2','green-3'],
    },
};