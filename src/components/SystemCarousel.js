import React, { useState } from 'react';
import { Button, Grid, ButtonGroup, Typography } from '@material-ui/core';
import '../Animations.css';
import dash from '../img/dash.png';
import events from '../img/events.png';
import registerIncome from '../img/registerIncome.png';
import registers from '../img/registers.png';
import income from '../img/income.png';
import outcome from '../img/outcome.png';
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
            image: dash, id: 1
        },
        {
            image: events, id: 2
        },
        {
            image: income, id: 3
        },
        {
            image: outcome, id: 4
        },
        {
            image: registerIncome, id: 5
        },
        {
            image: registers, id: 6
        }
    ]

    const [image, setImage] = useState({
        img: dash,
        id: 1
    })

    const nextImage = (id) => {

        const newId = id + 1;

        if (newId === images.length + 1) {
            setImage({
                ...image,
                img: dash,
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
                img: registers,
                id: 6
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
                //onClick={() => window.open("https://github.com/Widoski/system-app")}
                >
                    Github
                </Button>
                <Button
                //onClick={() => props.showProjects(false)}
                >
                    Go back
                </Button>
            </ButtonGroup>
            <div>
                <Typography>

                </Typography>
            </div>
        </Grid>
    )
}

