var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var initialState = {
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
    ]
};
export var ItemsReducer = function (items, action) {
    if (items === void 0) { items = initialState; }
    switch (action.type) {
        case "GET_ITEMS": {
            return __assign({}, items);
        }
        default:
            return __assign({}, items);
    }
};
export var getItemsAC = function () {
    return {
        type: "GET_ITEMS"
    };
};
