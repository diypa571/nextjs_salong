import Link from 'next/link'
const Navbar = () => {
  return (
<>
  <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
   
   <Link href="/"  className="navbar-brand d-flex align-items-center">
              <h1 className="m-0">SALONGSPACE</h1>
        </Link>
 
    <button
      type="button"
      className="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">

 
         
   <Link href="/">
  <span className="nav-item nav-link ftn ftn15 fblack">HOME</span>
        </Link>
 


        <Link href="/about">
  <span className="nav-item nav-link ftn ftn15 fblack">ABOUT</span>
        </Link>

 
               <Link href="/team">
  <span className="nav-item nav-link ftn ftn15 fblack">TEAM</span>
        </Link>
      


         <Link href="/contact">
  <span className="nav-item nav-link ftn ftn15 fblack">CONTACT</span>
        </Link>
      </div>
    </div>
 
        <Link href="/">
  <span className="btn btn-primary px-3 d-none d-lg-block">     BOKA TID</span>
        </Link>
 
  </nav>
  {/* // Navigation */}
     
 </>
);
}
 
export default Navbar;