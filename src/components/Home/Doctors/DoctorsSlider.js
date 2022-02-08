// import React, { Component } from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { Container } from 'react-bootstrap';
// import carosel1 from '../../../images/carousel-1.png';
// import carosel2 from '../../../images/carousel-2.png';
// import carosel3 from '../../../images/carousel-3.png';
// import carosel4 from '../../../images/carousel-4.png';
// import carosel5 from '../../../images/carousel-5.png';

// export default class OurWorks extends Component {
//     render() {
//         let settings = {
//             dots: true,
//             infinite: true,
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 2000,
//             pauseOnHover: true
//         };
//         return (
//             <div id='projects' style={{ backgroundColor: "#111430", marginTop: "5rem" }}>
//                 <h3 className='fw-bold text-center text-light pt-5'>Here are some of <span style={{ color: "#7AB259" }}>our works</span></h3>
//                 <Container style={{ padding: "30px 0 70px 0" }}>
//                     <Slider {...settings}>
//                         <div>
//                             <img
//                                 className="d-block w-75 mx-auto"
//                                 src={carosel1}
//                                 alt="First slide"
//                             />
//                         </div>
//                         <div>
//                             <img
//                                 className="d-block w-75 mx-auto"
//                                 src={carosel2}
//                                 alt="Second slide"
//                             />
//                         </div>
//                         <div>
//                             <img
//                                 className="d-block w-75 mx-auto"
//                                 src={carosel3}
//                                 alt="Third slide"
//                             />
//                         </div>
//                         <div>
//                             <img
//                                 className="d-block w-75 mx-auto"
//                                 src={carosel4}
//                                 alt="Fourth slide"
//                             />
//                         </div>
//                         <div>
//                             <img
//                                 className="d-block w-75 mx-auto"
//                                 src={carosel5}
//                                 alt="Fifth slide"
//                             />
//                         </div>
//                     </Slider>
//                 </Container>
//             </div>
//         );
//     }
// }