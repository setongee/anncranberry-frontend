import React from 'react';
import './about.styles.scss'
import sideImg from '../../assests/img/about_ann_cranberry.png'

const AboutSection = () => (
   <div className='about-section'>
       <div className="welcome-msg">
           <h1>welcome to ann cranberry</h1>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet facilis earum animi dolorum eaque praesentium mollitia nostrum magnam amet laborum in tenetur, pariatur nesciunt rem aut corporis fugiat sed accusantium veniam labore ad quia deleniti. Ut velit ducimus recusandae perspiciatis, molestiae numquam neque modi mollitia. Ratione, voluptatibus doloribus! Quo officiis commodi possimus. Blanditiis nesciunt soluta itaque aspernatur quibusdam quaerat, delectus, ex accusamus {<br/>}{<br/>} molestias fugiat perspiciatis saepe, ratione ipsam. Excepturi itaque totam maxime dicta quo, quas quidem consequatur quisquam iure saepe assumenda doloribus reprehenderit incidunt, deserunt vero? Officia recusandae et ab nihil omnis, autem ipsa explicabo. Fuga, eius. Nulla, atque animi.</p>
           <div className="signage">
               <h1>Anu Obasa</h1>
<p>Creative Director, {<br/>}Ann Cranberry</p>
           </div>
       </div>
       <div className="side-photo">
           <img src={sideImg} alt="Ann Cranberry"/>
       </div>
   </div>
)

export default AboutSection;
