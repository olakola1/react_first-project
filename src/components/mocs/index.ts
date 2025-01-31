interface IDesert {
    id: number;
    name: string;
    ingredients: string;
    time: string;
    image: string;
    category: string,
}

export const desert: IDesert [] = [
    {
        id: 1,
        name: 'Торт "Наполеон"',
        ingredients : '8 ингредиентов',
        time: '2 часа',
        category: 'Торты',
        image: 'https://mig.pics/uploads/posts/2020-01/1579919165_51-p-torti-napoleon-82.jpg',
    },
    {
        id: 2,
        name: 'Пирог с яблоками',
        ingredients: '7 ингредиентов',
        time: '1.5 часа',
        category: 'Пироги',
        image: 'https://pic.rutubelist.ru/video/4d/a7/4da735bc74adbc3fc99a60cd07a766bd.jpg',
    },
    {
        id: 3,
        name: 'Шоколадный торт',
        ingredients: '10 ингредиентов',
        time: '3 часа',
        category: 'Торты',
        image:'https://i.pinimg.com/736x/c0/0a/93/c00a9367f209fe4c8886a51562e0243b.jpg'
    },
    {
        id: 4,
        name: 'Чизкейк',
        ingredients: '6 ингредиентов',
        time: '4 часа',
        category: 'Пироги',
        image:'https://static.wixstatic.com/media/0d5fb3_ea6a570ae4c84960a16ef65bb59a4c32~mv2.jpg'
    },
    {
        id: 5,
        name: 'Кекс с орехами',
        ingredients: '5 ингредиентов',
        time: '1 час',
        category: 'Пироги',
        image: 'https://i.pinimg.com/736x/f2/84/d7/f284d7a586a7b22720462430c1ffe57d.jpg'
    },
    {
        id: 7,
        name: 'Брауни',
        ingredients: '7 ингредиентов',
        time: '1.5 часа',
        category: 'Пироженые',
        image:'https://tupperwarehome.ru/wp-content/uploads/2020/05/043065_666x468.jpg'
    },
]

