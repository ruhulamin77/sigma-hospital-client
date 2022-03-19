import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Progress.css";

const Progress = () => {
    const [pageProgress, setPageProgress] = useState(0);
    const handleHight = () => setPageProgress(window.pageYOffset);
    useEffect(() => {
        window.addEventListener("scroll", handleHight);
    }, []);
    return (
        <section className="progres">
            <Container className="padding-container">
                <Row lg={2}>
                    <Col>
                        <div className="progres-info">
                            <div className="progres-title">
                                <h4>About SigmaCare</h4>
                                <h2>Health commitments</h2>
                                <p>We are ready to provide you with any Medical, health and fitness help as well as prepare a business plan. We are ready to provide you with any Medical, health and fitness help as well as prepare a business plan.</p>
                            </div>
                            {/* <div>
                                <div className="progress_label">
                                    <p>
                                        Hormone therapy <span>84%</span>
                                    </p>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg_progress"
                                        role="progressbar"
                                        style={{ width: "84%" }}
                                        aria-valuenow="84"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div> */}
                        </div>
                    </Col>
                    <Col>
                        <div className="progress-img">
                            <img className="img-fulid" src="https://i.ibb.co/3FYfhw2/medi.jpg" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Progress;