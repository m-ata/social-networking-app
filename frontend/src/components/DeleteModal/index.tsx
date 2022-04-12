import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { deletePost } from './../../api/post';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const DeleteModal = (props: any) => {

    const { open, onClose, id } = props;

    const handleDeletePost = async () => {
        const postResponse = await deletePost(id);
        if (postResponse?.data) {
            toast.success('Post Deleted successfully', {
                position: 'top-right',
                autoClose: 5000,
                closeOnClick: true,
                closeButton: true
            });
            onClose(false);
        } else {
            toast.error('Something went wrong!', {
                position: 'top-right',
                autoClose: 5000,
                closeOnClick: true,
                closeButton: true
            });
        }
    }

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
          <Button onClick={handleDeletePost} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </div>
  );
};
export default DeleteModal;