import {Container} from "../../../components/User";
import {useEffect} from "react";
//import {UserMaps} from "../../../components/User/maps";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserData} from "../../../store/user/thunk.ts";
import {getUser} from "../../../store/user/selector.ts";
import {Outlet} from "react-router";
import {Header} from "../../../components/Header";
import {CardContainer} from "../../../components/Card";

export const HomePage = () => {
    const dispatch = useDispatch();
    const { data } = useSelector(getUser);

    useEffect(() => {
        dispatch(fetchUserData() as any)
    }, [dispatch]);

    return (
        <Container>
            <Header />
            <CardContainer />
            <Outlet></Outlet>
        </Container>
    );
};

//  <UserMaps data={data}/>