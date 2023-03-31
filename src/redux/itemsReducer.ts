let initialState = {
    items: [
        {
            id: 1,
            title: 'styls',
            img: 'styl1.jpg',
            desc: 'qwe dsfsdgsd qwrqwr  sd!',
            category: 'styl',
            price: '149.99'
        },
        {
            id: 2,
            title: 'divan',
            img: 'divan1.jpg',
            desc: 'qwe dsfsdgsd qwrqwr  sd!',
            category: 'divan',
            price: '1029.99'
        },
        {
            id: 3,
            title: 'styl',
            img: 'styl2.jpg',
            desc: 'qwe dsfsdgsd qwrqwr  sd!',
            category: ' sryl',
            price: '19.99'
        },
        {
            id: 4,
            title: 'divan',
            img: 'divan2.jpg',
            desc: 'qwe dsfsdgsd qwrqwr  sd!',
            category: ' sryl',
            price: '49.99'
        },
        {
            id: 5,
            title: 'styl',
            img: 'styl3.jpg',
            desc: 'qwe dsfsdgsd qwrqwr  sd!',
            category: ' sryl',
            price: '9.99'
        },
        {
            id: 6,
            title: 'divan',
            img: 'divan3.jpg',
            desc: 'qwe dsfsdgsd qwrqwr  sd!',
            category: ' sryl',
            price: '749.99'
        },
        {
            id: 7,
            title: 'divan',
            img: 'divan4.jpg',
            desc: 'qwe dsfsdgsd qwrqwr  sd!',
            category: ' sryl',
            price: '949.99'
        },
    ],
    
}

export const ItemsReducer = (items = initialState, action) => {
    switch (action.type) {
        case "GET_ITEMS": {
            return { ...items }
        }
        default:
            return { ...items }
    }
}

export const getItemsAC = () => {
    return {
        type: "GET_ITEMS",
    } as const;
}