import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  

export const toastMsg = (msg:string,emoji:string)=>{
    toast(emoji + msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}
