import React, { useContext, useState } from 'react';
import { Button, ButtonGroup, Grid, Typography } from '@material-ui/core';
import '../Animations.css';
import header from '../img/header.png';
import footer from '../img/footer.png';
import form from '../img/form.png';
import skills from '../img/skills.png';
import about from '../img/about.png';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AppContext from '../AppContext';

export default function SystemCarousel(props) {
    const context = useContext(AppContext);

    const images = [
        {
            image: header, id: 1
        },
        {
            image: about, id: 2
        },
        {
            image: skills, id: 3
        },
        {
            image: form, id: 4
        },
        {
            image: footer, id: 5
        },
    ]

    const [image, setImage] = useState({
        img: header,
        id: 1
    })

    const nextImage = (id) => {

        const newId = id + 1;

        if (newId === images.length + 1) {
            setImage({
                ...image,
                img: header,
                id: 1
            })
        } else {
            images.forEach(i => {
                if (newId === i.id) {
                    setImage({
                        ...image,
                        img: i.image,
                        id: i.id
                    })
                }
            })

        }
    }

    const previousImage = (id) => {

        const newId = id - 1;

        if (newId < 1) {
            setImage({
                ...image,
                img: footer,
                id: 5
            })
        } else {
            images.forEach(i => {
                if (newId === i.id) {
                    setImage({
                        ...image,
                        img: i.image,
                        id: i.id
                    })
                }
            })
        }
    }

    return (
        <Grid item xs={12} className="fade">
            <Typography variant="subtitle1" style={{ margin: 20, textAlign: "center" }}>
                This is my website, wich you're currently visiting. Technologies that I used: React (hooks, context), Material UI (grid and components), CSS and Flexbox.
            </Typography>
            <div item style={{ display: "flex", alignItems: "center", marginTop: 10, marginBottom: 10 }}>
                <Button
                    onClick={() => previousImage(image.id)}
                    style={{ height: 60, borderRadius: "60%" }}
                >
                    <ArrowLeftIcon />
                </Button>
                <div style={{ width: "100%", backgroundColor: "white" }} >
                    <img src={image.img} style={{ width: "100%" }} alt="" />
                </div>
                <Button
                    onClick={() => nextImage(image.id)}
                    style={{ height: 60, borderRadius: "60%" }}
                >
                    <ArrowRightIcon />
                </Button>
            </div>
            <ButtonGroup style={{ display: "flex", justifyContent: "center" }}>
                <Button
                    onClick={() => props.showProjects(false)}
                >
                    <ArrowBackIcon color="primary" />
                </Button>
                <Button
                    onClick={() => window.open("https://github.com/Widoski/portfolio-app")}
                >
                    <GitHubIcon color="primary" />
                </Button>
                <Button
                    onClick={() => context.handleOpenModal(true, image.img)}
                >
                    <ZoomInIcon color="primary" />
                </Button>
            </ButtonGroup>
        </Grid>
    )
}

