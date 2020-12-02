import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, AppBar, Toolbar, Slide, Link } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import '../Animations.css';

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
        display: "flex",
        justifyContent: "flex-end",
    },
    appBarTransparent: {
        backgroundColor: 'transparent'
    },
    appBarSolid: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    anchor: {
        textDecoration: "none",
        color: "black",
        fontWeight: "bold",
        letterSpacing: 3,
        margin: 10,
    }
}

export default function PrimarySection() {
    const trigger = useScrollTrigger();
    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 310

            if (show) {
                setNavBackground('appBarSolid');
            } else {
                setNavBackground('appBarTransparent');
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Grid item xs={12} style={styles.primarySection}>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <Slide in={!trigger}>
                <AppBar position="fixed" style={styles[navRef.current]}>
                    <Toolbar style={styles.navigation}>
                        <Typography variant="button">
                            <Box fontWeight="bold" letterSpacing={2} pl={5} mt={1} ml={5}>
                                <Link href="#about" style={{ textDecoration: "none", color: "#fff" }} className="underline">ABOUT</Link>
                            </Box>
                        </Typography>
                        <Typography variant="button">
                            <Box fontWeight="bold" letterSpacing={2} mt={1} ml={5}>
                                <Link href="#skills" style={{ textDecoration: "none", color: "#fff" }} className="underline">SKILLS</Link>
                            </Box>
                        </Typography>
                        <Typography variant="button">
                            <Box fontWeight="bold" letterSpacing={2} pl={5} pr={5} mt={1} fontStyle="">
                                <Link href="#contact" style={{ textDecoration: "none", color: "#fff" }} className="underline">CONTACT</Link>
                            </Box>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Slide>
            <Grid container item style={styles.primaryText}>
                <Grid item xs={12} sm={5} lg={5}>
                    <Typography variant="h4" style={{ paddingBottom: 20, fontWeight: "bold", letterSpacing: 2 }}>
                        DIEGO OREFICI
							</Typography>
                    <Typography variant="button" style={{ fontWeight: "bold", letterSpacing: 2 }}>
                        DEVELOPER
							</Typography>
                </Grid>
                <Grid item xs={12} sm={5} lg={5} style={{ borderLeft: "2px solid white", marginTop: 40 }}>
                    <div style={{ marginLeft: 20 }}>
                        <Typography variant="button" style={{ fontWeight: "bold", letterSpacing: 6, fontSize: 20 }}>Hi there and welcome to my website</Typography>
                        <Typography variant="subtitle1" style={{ letterSpacing: 1 }}>My name is Diego Orefici and I'm a Frontend Developer. Here you can check some of my skills, habilities and experience. ¡Thanks for stopping by! </Typography>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}