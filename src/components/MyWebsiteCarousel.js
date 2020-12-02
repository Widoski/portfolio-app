import React, { useState } from 'react';
import { Button, Grid, ButtonGroup } from '@material-ui/core';
import '../Animations.css';
import header from '../img/header.png';
import footer from '../img/footer.png';
import form from '../img/form.png';
import skills from '../img/skills.png';
import about from '../img/about.png';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const styles = {
    zoom: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#102641"
    }
}

export default function SystemCarousel() {
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
        <Grid item xs={12}>
            <div item style={{ display: "flex", alignItems: "center", marginTop: 10, marginBottom: 10 }}>
                <Button
                    onClick={() => previousImage(image.id)}
                    style={{ height: 60, borderRadius: "60%" }}
                >
                    <ArrowLeftIcon />
                </Button>
                <div style={{ width: "100%", backgroundColor: "white" }} >
                    <img src={image.img} style={{ width: "100%" }} />
                </div>
                <Button
                    onClick={() => nextImage(image.id)}
                    style={{ height: 60, borderRadius: "60%" }}
                >
                    <ArrowRightIcon />
                </Button>
            </div>
            <ButtonGroup variant="contained" color="primary" fullWidth>
                <Button
                //onClick={() => window.open("https://github.com/Widoski/portfolio-app")}
                >
                    Github
                </Button>
                <Button
                //onClick={() => props.showProjects(false)}
                >
                    Go back
                </Button>
            </ButtonGroup>
        </Grid>
    )
}

