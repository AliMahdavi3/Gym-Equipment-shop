import React, { useState } from 'react'
import swal from 'sweetalert';
import axios from 'axios';

const SendMessage = () => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append('name', name);
        formData.append('content', content);
        formData.append('phoneNumber', phoneNumber);

        try {
            const res = await axios.post('https://api.iliyafitness.com/api/sendMessage', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            swal({
                title: "عملیات موفقیت آمیز بود",
                text: "پیام ارسال شد!",
                icon: "success",
                button: "متوجه شدم",
            }).then(() => {
                window.location.reload()
            });
            console.log(res.data);
        }
        catch (error) {
            swal({
                title: "خطایی رخ داده!",
                text: error.message,
                icon: "warning",
                button: "متوجه شدم",
            });
            console.log(error.message);
        }
    }

    return (
        <div className="contact_form py-5">
            <div className="container">
                <div className="row mt-5 px-3 py-5 rounded-5 form_shadow_2 d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                        <img className='w-75 border border-3 rounded-circle' src="/assets/images/mult (5).jpg" alt="" />
                    </div>
                    <div className="col-12 col-md-6 mt-4 flex-column d-flex">
                        <h5 className='text-center pb-2'>ارسال پیام به مدیریت</h5>
                        <form onSubmit={handleSubmit} className='d-flex justify-content-center align-items-end w-100 flex-column'>
                            <input value={name} onChange={(e) => setName(e.target.value)} className='text-end w-100 fw-semibold px-3 border border-0 rounded-3 mb-3 py-2 form_shadow' placeholder='نام' type="text" name="" id="" />
                            <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className='text-end w-100 fw-semibold px-3 border border-0 rounded-3 mb-3 py-2 form_shadow' placeholder="شماره تلفن" type="text" name="" id="" />
                            <textarea value={content} onChange={(e) => setContent(e.target.value)} className='text-end w-100 fw-semibold px-3 border border-0 rounded-3 mb-3 py-2 form_shadow' placeholder="پیام" name="" id="" cols="30" rows="10"></textarea>
                            <div className="submit_btn mt-3 mb-5">
                                <button type='submit'
                                    className='btn btn-primary px-3 mx-2' disabled={isSubmitting}>
                                    {isSubmitting ? 'لطفا صبر کنید...' : 'ثبت'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SendMessage
