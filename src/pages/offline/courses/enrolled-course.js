import React from 'react';
import photos from '../../assests/img/offline_course.jpg'
import {ReactComponent as Trash} from '../../assests/icons/trash.svg'


const EnrolledCourse = () => {
    return (

       <div className="enrolled_card">

            <div className="card_px">

                <div className="img">
                    <img src={photos} alt=""/>
                </div>

                <div className="information">

                    <div className="program">Ann Cranberry - Basic Program </div>

                    <div className="subtitle_x">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, sequi ducimus autem magnam ratione dignissimos eos dolorem amet. Ipsa vero eligendi quasi tempora ea dolorum nihil quos laboriosam omnis odio, officiis qui? Mollitia et veniam totam architecto unde corporis voluptatem.
                    </div>

                    <div className="pay">

                        <div className="price"> 
                        
                            <p>Price : <strong>N12,780</strong> </p>
                            
                            <div className="trash">
                                <Trash /> <p>Delete</p>
                            </div>

                        </div>
                        <div className="pay_button">Pay Now</div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default EnrolledCourse;
