import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, AppBar, Toolbar, Slide, Link, Button, Drawer, ListItem, List } from '@material-ui/core';
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
    navigation: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
    },
    link: {
        textDecoration: "none",
        color: "#f5f5f5",
        fontWeight: "bold",
        letterSpacing: 2
    },
    list: {
        width: 250,
        height: 700,
        backgroundColor: "#0B141A"
    },
    listLink: {
        textDecoration: "none",
        color: "#f5f5f5",
        fontWeight: "bold",
        letterSpacing: 2,
        borderBottom: "1px solid #f5f5f5",
        width: "100%",
        margin: 15
    },
}

export default function PrimarySection() {
    const trigger = useScrollTrigger();
    const [navBackground, setNavBackground] = useState('transparent');

    const [drawerState, setDrawerState] = useState(false);
    const anchor = 'left';

    const toggleDrawer = (anchor, open) => {
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
                    <Toolbar>
                        <div style={styles.navigation} className="navBar">
                            <Typography variant="button">
                                <Box pl={5} mt={1} ml={5}>
                                    <Link href="#about" style={styles.link} className="underline">ABOUT</Link>
                                </Box>
                            </Typography>
                            <Typography variant="button">
                                <Box mt={1} ml={5}>
                                    <Link href="#skills" style={styles.link} className="underline">SKILLS</Link>
                                </Box>
                            </Typography>
                            <Typography variant="button">
                                <Box pl={5} pr={5} mt={1}>
                                    <Link href="#contact" style={styles.link} className="underline">CONTACT</Link>
                                </Box>
                            </Typography>
                        </div>
                        <div className="burguer" style={{ display: "none" }}>
                            <Button onClick={() => toggleDrawer(anchor, true)}>
                                <MenuIcon style={{ color: "f5f5f5" }} />
                            </Button>
                            <Drawer open={drawerState[anchor]} onClose={() => toggleDrawer(anchor, false)}>
                                <List style={styles.list}>
                                    <ListItem onMouseOver={() => changeBackground("about", "#102641")} style={{ backgroundColor: listItemBackground.about }}
                                        onMouseLeave={() => changeBackground("about", "")}>
                                        <Link style={styles.listLink} onClick={() => toggleDrawer(anchor, false)} href="#about">
                                            <Typography>
                                                About
                                            </Typography>
                                        </Link>
                                    </ListItem>
                                    <ListItem onMouseOver={() => changeBackground("skills", "#102641")} style={{ backgroundColor: listItemBackground.skills }}
                                        onMouseLeave={() => changeBackground("skills", "")}>
                                        <Link style={styles.listLink} onClick={() => toggleDrawer(anchor, false)} href="#skills">
                                            <Typography>
                                                Skills
                                            </Typography>
                                        </Link>
                                    </ListItem>
                                    <ListItem onMouseOver={() => changeBackground("contact", "#102641")} style={{ backgroundColor: listItemBackground.contact }}
                                        onMouseLeave={() => changeBackground("contact", "")}>
                                        <Link style={styles.listLink} onClick={() => toggleDrawer(anchor, false)} href="#contact">
                                            <Typography>
                                                Contact
                                            </Typography>
                                        </Link>
                                    </ListItem>
                                </List>
                            </Drawer>
                        </div>
                    </Toolbar>
                </AppBar>
            </Slide>
            <Grid container item style={styles.primaryText} className="titles">
                <Grid item xs={12} sm={5} lg={5}>
                    <Typography variant="h4" style={{ paddingBottom: 5, fontWeight: "bold", letterSpacing: 2 }}
                    >
                        DIEGO OREFICI
					</Typography>
                    <Typography variant="button" style={{ fontWeight: "bold", letterSpacing: 2 }}
                    >
                        DEVELOPER
					</Typography>
                </Grid>
                <Grid item xs={12} sm={5} lg={5} style={{ borderLeft: "2px solid white", marginTop: 40 }}>
                    <div style={{ marginLeft: 20 }}>
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