import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import Contact from "../components/Contact/Contact";
// import Back from "../components/Contact/common/Back";

import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

function ContactPage() {
  return (
    <Fragment>
      <Header />
      <Contact />
      {/* <Back /> */}
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default ContactPage;