import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { BsHandIndexThumbFill } from 'react-icons/bs';

const Question = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/questions').then((res) => {
            console.log(res.data.questions);
            setData(res.data.questions);
        }).catch((error) => {
            console.log(error);
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
                                <Accordion defaultActiveKey={[index]}>
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
