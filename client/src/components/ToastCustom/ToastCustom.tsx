import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface IToastCustom {
    content: string;
}

export function toastRegular(content: string) {
    return toast(content, {
        style: {
            color: "white",
            backgroundColor: "#252525"
        }
    })
}

export function toastSucces(content: string) {
    return toast.success(content)
}

export function toastError(content: string) {
    return toast.error(content);
}
