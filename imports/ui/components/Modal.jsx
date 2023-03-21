import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Slide from '@mui/material/Slide';
import { textAlign } from '@mui/system';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export const Modal = ({ open, setOpen, title, body, footer, errorMessage }) => {

    return (
        <div>
            <Dialog open={open} onClose={setOpen} TransitionComponent={Transition} keepMounted aria-describedby="alert-dialog-slide-description"  >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {
                            errorMessage && (
                                <Alert severity="error" >
                                    <AlertTitle>Error</AlertTitle>
                                    {errorMessage}
                                </Alert>
                            )
                        }
                        {body}
                    </DialogContentText>
                    {footer}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                </DialogActions>
            </Dialog>
            </div>
    );
}