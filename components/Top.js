 
const Top = () => {
  return (
<>
    <div className="container-fluid bg-dark fwhite py-2 px-0 d-none d-lg-block">
    <div className="row gx-0 align-items-center">
      <div className="col-lg-7 px-5 text-start">
        <div className="h-100 d-inline-flex align-items-center me-4">
          <small className="fa fa-phone-alt me-2" />
          <small>076000000000</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center me-4">
          <small className="far fa-envelope-open me-2" />
          <small>info@example.com</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center me-4">
          <small className="far fa-clock me-2" />
          <small>Mon - Fri : 10 - 18 </small>
        </div>
      </div>
      <div className="col-lg-5 px-5 text-end">
        <div className="h-100 d-inline-flex align-items-center">
          <a className="fwhite ms-4" href="">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="fwhite ms-4" href="">
            <i className="fab fa-twitter" />
          </a>
          <a className="fwhite ms-4" href="">
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="fwhite ms-4" href="">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  </div>
     
 </>
);
}
 
export default Top;