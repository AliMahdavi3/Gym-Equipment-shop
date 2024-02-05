import React, { useEffect, useState } from 'react'
import Footer from '../../../components/Footer'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';

const EquippedGym = () => {
  let { equippedGymId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`https://api.iliyafitness.com/api/equippedGym/${equippedGymId}`).then((res) => {
      setData(res.data)
    }).catch((error) => {
      swal({
        title: "خطایی رخ داده!",
        text: error.message,
        icon: "warning",
        button: "متوجه شدم",
    });    });
  }, [equippedGymId]);

  return (
    <>
      {
        !data ? (
          <h1 className='text-center mt-5 fw-bold'>درحال بارگذاری....!</h1>
          ) : (
          <div className='equipped_gym'>
            <div className="container">
              <h1>باشگاه تجهیزشده <span className='main_color fw-semibold'>{data.equippedGym.title}</span></h1>
              <hr />
              <div className='mt-5 fw-semibold'>
                <p>{data.equippedGym.content}</p>
                <p className='text-primary'>
                  آدرس باشگاه : <span className='text-dark'>{data.equippedGym.address}</span>
                </p>
              </div>
              <div>
                <div className='my-5'>
                  <img src={'https://api.iliyafitness.com/' + data.equippedGym.imageUrl[0]} className='w-100 rounded-5' alt="" />
                </div>
                <div className='my-5'>
                  <img src={'https://api.iliyafitness.com/' + data.equippedGym.imageUrl[1]} className='w-100 rounded-5' alt="" />
                </div>
                <div className='my-5'>
                  <img src={'https://api.iliyafitness.com/' + data.equippedGym.imageUrl[2]} className='w-100 rounded-5' alt="" />
                </div>
                <div className='my-5'>
                  <img src={'https://api.iliyafitness.com/' + data.equippedGym.imageUrl[3]} className='w-100 rounded-5' alt="" />
                </div>
              </div>
            </div>
          </div>
        )
      }
      <Footer />
    </>

  )
}

export default EquippedGym
