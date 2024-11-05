import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ToastNotification() {
    return <ToastContainer />;
}

export const showSuccessToast = (message: string) => {
    toast.success(message, { position: "top-right" });
};

export const showErrorToast = (message: string) => {
    toast.error(message, { position: "top-right" });
};
