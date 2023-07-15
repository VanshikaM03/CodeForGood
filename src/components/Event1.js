import "./Event1.css";
const Event1 = () => {
  return (
    <div>
      <h1>CATALYSE</h1>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://cdn.pixabay.com/photo/2016/04/21/13/48/vegan-1343429_1280.png"
              className="d-block w-100 imgsi"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1127326249/photo/animal-rights-text-from-wooden-blocks.jpg?b=1&s=170667a&w=0&k=20&c=uNBR6kKq-4KwZPAIxsJ6z-jJW4eEomo9uYioKvORGas="
              className="d-block w-100 imgsi"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2020/05/31/04/36/investment-5241253_1280.jpg"
              className="d-block w-100 imgsi"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        <p className="para">
          Bhumi’s Catalyse Program aims for Every Indian Volunteering. It
          involves volunteering for causes like environment, animal welfare,
          community welfare, and more. The volunteering activities are all
          aligned with the UN’s Sustainable Development Goals. As a volunteer
          you can join or start impactful civic projects. As a Campus Ambassador
          you can start volunteering programmes at your college / organisation.
          We also support end to end management of volunteering programs for
          organisations. Contact us for a CSR employee volunteer programme in
          your company / college. Imagine the transformation India can see with
          volunteering as a national habit.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div class="card">
                <img
                  src="https://bhumi.ngo/wp-content/uploads/2021/04/6078f0fef3dae.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Eco-Champs</h5>
                  <p class="card-text">
                    Eco-Champs is an environment sensitisation program to
                    empower students, and become proactive practitioners of
                    eco-friendly lifestyle through an immersive and hands-on
                    experience spanned across 5 months. The program also builds
                    21st-century life skills including compassion, teamwork,
                    critical thinking.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div class="card">
                <img
                  src="https://bhumi.ngo/wp-content/uploads/2020/12/5fb61b9e38052.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">
                    RTE 25 - Right To Education Awareness
                  </h5>
                  <p class="card-text">
                    The Right to Education (RTE) Act describes the importance of
                    free education to underprivileged children between the age
                    of 6 and 14. We plan to tackle this problem by engaging our
                    volunteers in creating awareness among these communities and
                    helping them benefit from this transformational opportunity.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div class="card">
                <img
                  src="https://bhumi.ngo/wp-content/uploads/2021/02/601a3ac1609b0-1.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Think Green</h5>
                  <p class="card-text">
                    In efforts of defending the natural habitat by identifying
                    environmental abuse, championing responsible solutions and
                    enabling local communities to advocate and act for change,
                    Think Green was brought into being. Our movement is
                    inclusive and people-led.Our movement is inclusive and
                    people-led helping people to environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Event1;
