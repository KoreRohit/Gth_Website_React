import React from 'react'
import sliderImg from "../img/web_development.jpg";
const Slider = () => {
  return (
   <>
   <div class="container-fluid slider mt-2 border-5">
   <div class="col-md-12">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={sliderImg} class="d-block w-100" />
      <div class="carousel-caption d-none d-md-block text">
        <h1>FOR COMPANIES</h1>
        <h3>WE HELP YOU TO HIRE RIGHT TALENT</h3>
      </div>
    </div>
    <div class="carousel-item">
      <img src={sliderImg} class="d-block w-100" />
      <div class="carousel-caption d-none d-md-block text">
        <h1>FOR COLLAGES</h1>
        <h3>WE HELP YOU TO INCREASE PLACEMENTS</h3>
      </div>
    </div>
    <div class="carousel-item">
      <img src={sliderImg} class="d-block w-100" />
      <div class="carousel-caption d-none d-md-block text">
        <h1>FOR CANDIDATE</h1>
        <h3>WE HELP YOU TO FIND RIGHT JOB </h3>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
   </>
  )
}

export default Slider
