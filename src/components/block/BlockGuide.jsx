const BlockGuide = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/1.svg",
      title: "Best Price Guarantee",
      text: ` Find a better price elsewhere? We'll match it! Our Best Price Guarantee ensures satisfaction.`,
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/1/2.svg",
      title: "Easy & Quick Booking",
      text: `Effortless booking, seamless experience. Your travel plans made easy with our intuitive app. Try now!`,
      delayAnim: "200",
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/3.svg",
      title: "Customer Care 24/7",
      text: `Accessible round-the-clock support ensures peace of mind for all your travel needs. Customer-centric excellence!`,
      delayAnim: "300",
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div className="featureIcon -type-1 ">
            <div className="d-flex justify-center">
              <img src={item.icon} alt="image" className="js-lazy" />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.title}</h4>
              <p className="text-15 mt-10">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockGuide;
