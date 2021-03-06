import React, { useState, useEffect } from 'react';
import { Grid, Typography, AppBar, Toolbar, Slide, Link, Button, ListItem, List, SwipeableDrawer } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuIcon from '@material-ui/icons/Menu';
import '../Animations.css';
import '../MediaQueries.css';

const styles = {
    primarySection: {
        height: 500,
        color: "#fff",
        display: "flex",
        alignItems: "center"
    },
    primaryText: {
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    link: {
        textDecoration: "none",
        color: "#f5f5f5",
        fontWeight: "bold",
        letterSpacing: 2,
    },
    list: {
        backgroundColor: "#0B141A",
    },
    listLink: {
        textAlign: "center",
        textDecoration: "none",
        color: "#f5f5f5",
        fontWeight: "bold",
        letterSpacing: 2,
        borderBottom: "1px solid black",
        width: "100%",
        padding: 20
    },
    burguer: {
        color: "#f5f5f5"
    },
    titleBurguerMenu: {
        color: "#f5f5f5",
        display: "flex",
        flexDirection: "column"
    },
    principalBurguerTitles: {
        letterSpacing: 2,
        fontWeight: "bold",
    }
}

export default function PrimarySection() {
    const trigger = useScrollTrigger();
    const [navBackground, setNavBackground] = useState('transparent');

    const [drawerState, setDrawerState] = useState(false);
    const anchor = 'top';

    const toggleDrawer = (anchor, open) => {
        console.log(anchor)
        setDrawerState({
            ...drawerState,
            [anchor]: open
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 310

            if (show) {
                setNavBackground('rgba(0, 0, 0, 0.5)');
            } else {
                setNavBackground('transparent');
            }
        }

        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const [listItemBackground, setListItemBackground] = useState({
        about: "",
        skills: "",
        contact: ""
    });

    const changeBackground = (sectionName, color) => {
        setListItemBackground({
            ...listItemBackground,
            [sectionName]: color
        })
    }

    return (
        <Grid item xs={12} style={styles.primarySection}>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <Slide in={!trigger}>
                <AppBar position="fixed" style={{ backgroundColor: navBackground }}>
                    <Toolbar className="toolbar">
                        <div className="burguer">
                            <Button onClick={() => toggleDrawer(anchor, true)} style={styles.burguer}>
                                <MenuIcon />
                            </Button>
                        </div>
                        <SwipeableDrawer anchor={anchor} open={drawerState[anchor]} onClose={() => toggleDrawer(anchor, false)}>
                            <List style={styles.list}>
                                <ListItem style={styles.titleBurguerMenu}>
                                    <Typography variant="h6" style={styles.principalBurguerTitles}>DIEGO OREFICI</Typography>
                                    <Typography variant="button" style={styles.principalBurguerTitles}>DEVELOPER</Typography>
                                    <hr style={{ width: "30%" }} />
                                </ListItem>
                                <ListItem onMouseOver={() => changeBackground("about", "#102641")} style={{ backgroundColor: listItemBackground.about }}
                                    onMouseLeave={() => changeBackground("about", "")}>
                                    <Link style={styles.listLink} onClick={() => toggleDrawer(anchor, false)} href="#about">
                                        <Typography>About</Typography>
                                    </Link>
                                </ListItem>
                                <ListItem onMouseOver={() => changeBackground("skills", "#102641")} style={{ backgroundColor: listItemBackground.skills }}
                                    onMouseLeave={() => changeBackground("skills", "")}>
                                    <Link style={styles.listLink} onClick={() => toggleDrawer(anchor, false)} href="#skills">
                                        <Typography>Skills</Typography>
                                    </Link>
                                </ListItem>
                                <ListItem onMouseOver={() => changeBackground("contact", "#102641")} style={{ backgroundColor: listItemBackground.contact }}
                                    onMouseLeave={() => changeBackground("contact", "")}>
                                    <Link style={styles.listLink} onClick={() => toggleDrawer(anchor, false)} href="#contact">
                                        <Typography>Contact</Typography>
                                    </Link>
                                </ListItem>
                            </List>
                        </SwipeableDrawer>
                        <Typography variant="button" className="nav">
                            <Link href="#about" style={styles.link} className="underline">ABOUT</Link>
                        </Typography>
                        <Typography variant="button" className="nav">
                            <Link href="#skills" style={styles.link} className="underline">SKILLS</Link>
                        </Typography>
                        <Typography variant="button" className="nav">
                            <Link href="#contact" style={styles.link} className="underline">CONTACT</Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Slide>
            <Grid container item style={styles.primaryText} className="titles">
                <Grid item xs={12} sm={5} lg={5} className="principalTitles">
                    <Typography variant="h4" style={{ paddingBottom: 5, fontWeight: "bold", letterSpacing: 2 }}>DIEGO OREFICI</Typography>
                    <Typography variant="button" style={{ fontWeight: "bold", letterSpacing: 2 }}>DEVELOPER</Typography>
                </Grid>
                <hr className="hr" />
                <Grid item xs={12} sm={5} lg={5} className="boxSecondaryTitles">
                    <div style={{ marginLeft: 20 }} className="secondaryTitles">
                        <Typography variant="button" style={{ fontWeight: "bold", letterSpacing: 6, fontSize: 20 }}
                        >
                            Hi there and welcome to my website
                        </Typography>
                        <Typography variant="subtitle1" style={{ letterSpacing: 1 }}
                        >
                            Here you can check some of my skills, habilities and experience. ¡Thanks for stopping by!
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}