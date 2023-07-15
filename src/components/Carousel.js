import "./Carousel.css";
const Carousel = () => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide carousel-fade"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://cdn.pixabay.com/photo/2015/01/18/13/31/children-602967_1280.jpg"
            className="d-block w-100 imgsiz"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>Caring Hearts,Changing Lives</h1>
            {/* <p>Creating change through compassion and action.</p> */}
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://cdn.pixabay.com/photo/2015/08/05/13/55/children-876543_1280.jpg"
            className="d-block w-100 imgsiz"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>Nurturing Communities, Empowering Dreams</h1>
            {/* <p>Some representative placeholder content for the second slide.</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://media.istockphoto.com/id/813460430/photo/happy-volunteer-looking-at-donation-box.webp?b=1&s=612x612&w=0&k=20&c=sN1c4AO0Kg5rn7k9TFWbVyy3UBA8raNZ4j3Yy9j_YS0="
            className="d-block w-100 imgsiz"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>Join the Movement, Be the Change</h1>
            {/* <p>Some representative placeholder content for the third slide.</p> */}
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Carousel;
