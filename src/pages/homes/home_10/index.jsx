import Header10 from "@/components/header/header-10";
import Hero10 from "@/components/hero/hero-10";
import { Link } from "react-router-dom";
import Footer8 from "@/components/footer/footer-8";
import BlockGuide from "@/components/block/BlockGuide";
import Flights from "@/components/flight/Flights";
import TopDestinations from "@/components/home/home-10/TopDestinations";
import TestimonialRating from "@/components/home/home-10/TestimonialRating";
import Testimonial from "@/components/home/home-10/Testimonial";
import PopularRoutes from "@/components/home/home-10/PopularRoutes";
import MetaComponent from "@/components/common/MetaComponent";
import { useEffect, useState } from "react";

const metadata = {
  title: "Reservations Center Inc",
  description: "Reservations Center Inc",
};

const Home_10 = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    // var res = getFlightSearchResults();
    // console.log(res);
    // var api = new ApiService();
    // api.getFlightSearchResults().then(response => setData(response));
    // fetch('https://api.publicapis.org/entries')
    //   .then(response => response.json())
    //   .then(json => setData(json))
    //   .catch(error => console.error(error));
  }, []);

  console.log(data);
  //getFlightSearchResults();
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <Header10 />
      {/* End Header 5 */}

      <Hero10 />
      {/* End Hero 5 */}

      <section className="layout-pt-sm layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Us</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Choose us for 24/7 support, seamless booking, unbeatable deals, and unparalleled convenience. Travel stress-free!
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50">
            <BlockGuide />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Why choose Block Guide Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Recommended Flights</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Discover top-flight deals with ease. Book now for seamless travel experience. Your journey starts here!
                </p>
              </div>
            </div>
            {/* End .col */}
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20">
            <Flights />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Popular Routes Sections */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Top Destinations</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular flights have lot's of offers
                </p>
              </div>
            </div>
            {/* End col-auto */}
            {/* End col-auto */}
          </div>
          {/* End .row */}

          <div className="relative mt-40 sm:mt-20 js-section-slider">
            <TopDestinations />
          </div>
          {/* End slider  */}
        </div>
        {/* End .container */}
      </section>
      {/* End .Top Destinations */}

      <section className="layout-pt-lg layout-pb-lg bg-dark-3">
        <div className="container">
          <div className="row y-gap-40 justify-between text-white">
            <div className="col-xl-5 col-lg-6">
              <TestimonialRating />
            </div>
            {/* End .col */}

            <div className="col-lg-6">
              <Testimonial />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End testimonial and brand sections Section */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Popular Routes</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Explore scenic wonders or bustling cities. Discover popular routes for your next adventure with ease.
                </p>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="relative mt-40 sm:mt-20">
            <PopularRoutes />
          </div>
          {/* End relative */}
        </div>
        {/* End .container */}
      </section>
      {/* End popular routes Section */}
      {/* App Banner Section */}

      {/* End blog Section */}

      <Footer8 />
      {/* End Footer Section */}
    </>
  );
};

export default Home_10;
