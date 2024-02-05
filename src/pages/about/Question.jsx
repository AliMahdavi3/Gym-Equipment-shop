import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import swal from 'sweetalert'

const Question = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.iliyafitness.com/api/questions').then((res) => {
            setData(res.data.questions);
        }).catch((error) => {
            swal({
                title: "خطایی رخ داده!",
                text: error.message,
                icon: "warning",
                button: "متوجه شدم",
            });
        });
    }, []);


    return (
        <div className="common_questions">
            <div className="container">
                <div className="common_questions_title">
                    <h2 className='text-center py-5'>سوالات متداول</h2>
                </div>
                <div>
                    {
                        Array.isArray(data) ?
                            data.map((d, index) => (
                                <Accordion key={index} defaultActiveKey={[index]}>
                                    <Accordion.Item className='mb-3 rounded-5' eventKey="0">
                                        <Accordion.Header>{d.title}</Accordion.Header>
                                        <Accordion.Body className='rounded-5 text-end fw-semibold fs-5'>
                                            {d.content}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            )) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Question
