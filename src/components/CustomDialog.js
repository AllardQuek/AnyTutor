import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import CustomButton from "./CustomButton";

const CustomDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          File uploaded successfully!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <CustomButton
          text="Continue"
          className="btn-continue"
          onClick={handleClose}
        />
        {/* <Button onClick={handleClose} color="primary" autoFocus>
          Continue
        </Button> */}
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
