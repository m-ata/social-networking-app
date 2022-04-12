import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DeleteModal = (props: any) => {

    const { open, onClose } = props;

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => onClose(false)}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">
            Confirmation
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure, you want to delete this post?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClose(false)}>Cancel</Button>
          <Button onClick={() => onClose(false)} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default DeleteModal;