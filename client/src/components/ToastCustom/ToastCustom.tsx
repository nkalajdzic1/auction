import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface IToastCustom {
    content: string;
}

export function toastRegular(content: string) {
    return toast(content,{ 
        closeButton: false
    })
}

export function toastRegularBlack(content: string) {
    return toast(content, {
        style: {
            color: "white",
            backgroundColor: "#252525",
        },
        closeButton: false
    })
}


export function toastSucces(content: string) {
    return toast.success(content, {
        closeButton: false
    })
}

export function toastError(content: string) {
    return toast.error(content, {
        closeButton: false
    });
}
