import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

import { useMediaQuery } from 'react-responsive'
import { NavLink } from 'react-router-dom';
import { navData } from '../utils/commonComponents';

const drawerWidth:number = 240;

const useStyles = makeStyles((theme:any) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


function NavBar() {
    const [open, setIsOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const classes = useStyles();
    
    const handleClose = () => {
        setIsOpen(false);
    };

    const handleDrawerOpen = () => {
        setDrawerOpen(!drawerOpen);
    };

    const isTabletOrMobile:any = useMediaQuery({ query: '(max-width: 1224px)' });
    if (isTabletOrMobile) {
        return(
            <></>
        )
    } else {
        return(
            <header className={"bg-purple-800 rounded-t-full"}>
                <div className="container mx-auto flex justify-between">
                    <nav className="inline-flex self-center flex-1 ml-5 flex">
                        {navData?.map((item, index) => {
                            return (
                                <NavLink
                                    onClick={() => {
                                        setIsOpen(true);
                                    }}
                                    className={item?.style}
                                    to={item.to}
                                >
                                    {item?.name}
                                </NavLink>
                            )
                        })}
                    </nav>
                </div>
            </header>
        )
    }
}

export default NavBar;
