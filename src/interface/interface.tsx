export interface Recipe {
    name: string;
    ingredients: string;
    time: string;
    photo: string;

}

export interface ApiResponse {
    data: Recipe[];
    status: string
}

export interface ModalIProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (recipe: Recipe) => void;
}


export interface IDesert {
    id: number;
    name: string;
    ingredients: string;
    time: string;
    image: string;
    category: string,
}

export interface IData {
    id: number;
    name: string;
    ingredients: string;
    time: string;
    image: string;
}

export interface IProps {
    data: IData[];
}
