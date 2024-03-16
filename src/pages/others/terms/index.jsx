import CallToActions from "@/components/common/CallToActions";
import TermsConent from "@/components/common/TermsConent";
import Header10 from "@/components/header/header-10";
import Footer8 from "@/components/footer/footer-8";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Terms & Conditions || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const Terms = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header10 />
      {/* End Header 1 */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="tabs js-tabs">
            <TermsConent />
          </div>
        </div>
      </section>
      {/* End terms section */}
      
      <Footer8 />
      {/* End Call To Actions Section */}
    </>
  );
};

export default Terms;
