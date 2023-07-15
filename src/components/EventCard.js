import "./EventCard.css";
const Card = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div class="card">
            <img
              src="https://media.istockphoto.com/id/1410391090/photo/crystal-globe-putting-on-moss.jpg?b=1&s=170667a&w=0&k=20&c=7CxPK3yCzidarDiNXhkk4NfR3w4KT2mCGRG5mZ87HSA="
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">CATALYSE</h5>
              <p class="card-text">
                Bhumi’s Catalyse Program aims for Every Indian Volunteering. It
                involves volunteering for causes like environment, animal
                welfare, community welfare, and more. The volunteering
                activities are all aligned with the UN’s Sustainable..
              </p>
              <button class="button-51" role="button">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div class="card">
            <img
              src="https://media.istockphoto.com/id/1290864946/photo/e-learning-education-concept-learning-online.webp?b=1&s=612x612&w=0&k=20&c=6wbE8yYtBdOmwesNj0f3Int-fk9mEfBFiaFgN2kdC58="
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Ignite-BHUMI (NGO for Education)</h5>
              <p class="card-text">
                The goal of Bhumi, an NGO for education in India, is to provide
                quality education for children of disadvantaged communities and
                make a difference in the lives of those children.
              </p>
              <button class="button-51" role="button">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div class="card">
            <img
              src="https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_1280.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Bhumi's COVID Relief Support</h5>
              <p class="card-text">
                During the COVID-19 pandemic Bhumi has supported direct
                financial transfers and groceries for over 14,000 daily wagers
                and groceries for 10,000+ children in shelter homes.The crisis
                is far from over, you can join us..
              </p>
              <button class="button-51" role="button">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
