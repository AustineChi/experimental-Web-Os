
import {NotesModel} from "./notes.interface"

export interface ToolbarAppModel {
    hideModal: any;
    show: boolean;
    fade: boolean;
    specialPad?: boolean;
    setNotes?: any,
    notes?: NotesModel[],
    photos?: string[],
    setPhotos?: any

}

