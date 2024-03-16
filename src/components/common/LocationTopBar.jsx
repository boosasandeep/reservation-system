const LocationTopBar = () => {
  return (
    <section
      data-aos="fade"
      className="d-flex items-center py-15 border-top-light"
    >
      <div className="container">
        <div className="row y-gap-10 items-center justify-between">
          <div className="col-auto">
            <div className="row x-gap-10 y-gap-5 items-center text-14 text-light-1">
              <div className="col-auto">
                <div>USA</div>
              </div>
              <div className="col-auto">
                <div>&gt;</div>
              </div>
              <div className="col-auto">
                <div>Greenwood</div>
              </div>
              <div className="col-auto">
                <div>&gt;</div>
              </div>
              <div className="col-auto">
                <div className="text-dark-1">200 Legacy Blvd</div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <a href="/" className="text-14 text-light-1">
              Reservation System
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationTopBar;
