import React from "react";
//mui
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@material-ui/core";
/**
 * Content = Functional Component
 * Actions = Functional Component
 * title = string
 * open = boolean
 */
export default function dialog({title, content, Actions, open}) {
    return (
        <Dialog
            fullWidth
            maxWidth="sm"
            open={open}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{content}</DialogContent>
            <DialogActions>
                <Actions />
            </DialogActions>
        </Dialog>
    );
}
