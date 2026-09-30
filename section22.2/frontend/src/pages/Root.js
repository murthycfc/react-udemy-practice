import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from '../components/MainNavigation.js'
export default function RootLayout(){
    const navigation = useNavigation();
 
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    )
}