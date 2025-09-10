import {type FC, useEffect, useState} from 'react';
import type {NavItemType} from "../../utils/app-types.ts";
import {AppBar, Avatar, Box, Tab, Tabs, Toolbar} from "@mui/material";
import {Link, Outlet} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks.ts";
import {getAuth} from "firebase/auth";



type Props = {
    items: NavItemType[]

}



const NavigationDesktop: FC<Props> = ({items}) => {
    const [displayName, setDisplayName] = useState<string | null>(null);
    const { authUser } = useAppSelector(state => state.auth);
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log(event)
        setValue(newValue);
    };
    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            setDisplayName(user.displayName ?? "Guest");
        } else {
            setDisplayName("Guest");
        }
    }, []);



    return (
        <Box>
            <AppBar sx={{backgroundColor: "lightgrey"}}>
                <Toolbar sx={{justifyContent: "space-between"}}>
                    <Tabs value={value > items.length ? 0 : value} onChange={handleChange}>
                        {items.map(item =>
                            <Tab key={item.route} component={Link} to={item.route} label={item.itemName}/>
                        )}
                    </Tabs>
                    <Box sx={{display: "flex", alignItems: "center", gap: 1}}>
                        <Avatar>{authUser.substring(0, 1)}</Avatar>
                        <span>{displayName ?? "Guest"}</span>
                    </Box>

                </Toolbar>
            </AppBar>
            <Outlet/>
        </Box>

    );
};

export default NavigationDesktop;