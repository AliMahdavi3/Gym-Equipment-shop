import axios from "axios";
import * as Yup from 'yup';
import swal from 'sweetalert'

export const initialValues = {
    email: '',
    password: '',
}

export const onSubmit = async (values, action, navigate) => {
    axios.post('https://api.iliyafitness.com/auth/login', values).then(res => {
        if (res.status === 200) {
            localStorage.setItem('Token', JSON.stringify(res.data));
            swal({
                title: "عملیات موفقیت آمیز بود",
                text: "شما وارد شدید!",
                icon: "success",
                button: "متوجه شدم",
            });
            navigate('/');
        }
    }).catch(error => {
        swal({
            title: "خطایی رخ داده!",
            text: error.message,
            icon: "warning",
            button: "متوجه شدم",
        });    })
}

export const validationSchema = Yup.object({
    email: Yup.string().required('لطفا این قسمت را پر کنید!')
        .email('لطفا قالب ایمیل را رعایت کنید'),
    password: Yup.string().required('لطفا این قسمت را پر کنید!')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'از حروف بزرگ و کوچک,اعداد وکاراکتر استفاده کنید'),
});