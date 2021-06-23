import React from 'react'

export default function token_sale() {
    return (
        <div>
            <>
                <div id="wrapper" className="overflow-hidden">
                    <div className="fat-nav" />
                    {/* start header-container */}
                    <header className="header-container blog-header-container">
                        <div className="container">
                            <div className="row header-area justify-content-between pt-50 pb-20">
                                <div className="logo">
                                    <a href="index.html"><img src="assets/images/logo.png" alt="" width={216} height={39} /></a>
                                </div>
                                <div className="menu-area d-flex flex-wrap">
                                    <nav className="main-menu">
                                        <ul className="nav">
                                            <li className="menu-item-has-children"><a href="index.html">Home</a>
                                                <ul>
                                                    <li><a href="index.html">Home</a></li>
                                                    <li><a href="index2.html">Home 2</a></li>
                                                    <li><a href="index3.html">Home 3</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="about.html">About</a></li>
                                            <li className="current-menu-item"><a href="token-sale.html">Token Sale</a></li>
                                            <li><a href="road-map.html">Road Map</a></li>
                                            <li><a href="team.html">Team</a></li>
                                            <li><a href="faq.html">Faq</a></li>
                                            <li className="menu-item-has-children"><a href="blog.html">Blog</a>
                                                <ul>
                                                    <li><a href="blog-single.html">blog right sidebar</a></li>
                                                    <li><a href="blog-left-sidebar.html">blog left sidebar</a></li>
                                                    <li><a href="blog-single.html">blog single</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="header-right">
                                        <div className="device-btn"><a href="contact.html">Get Started</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* //end .header-container */}
                    {/* start page-banner */}
                    <div className="page-banner">
                        <div className="container">
                            <div className="row banner-content-area justify-content-center pt-70 pb-100 mobile-pt-10 mobile-pb-50">
                                <div className="col-12 col-md-6  text-center wow fadeInUp" data-wow-duration="0.9s" data-wow-delay=".5s">
                                    <h1 className="pb-30 text-white mobile-pb-10">Token Sale</h1>
                                    <p>Eusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //end .page-banner */}
                    {/* start .container-fluid */}
                    <div className="container-fluid">
                        <div className="row pt-70 pb-50 mobile-pt-60 mobile-pb-20">
                            <div className="col-12 big-title text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                                <h3>Buy Our Token</h3>
                                <h2>Token Management</h2>
                            </div>
                        </div>
                        <div className="chart-container d-flex flex-wrap pb-70 mobile-pb-60">
                            <div className="chart-col wow zoomIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="chart-token d-flex flex-wrap align-items-center justify-content-sm-center justify-content-md-center justify-content-lg-start justify-content-xl-start mb-20">
                                    <div className="chart-cycle">
                                        <canvas id="chart1" width={300} height={300} />
                                        <div className="chart-un" />
                                    </div>
                                    <div className="chart-point">
                                        <div>
                                            <div className="sale-item">
                                                <div className="sale-item-color">
                                                    <span />
                                                </div>
                                                <div className="sale-item-cont">
                                                    <strong>60%</strong>
                                                    <small>Core Token Sale</small>
                                                </div>
                                            </div>
                                            <div className="sale-item">
                                                <div className="sale-item-color color-green">
                                                    <span />
                                                </div>
                                                <div className="sale-item-cont">
                                                    <strong>15%</strong>
                                                    <small>Partners &amp; Advisors</small>
                                                </div>
                                            </div>
                                            <div className="sale-item">
                                                <div className="sale-item-color color-blue">
                                                    <span />
                                                </div>
                                                <div className="sale-item-cont">
                                                    <strong>10%</strong>
                                                    <small>Project Team Share</small>
                                                </div>
                                            </div>
                                            <div className="sale-item">
                                                <div className="sale-item-color color-yellow">
                                                    <span />
                                                </div>
                                                <div className="sale-item-cont">
                                                    <strong>8%</strong>
                                                    <small>Reserve Token</small>
                                                </div>
                                            </div>
                                            <div className="sale-item">
                                                <div className="sale-item-color color-burnt">
                                                    <span />
                                                </div>
                                                <div className="sale-item-cont">
                                                    <strong>4%</strong>
                                                    <small>Bounties</small>
                                                </div>
                                            </div>
                                            <div className="sale-item">
                                                <div className="sale-item-color color-forceblue">
                                                    <span />
                                                </div>
                                                <div className="sale-item-cont">
                                                    <strong>3%</strong>
                                                    <small>Bonuses</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-center">Token Distribution</h3>
                            </div>
                            <div className="chart-col wow zoomIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="chart-token d-flex flex-wrap align-items-center order-lg-2 justify-content-lg-end justify-content-sm-center justify-content-md-center mb-20">
                                    <div className="chart-cycle d-flex order-lg-2">
                                        <div className="chart-cycle">
                                            <canvas id="chart2" width={300} height={300} />
                                            <div className="chart-un" />
                                        </div>
                                    </div>
                                    <div className="chart-point d-flex order-lg-1">
                                        <div className="sale-right-text">
                                            <div className="sale-item">
                                                <div className="sale-item-color">
                                                    <span />
                                                </div>
                                                <div className="sale-item-cont">
                                                    <strong>40%</strong>
                                                    <small>Core Development</small>
                                                </div>
                                            </div>
                                            <div className="sale-item">
                                                <div className="sale-item-color color-green">
                                                    <span />
                                                </div>
                                                <div className="sale-item-cont">
                                                    <strong>30%</strong>
                                                    <small>Sales &amp; Marketing</small>
                                                </div>
                                            </div>
                                            <div className="sale-item">
                                                <div className="sale-item-color color-blue">
                                                    <span />
                                                </div>
                                                <div className="sale-item-cont">
                                                    <strong>15%</strong>
                                                    <small>Legal &amp; Financial</small>
                                                </div>
                                            </div>
                                            <div className="sale-item">
                                                <div className="sale-item-color color-yellow">
                                                    <span />
                                                </div>
                                                <div className="sale-item-cont">
                                                    <strong>10%</strong>
                                                    <small>Management</small>
                                                </div>
                                            </div>
                                            <div className="sale-item">
                                                <div className="sale-item-color color-burnt">
                                                    <span />
                                                </div>
                                                <div className="sale-item-cont">
                                                    <strong>5%</strong>
                                                    <small>Bounties</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-center">System Administration</h3>
                            </div>
                        </div>
                    </div>
                    {/* //end .container-fluid */}
                    {/* start footer-container */}
                    <footer className="footer-container footer-container3">
                        <div className="container">
                            <div className="row pb-50 mobile-pb-20 footer-top-content overflow-hidden">
                                <div className="col-12 col-md-6 col-lg-5 footer-col wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                    <div className="footer-unicrypt">
                                        <div className="footer-logo">
                                            <img src="assets/images/logo.png" alt="" />
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua.</p>
                                        <ul className=" d-flex flex-wrap social-link">
                                            <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                                            <li><a href="#" target="_blank"><i className="fab fa-twitter" /></a></li>
                                            <li><a href="#" target="_blank"><i className="fab fa-google-plus-g" /></a></li>
                                            <li><a href="#" target="_blank"><i className="fab fa-linkedin-in" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-2 footer-col link-hover wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                                    <h4>Company</h4>
                                    <ul>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Team Members</a></li>
                                        <li><a href="#">Service</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms &amp; Condition</a></li>
                                    </ul>
                                </div>
                                <div className="col-12 col-md-6 col-lg-2 footer-col link-hover wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                                    <h4>Useful Links</h4>
                                    <ul>
                                        <li><a href="#">Token Sale</a></li>
                                        <li><a href="#">Road Map</a></li>
                                        <li><a href="#">Cryptocurrenty</a></li>
                                        <li><a href="#">User Guide</a></li>
                                        <li><a href="#">Exchange Markets</a></li>
                                    </ul>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 footer-col wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">
                                    <h4>Contact us</h4>
                                    <ul>
                                        <li>
                                            <div className="foo-social">
                                                <span><a href="#" target="_blank"><i className="fas fa-map-marker-alt" /></a></span>
                                                <p>22/1 Bardeshi, Amin Bazar <br />Dhaka 1348</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="foo-social">
                                                <a href="mailto:email@yourdomain.com" target="_blank"><span><i className="far fa-envelope" /></span>
                                                    <p>email@yourdomain.com</p></a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="foo-social">
                                                <a href="tel:8801679000222" target="_blank"><span><i className="fas fa-phone" /></span>
                                                    <p>+8801679 000 222</p></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="pt-40 pb-20 d-flex flex-wrap justify-content-between footer-bottom-content">
                                        <p className="d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start order-2 order-sm-2 order-md-2 order-lg-1">All rights reserved (c) 2021</p>
                                        <ul className="d-flex flex-wrap order-1 order-sm-1 order-md-1 order-lg-2">
                                            <li><a href="#">Terms &amp; Condition</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Legal</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* //end .footer-container */}
                    <a className="skip_swing backtop" href="#wrapper"><i className="fas fa-chevron-up" /></a>
                </div>

            </>
        </div>
    )
}
