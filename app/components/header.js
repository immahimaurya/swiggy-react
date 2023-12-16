import Image from 'next/image'

export default function Header() {
  return (
    <header class="section-header">
<section class="header-main shadow-sm bg-white">
<div class="container">
<div class="row align-items-center">
<div class="col-1">
<a href="home.html" class="brand-wrap mb-0">
<img alt="#" class="img-fluid" src="img/logo_web.png" />
</a>

</div>
<div class="col-3 d-flex align-items-center m-none">
<div class="dropdown me-3">
<a class="text-dark dropdown-toggle d-flex align-items-center py-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<div><i class="feather-map-pin me-2 bg-light rounded-pill p-2 icofont-size"></i></div>
<div>
<p class="text-muted mb-0 small">Select Location</p>
Jawaddi Ludhiana...
</div>
</a>
<div class="dropdown-menu p-0 drop-loc border-0">
<div class="osahan-country">
<div class="search_location bg-primary p-3 text-end">
<div class="input-group bg-white rounded shadow-sm">
<span class="input-group-text bg-transparent border-0 rounded-0"><i class="feather-search"></i></span>
<input type="text" class="form-control bg-transparent border-0 rounded-0 px-0 shadow-none" placeholder="Enter Your Location" aria-label="Enter Your Location" />
</div>
</div>
<div class="p-3 border-bottom">
<a href="home.html" class="text-decoration-none">
<p class="fw-bold text-primary m-0"><i class="feather-navigation"></i> New
York, USA</p>
</a>
</div>
<div class="filter">
<h6 class="p-3 bg-light m-0 border-bottom">Choose your country</h6>
<div class="border-bottom p-3">
<div class="form-check form-check-reverse m-0">
<input type="radio" id="customRadio1" name="location" class="form-check-input" />
<label class="form-check-label text-start w-100" for="customRadio1">Afghanistan</label>
</div>
</div>
<div class="border-bottom p-3">
<div class="form-check form-check-reverse m-0">
<input type="radio" id="customRadio2" name="location" class="form-check-input" checked />
<label class="form-check-label text-start w-100" for="customRadio2">India</label>
</div>
</div>
<div class="border-bottom p-3">
<div class="form-check form-check-reverse m-0">
<input type="radio" id="customRadio3" name="location" class="form-check-input" />
<label class="form-check-label text-start w-100" for="customRadio3">USA</label>
</div>
</div>
<div class="border-bottom p-3">
<div class="form-check form-check-reverse m-0">
<input type="radio" id="customRadio4" name="location" class="form-check-input" />
<label class="form-check-label text-start w-100" for="customRadio4">Australia</label>
</div>
</div>
<div class="border-bottom p-3">
<div class="form-check form-check-reverse m-0">
<input type="radio" id="customRadio5" name="location" class="form-check-input" />
<label class="form-check-label text-start w-100" for="customRadio5">Japan</label>
</div>
</div>
<div class="p-3">
<div class="form-check form-check-reverse m-0">
<input type="radio" id="customRadio6" name="location" class="form-check-input" />
<label class="form-check-label text-start w-100" for="customRadio6">China</label>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="col-8">
<div class="d-flex align-items-center justify-content-end pe-5">

<a href="search.html" class="widget-header me-4 text-dark">
<div class="icon d-flex align-items-center">
<i class="feather-search h6 me-2 mb-0"></i> <span>Search</span>
</div>
</a>

<a href="offers.html" class="widget-header me-4 text-white btn bg-primary m-none">
<div class="icon d-flex align-items-center">
<i class="feather-disc h6 me-2 mb-0"></i> <span>Offers</span>
</div>
</a>

<a href="login.html" class="widget-header me-4 text-dark m-none">
<div class="icon d-flex align-items-center">
<i class="feather-user h6 me-2 mb-0"></i> <span>Sign in</span>
</div>
</a>

<div class="dropdown me-4 m-none">
<a href="#" class="dropdown-toggle text-dark py-3 d-block" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<img alt="#" src="img/user/1.jpg" class="img-fluid rounded-circle header-user me-2 header-user" /> Hi Osahan
</a>
<div class="dropdown-menu dropdown-menu-right">
<a class="dropdown-item" href="profile.html">My account</a>
<a class="dropdown-item" href="faq.html">Delivery support</a>
<a class="dropdown-item" href="contact-us.html">Contant us</a>
<a class="dropdown-item" href="terms.html">Term of use</a>
<a class="dropdown-item" href="privacy.html">Privacy policy</a>
<a class="dropdown-item" href="login.html">Logout</a>
</div>
</div>

<a href="checkout.html" class="widget-header me-4 text-dark">
<div class="icon d-flex align-items-center">
<i class="feather-shopping-cart h6 me-2 mb-0"></i> <span>Cart</span>
</div>
</a>
<a class="toggle" href="#">
<span></span>
</a>
</div>

</div>

</div>

</div>

</section>

</header>
  )
}
