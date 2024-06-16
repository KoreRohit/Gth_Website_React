import React from 'react'
import certificate from "../img/Certificate.png";
import assignment from "../img/assignment.png";
import conferance from "../img/conferance.png";
import placement from "../img/placement.png";

const Contents = () => {
    return (
        <>

            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/> */}

            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3 col-sm-12 mt-2">
                        <div class="boxx1" style={{ textAlign: "center" }}>
                            <img src={certificate} style={{ marginTop: "10px" }}
                                alt="" />
                            <p style={{ padding: "10px" }}><b style={{ color: "red" }}>Certified Courses</b><br />

                                <i>provide certified Courses to student with 100% placement support.</i>
                            </p>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-12 mt-2">
                        <div class="boxx1" style={{ textAlign: "center" }}>
                            <img src={assignment} style={{ marginTop: "10px" }} alt="" />
                            <p style={{ padding: "10px" }}><b style={{ color: "red" }}>Premium Placements</b><br />

                                <i>We provide certified Courses to student with 100% placement support.</i>
                            </p>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-12 mt-2">
                        <div class="boxx1" style={{ textAlign: "center" }}>
                            <img src={conferance} style={{ marginTop: "10px" }} alt="" />
                            <p style={{ padding: "10px" }}><b style={{ color: "red" }}>Weakly Assesments</b><br />

                                <i>We provide certified Courses to student with 100% placement support.</i>
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12 mt-2">
                        <div class="boxx1" style={{ textAlign: "center" }}>
                            <img src={placement} style={{ marginTop: "10px" }}
                                alt="" />
                            <p style={{ padding: "10px" }}><b style={{ color: "red" }}>Expeert Faculty</b><br />

                                <i>We provide certified Courses to student with 100% placement support.</i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contents
