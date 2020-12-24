export const initialState = {
  products: {
    data: [
      {
        _id: '1',
        name: 'Schrimp Soup',
        category: 'chinese',
        price: 20,
        isDiscount: true,
        discount: 15,
        photos: ['https://images.pexels.com/photos/3876122/pexels-photo-3876122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'],
        description:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        height: 12,
      },
      {
        _id: '2',
        name: 'Dim Sum',
        category: 'chinese',
        price: 20,
        isDiscount: true,
        discount: 15,
        photos: ['https://images.pexels.com/photos/5409009/pexels-photo-5409009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'],
        description:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        height: 12,
      },
      {
        _id: '3',
        name: 'Sushi',
        category: 'japanese',
        price: 20,
        isDiscount: false,
        //discount: 15,
        photos: ['https://images.pexels.com/photos/1854665/pexels-photo-1854665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'],
        description:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        height: 12,
      },
      {
        _id: '4',
        name: 'Ramen',
        category: 'japanese',
        price: 20,
        isDiscount: true,
        discount: 15,
        photos: ['https://images.pexels.com/photos/4224206/pexels-photo-4224206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'],
        description:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        height: 12,
      },
      {
        _id: '5',
        name: 'Roti Jala',
        category: 'malaysian',
        price: 20,
        isDiscount: true,
        discount: 15,
        photos: ['https://images.pexels.com/photos/4552045/pexels-photo-4552045.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'],
        description:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        height: 12,
      },
      {
        _id: '6',
        name: 'Nasi Lemak',
        category: 'malaysian',
        price: 20,
        isDiscount: false,
        //discount: 15,
        photos: ['https://images.pexels.com/photos/4013108/pexels-photo-4013108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'],
        description:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        height: 12,
      },
    ],

    loading: {
      active: false,
      error: false,
    },
  },
  cart: {
    products: [],
  },

  categories: ['all', 'asian', 'italian', 'polish', 'usa'],

};