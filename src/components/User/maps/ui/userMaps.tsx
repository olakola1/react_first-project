import style from "./style.module.scss";
import {IframeParser} from "../../../IframeParser";

interface IData {
    id: number;
    username: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl: string;
    role: string;
    isActive: boolean;
    createdAt: Date
    lastLogin: Date
    preferences: IPreferences
    video: string;
}

interface IProps {
    data: IData[]
}

interface IPreferences {
    theme: string;
    notifications: boolean;
    language: string
}

export const UserMaps = ({ data }: IProps) => {
    return (
        <>
            {data && (
                data.map((item) => (
                    <div className={style.userWrapper} key={item.id}>
                        <img src={item.avatarUrl} alt=""/>
                        <p className={style.text}>{item.username}</p>
                        <p className={style.text}>{item.role}</p>
                        <p className={style.text}>{item.fullName}</p>
                        <div className={style.iframe}>
                            <IframeParser iframe={item.video}/>
                        </div>
                    </div>
                ))
            )}
        </>
    )
}

