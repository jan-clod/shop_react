 let initialState = [
  {
    id: 2,
    title: "a",
    img: "styl1a.jpg",
    desc: "qwe  qwrqwr  sd!",
    category: "styl",
    price: "009.99",
  },
  /*{
    id: 2,
    title: "styl",
    img: "styl1.jpg",
    desc: "qwe dsfsdgsd qwrqwr  sd!",
    category: "styl",
    price: "49.99",
  }, */
];
export type ActionTypes =
  | ReturnType<typeof getOredersAC>
  | ReturnType<typeof setOrdersAC>
  | ReturnType<typeof cleanOrdersAC>;

export const OrdrersReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case "GET_ORDERS":
      return [...state];

    case "SET_ORDERS":
      alert(action.items);
      state.push(action.items);
      return [action.items];

    case "CLEAN_TRASH":
      state = [];
      return [];

    default:
      return [...state];
  }
};

export const getOredersAC = () => {
  return {
    type: "GET_ORDERS",
  } as const;
};
export const setOrdersAC = (items: {
  id: number;
  title: string;
  img: string;
  desc: string;
  category: string;
  price: string;
}) => {
  return {
    type: "SET_ORDERS",
    items,
  } as const;
};
export const cleanOrdersAC = () => {
  alert("assad");
  return {
    type: "CLEAN_TRASH",
  } as const;
}; 
