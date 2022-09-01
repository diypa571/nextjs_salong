const Footer = () => {
  return (

    <> 
  <div className="container-fluid  fwhite bg-dark footer mt-5 pt-5">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6 ftn">
          <h5 className="text-light mb-4">Short intro</h5>
          <p>
            Ppsum et ipsum et ipsum et ipsum etipsum etipsum etipsum etipsum et
          </p>
          <div className="d-flex pt-2">
            <a className="btn btn-rounded me-1" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-rounded me-1" href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-rounded me-1" href="">
              <i className="fab fa-youtube" />
            </a>
            <a className="btn btn-rounded me-0" href="">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ftn">
          <h5 className="text-light mb-4">Address</h5>
          <p>
            <i className="fa fa-map-marker-alt me-3" />
            Storgatan 19, 48273, Stockholm
          </p>
          <p>
            <i className="fa fa-phone-alt me-3" />
            +082734877234
          </p>
          <p>
            <i className="fa fa-envelope me-3" />
            info@example.com
          </p>
        </div>
        <div className="col-lg-3 col-md-6 ftn">
          <h5 className="text-light mb-4">Quick Links</h5>
          <a className="btn btn-link" href="">
            About Us
          </a>
          <a className="btn btn-link" href="">
            Contact Us
          </a>
          <a className="btn btn-link" href="">
            Our Services
          </a>
          <a className="btn btn-link" href="">
            Terms &amp; Condition
          </a>
        </div>
        <div className="col-lg-3 col-md-6 ftn">
          <h5 className="text-light mb-4">Newsletter</h5>
          <p>
            Ppsum et ipsum et ipsum et ipsu Ppsum et ipsum et ipsum et ipsu.
          </p>
          <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
            <input
              className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-secondary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
 </>
);
}
 
export default Footer;