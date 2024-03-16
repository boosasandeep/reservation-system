import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TermsConent = () => {
  return (
    <Tabs>
      <div className="row y-gap-30">
        <div className="col-lg-3">
          <div className="px-30 py-30 rounded-4 border-light">
            <TabList className="tabs__controls row y-gap-10 js-tabs-controls">
              <Tab className="col-12 tabs__button js-tabs-button">
                About Us
              </Tab>
              <Tab className="col-12 tabs__button js-tabs-button">
                General Terms of Use
              </Tab>
              <Tab className="col-12 tabs__button js-tabs-button">
                Privacy Policy
              </Tab>
            </TabList>
          </div>
        </div>
        {/* End .col-lg-3 */}

        <div className="col-lg-9">

          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15"> About Us</h1>
              <h2 className="text-16 fw-500">One stop solution for exploring the word
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Invented from the great idea to accomplish the travelers' desire- reservation desk Travel has started to discover the complete online travel industry in the USA. It has reshaped the travel industry as per travelers' choice. Thus we are creating our story to make your travel mood.
                reservation desktravel.us is the fastest growing travel management company, dedicated to guiding explorers to their desired destination. Whether you are looking for a customized business travel itinerary or you want to plan for an unforgettable personal vacation, our tailor-made travel solutions will be the best bet for you. Our commitment towards work offers travelers to get a paramount bundle of the package. Our pioneering technology supported system, and most lucrative 360- degree travel program compel you to make every travel plan with us.

              </p>
              <h2 className="text-16 fw-500 mt-35">
                Our Vision and mission
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Our promises provide peace of mind to millions of travelers – bet it corporate or leisure. Thus our mission is to embrace their faith and perform as per their expectations. Our services include flights tickets reservation, hotel bookings and arranging car rentals along with travel insurance, which means a one-stop solution for travelers. So treat yourself to unforgettable vacation experience and let your dream come true.
                As a responsible travel service provider, we assure to provide world 1service to our travelers in the US. And our vision is to implement our expertise for spreading that service all over the world. We are very close to that day when every traveler in the world will be recognizing us a leading one. Because we will not stop to give our best for sure!!
              </p>
              <h2 className="text-16 fw-500 mt-35">
                How we stand out among all
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                One stop solution for all kind of explorer -be it affordable flight fare or be it deluxe inns or arranging cars.
                Biggest inventory reservation desktravel.us has a lot of choices to pick, starting from flight tickets to hotel bookings. Whether you are flying solo or traveling for a business meeting, whether you want to go with partners or with family, our unmatchable price range will definitely put some more sugar on your trip.
                Delightful travel involvement with absolute bottom cost unequaled specials bargains run their application that implies it generally urges explorers to make sudden arrangements.
                Save Big and make unforgettable memories enjoy round-trip car rental services from any airport with no cancellation charge and enjoy traveling with us. Moreover, our special discounted flight fare will give chance to save big while traveling. So let's fly and get freedom.
                Hassle free booking process Treat yourself to a delightful experience while planning your vacations. Because reservation desktravel.us advanced travel technology has created an exclusive effortlessness techniques through which even a technically challenged person can do their booking within a few minutes. We also have a mobile application which is equally efficient to take care all your travel deals. Download our app now.
                You never get lost -implies this application gives voyagers alluring arrangements as well as guide them in an equivalent way. Like flight tickets will be in your post box right away when you finish your booking, you will get a steady caution of fundamental travel data through this application. If there should arise an occurrence of inns booking the application gives you access to google delineate that voyagers can find that convenience effortlessly.
                Simple cancelation process Travelers need to follow few simple steps to cancel their bookings, in case they change their minds.
              </p>
            </div>
          </TabPanel>
          {/* End  Privacy policy */}

          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15">General Terms of Use</h1>
              <p className="text-15 text-dark-1 mt-5">
                Most of our airline service tickets, service packages, fees subdued with are non-refundable. Cancellations must be done over phone. Refund requests come to an acceptable position if only the following terms come in a meeting: All requests are processed sequentially so it's not possible to declare any specific time frame for the refund outcome. The email notification of your request will be sent to you once you are done with our customer service agent. This notification provides you the acclamation of the request with a tracking number. We will coordinate with the suppliers to generate a waiver and other rules of them and will let you know about their decision. The service fees associated with the original booking or reservations are not refundable. Please keep in mind that we are solely dependent on the suppliers for obtaining the requested amount of refunds. It can take additional time to come on your credit card statement once the approval been confirmed by the supplier. Suppliers charge an amount of penalty for it. The entire process can take up to 60-90 days. Refund fees are charged upon each ticket per person basis. The airline agencies rules has to permit the refund, these fees can only be counted if the refund is authorized or a waiver is been received. If any such refund is not processed by the supplier, we will always refund you our fees which is been given by you for the processing. Please also note that the previously charged service fees will not be refunded for the original travel reservation.
              </p>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15"> Privacy Policy</h1>
              <p className="text-15 text-dark-1 mt-5">
                The alteration which can be made during a course period of time specifically the terms and conditions and after that comes the services provided in a much larger basis aren't really made for to be given answers. The responsibility is already included with inside any customers to follow the website on a basic termination gap.
                The user availing services is expected to be read and understood all the terms and conditions included in our privacy policy. The user will hopefully make clear that the terms and conditions are well accepted to him.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                Limited user
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                The services are specially structured for personal use and commercial use. But a nominal agreement on the fact no portion of services can be sold or misused for the commercial use.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                Disclaimer of warranties/ Limitation of Liability
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                We produce an utmost care to make sure that the information provided by us in its most width are accurate, but no representation or replacement would be presented to re - ensure our quality and the guaranteed completion of the data provided. There are no commitments or assurance made by us.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                Access Restriction
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                We can transferor restrict the access of our website at any time location of time
              </p>
            </div>
          </TabPanel>
          {/* End  Cookie Policy */}
          {/* End  Best Price Guarantee */}
        </div>
        {/* End col-lg-9 */}
      </div>
    </Tabs>
  );
};

export default TermsConent;
