import axios from "axios";
import * as Yup from 'yup';
import swal from 'sweetalert'

export const initialValues = {
    name: '',
    email: '',
    password: '',
}

export const onSubmit = async (values, action, setRegistered, navigate) => {
    axios.post('https://api.iliyafitness.com/auth/register', values, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: values.email,
            password: values.password
        })
    }).then(res => {
        if (res.status === 201) {
            swal({
                title: "عملیات موفقیت آمیز بود",
                text: "ثبت نام انجام شد!",
                icon: "success",
                button: "متوجه شدم",
            });
            setRegistered(true);
            navigate('/login');
        } else {
            swal({
                title: "خطایی از سمت سرور رخ داده!",
                text: "404",
                icon: "warning",
                button: "متوجه شدم",
            });
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
    name: Yup.string().required('لطفا این قسمت را پر کنید!'),
    email: Yup.string().required('لطفا این قسمت را پر کنید!')
        .email('لطفا قالب ایمیل را رعایت کنید'),
    password: Yup.string().required('لطفا این قسمت را پر کنید!')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'از حروف بزرگ و کوچک,اعداد وکاراکتر استفاده کنید'),
});