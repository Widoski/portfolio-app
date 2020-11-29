import React, { useState } from 'react';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { Grid, Dialog, DialogContent, Snackbar } from '@material-ui/core';
import AppContext from './AppContext';
import PrimarySection from './components/PrimarySection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import Media from './components/Media';
import Form from './components/Form';
import Footer from './components/Footer';
import MuiAlert from '@material-ui/lab/Alert';

const styles = {
    contactSection: {
        backgroundColor: "#0B141A",
        minHeight: 400,
    },
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export default function App() {
    const [openModal, setOpenModal] = useState({
        state: false,
        fileToShow: ''
    })

    const handleOpenModal = (state, fileToShow) => {
        setOpenModal({
            ...openModal,
            state,
            fileToShow
        })
    }

    const [alert, setAlert] = useState({
        state: false,
        severity: '',
        message: ''
    });

    const handleOpenSnackbar = (state, severity, message) => {
        setAlert({
            ...alert,
            state,
            severity,
            message,
        });
    };

    const handleCloseSnackbar = () => {
        setAlert({
            ...alert,
            state: false,
            severity: '',
            message: ''
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <AppContext.Provider
                value={{
                    handleOpenModal,
                    handleOpenSnackbar
                }}
            >
                <Grid container spacing={2}>
                    <PrimarySection />
                    <AboutSection />
                    <SkillsSection />
                    <Grid container item xs={12} style={styles.contactSection}>
                        <Media />
                        <Form />
                    </Grid>
                    <Footer />
                </Grid >
                {
                    openModal.state ? (
                        <Dialog
                            open={openModal.state}
                            keepMounted
                            onClose={() => setOpenModal({ ...openModal, state: false, fileToShow: '' })}
                            maxWidth="md"
                        >
                            <DialogContent>
                                <img alt="" style={{ width: "100%" }} src={openModal.fileToShow} />
                            </DialogContent>
                        </Dialog>
                    ) : null
                }
                {
                    alert.severity === 'success' ? (
                        <Snackbar open={alert.state} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                            <Alert severity="success">
                                {alert.message} <i class="far fa-grin-alt"></i>
                            </Alert>
                        </Snackbar>
                    ) : alert.severity === 'error' ? (
                        <Snackbar open={alert.state} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                            <Alert severity="error">
                                {alert.message}
                            </Alert>
                        </Snackbar>
                    ) : null
                }
            </AppContext.Provider >
        </ThemeProvider>
    );
}