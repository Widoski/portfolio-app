import React from 'react';
import { Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

const styles = {
    images: {
        width: "100%"
    }
}

export default function WebsiteCarousel() {
    return (
        <Carousel animation="fade" indicators={false} autoPlay={true} interval={8000} >
            <>
                <Typography style={{ margin: 30 }}>
                    This is how I developed my website. I did it with React and use, hooks and context. Also, CSS, Flexbox, Material UI (grid and components).
                </Typography>
                <Carousel animation="fade" indicators={false} autoPlay={true} interval={8000}>
                    <div style={{ width: "100%" }}>
                        <img style={styles.images} src="" alt="" />
                    </div>
                    <div style={{ width: "100%" }}>
                        <img style={styles.images} src="" alt="" />
                    </div>
                </Carousel>
            </>
        </Carousel >

    )

}
