export interface IDish {
    id: number;
    name: string;
    ingredients: string;
    time: string;
    image: string;
    category: string,
}

export interface IDesert {
    id: number;
    name: string;
    ingredients: string;
    time: string;
    image: string;
    category: string,
}

export interface ISoup {
    id: number;
    name: string;
    ingredients: string;
    time: string;
    image: string;
    category: string,
}

export interface IHotter {
    id: number;
    name: string;
    ingredients: string;
    time: string;
    image: string;
    category: string,
}

export const desert: IDesert[] = [
    {
        id: 1,
        name: 'Торт "Наполеон"',
        ingredients: 'мука, сахар, яйца, молоко, сливочное масло, ваниль, сливки, орехи',
        time: '2 часа',
        category: 'Торты',
        image: 'https://img.freepik.com/free-photo/vertical-shot-piece-delicious-layered-cake-with-cream-crumb-topping-table_181624-22740.jpg?t=st=1738742285~exp=1738745885~hmac=9054932bc8653cca83294b368f7f92f4ddace0884d401c52a4771c00eca4d4f9&w=360',
    },
    {
        id: 2,
        name: 'Пирог с яблоками',
        ingredients: 'яблоки, сахар, мука, яйца, корица, масло, высшее качество',
        time: '1.5 часа',
        category: 'Пироги',
        image: 'https://img.freepik.com/free-photo/high-angle-pie-apples-arrangement_23-2149707951.jpg?t=st=1738743384~exp=1738746984~hmac=df99d63bbbcfd64f6b4908b6101c1f4503dfb286778948dcbd0cae1c3dec797e&w=360',
    },
    {
        id: 3,
        name: 'Шоколадный торт',
        ingredients: 'мука, сахар, яйца, какао, сливочное масло, ваниль, разрыхлитель, молоко, соль, шоколад',
        time: '3 часа',
        category: 'Торты',
        image: 'https://img.freepik.com/free-photo/chocolate-cake_1203-8943.jpg?uid=R175488046&ga=GA1.1.2010748536.1727805397&semt=ais_hybrid_sidr'
    },
    {
        id: 4,
        name: 'Чизкейк',
        ingredients: 'сыр крема, сахар, яйца, печенье, сливочное масло, ваниль',
        time: '4 часа',
        category: 'Пироги',
        image: 'https://img.freepik.com/free-photo/dessert-table_181624-10310.jpg?t=st=1738743438~exp=1738747038~hmac=69b1f9bdbb69b1e438bc9a70454b05270e7428635b2bff3f7645cde6f373e455&w=360'
    },
    {
        id: 5,
        name: 'Кекс с орехами',
        ingredients: 'мука, сахар, яйца, орехи, масло, разрыхлитель',
        time: '1 час',
        category: 'Пироги',
        image: 'https://img.freepik.com/free-photo/sliced-banana-bread-with-walnuts-brown-plate_9975-124422.jpg?uid=R175488046&ga=GA1.1.2010748536.1727805397&semt=ais_hybrid_sidr'
    },
    {
        id: 7,
        name: 'Брауни',
        ingredients: 'шоколад, сахар, яйца, мука, масло, орехи, ваниль',
        time: '1.5 часа',
        category: 'Пироженые',
        image: 'https://img.freepik.com/free-photo/front-view-delicious-chocolate-cake-with-almonds_23-2148549975.jpg?uid=R175488046&ga=GA1.1.2010748536.1727805397&semt=ais_hybrid_sidr'
    },
];

export const soups: ISoup[] = [
    {
        id: 1,
        name: 'Суп-пюре из брокколи',
        ingredients: 'Брокколи, картофель, лук, чеснок, овощной бульон, соль, перец',
        time: '30 минут',
        category: 'Супы',
        image: 'https://img.freepik.com/free-photo/delicious-green-homemade-broccoli-cream-soup_114579-43275.jpg?uid=R175488046&ga=GA1.1.2010748536.1727805397&semt=ais_hybrid_sidr',
    },
    {
        id: 2,
        name: 'Томатный суп',
        ingredients: 'Помидоры, лук, морковь, чеснок, оливковое масло, базилик, соль, перец',
        time: '40 минут',
        category: 'Супы',
        image: 'https://www.iamcook.ru/images/dishes/50214/148555/z970-1.jpg',
    },
    {
        id: 3,
        name: 'Суп с фрикадельками',
        ingredients: 'Мясной фарш, рис, лук, морковь, картофель, бульон, зелень, соль, перец, специи',
        time: '1 час',
        category: 'Супы',
        image: 'https://img.freepik.com/free-photo/delicious-food-prepared-jewish-hanukkah-celebration_23-2151112412.jpg?uid=R175488046&ga=GA1.1.2010748536.1727805397&semt=ais_hybrid_sidr',
    },
    {
        id: 4,
        name: 'Грибной суп',
        ingredients: 'Грибы, картофель, лук, морковь, сметана, зелень, соль, перец, бульон',
        time: '50 минут',
        category: 'Супы',
        image: 'https://img.freepik.com/free-photo/high-angle-delicious-food-table-arrangement_52683-92761.jpg?uid=R175488046&ga=GA1.1.2010748536.1727805397&semt=ais_hybrid_sidr',
    },
    {
        id: 5,
        name: 'Суп-лапша с курицей',
        ingredients: 'Курица, лапша, морковь, лук, зелень, соль, перец, бульон',
        time: '1 час',
        category: 'Супы',
        image: 'https://img.freepik.com/free-photo/flat-lay-noodle-soup-winter-meals_23-2148717414.jpg?uid=R175488046&ga=GA1.1.2010748536.1727805397&semt=ais_hybrid_sidr',
    },
    {
        id: 6,
        name: 'Свекольник',
        ingredients: 'Свекла, картофель, капуста, лук, укроп, сметана, соль',
        time: '1 час',
        category: 'Супы',
        image: 'https://img.freepik.com/free-photo/top-view-borsch-traditional-ukrainian-soup-served-with-greens-bread_141793-2874.jpg?uid=R175488046&ga=GA1.1.2010748536.1727805397&semt=ais_hybrid_sidr',
    },
    {
        id: 7,
        name: 'Куриный бульон',
        ingredients: 'Курица, морковь, лук, специи',
        time: '2-3 часа',
        category: 'Супы',
        image: 'https://img.freepik.com/free-photo/homemade-chicken-vegetable-soup-overhead-view-book-table_114579-38.jpg?uid=R175488046&ga=GA1.1.2010748536.1727805397&semt=ais_hybrid_sidr',
    },
];


export const hotter : IHotter[] = [
    {
        id: 1,
        name: 'Курица с картошкой',
        ingredients: 'Курица, картофель, соль, перец, специи, растительное масло',
        time: '1 час',
        category: 'Вторые блюда',
        image: 'https://img.freepik.com/free-photo/delicious-roasted-young-potatoes-with-dill-chicken_114579-9019.jpg?uid=R175488046&ga=GA1.1.2010748536.1727805397&semt=ais_hybrid',
    },
    {
        id: 2,
        name: 'Говядина с овощами',
        ingredients: 'Говядина, брокколи, морковь, болгарский перец, лук, чеснок, соевый соус, растительное масло',
        time: '1.5 часа',
        category: 'Вторые блюда',
        image: 'https://img.freepik.com/free-photo/front-view-fried-meat-with-vegetables-inside-plate-brown-wooden-desk-food-meal-meat_140725-26151.jpg?uid=R175488046&ga=GA1.1.2010748536.1727805397&semt=ais_hybrid',
    },
    {
        id: 3,
        name: 'Рыба запеченная с лимоном',
        ingredients: 'Рыба (например, треска), лимон, оливковое масло, специи, соль',
        time: '40 минут',
        category: 'Вторые блюда',
        image: 'https://img.freepik.com/free-photo/grilled-salmon-with-lemons-black-pot-white-surface_181624-6206.jpg?uid=R175488046&ga=GA1.1.2010748536.1727805397&semt=ais_hybrid',
    },
    {
        id: 4,
        name: 'Макароны с мясом',
        ingredients: 'Макароны, фарш (свинина/говядина), помидоры, лук, чеснок, специи, растительное масло',
        time: '30 минут',
        category: 'Вторые блюда',
        image: 'https://img.freepik.com/premium-photo/homemade-whole-grain-pasta-penne_80013-4585.jpg?uid=R175488046&ga=GA1.1.2010748536.1727805397&semt=ais_hybrid',
    },
    {
        id: 5,
        name: 'Овощное рагу',
        ingredients: 'Картофель, морковь, кабачок, перец, лук, помидоры, зелень, специи, растительное масло',
        time: '1 час',
        category: 'Вторые блюда',
        image: 'https://img.freepik.com/free-photo/hot-spicy-stew-eggplant-sweet-pepper-olives-capers-with-basil-leaves_2829-6420.jpg?uid=R175488046&ga=GA1.1.2010748536.1727805397&semt=ais_hybrid',
    },
    {
        id: 6,
        name: 'Фаршированная курица',
        ingredients: 'Куриные грудки, рис, морковь, лук, специи, соль, перец, растительное масло, зелень, чеснок',
        time: '2 часа',
        category: 'Вторые блюда',
        image: 'https://img.freepik.com/free-photo/chicken-roll-with-prunes-dried-apricots_2829-9166.jpg?uid=R175488046&ga=GA1.1.2010748536.1727805397&semt=ais_hybrid',
    },
    {
        id: 7,
        name: 'Запеканка из картофеля',
        ingredients: 'Картофель, молоко, яйца, сыр, специи',
        time: '1 час',
        category: 'Вторые блюда',
        image: 'https://img.freepik.com/free-photo/flat-lay-delicious-spanish-tortilla-still-life_23-2150246035.jpg?uid=R175488046&ga=GA1.1.2010748536.1727805397&semt=ais_hybrid',
    },
];

export const allDishes: IDish[] = [...desert, ...soups, ...hotter];
