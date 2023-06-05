import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import Books from "../components/Books/Books"

function ContactPage() {
  return (
    <Fragment>
      <Header />
      <Books/>
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default ContactPage;