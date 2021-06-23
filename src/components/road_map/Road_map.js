import React from 'react'

export default function road_map() {
    return (
        <>
        <div>
            {/* start wrapper */}
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
                                        <li><a href="token-sale.html">Token Sale</a></li>
                                        <li className="current-menu-item"><a href="road-map.html">Road Map</a></li>
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
                                <h1 className="pb-30 text-white mobile-pb-10">Road Map</h1>
                                <p>Eusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* //end .page-banner */}
                {/* start roadmap-container */}
                <div className="roadmap-container">
                    <div className="container pt-60 pb-30 mobile-pt-60 mobile-pb-10">
                        <div className="row">
                            <div className="col-12 big-title text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                <h3>How it Goes</h3>
                                <h2>The Road Map</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="road-map-timeline">
                                <ul className="road-map-tl-event list-unstyled">
                                    <li className="road-map-row">
                                        <div className="road-map-event event wow bounceInLeft" data-wow-duration="1s" data-wow-delay=".5s">
                                            <div className="content">
                                                <h3>August 20, 2018</h3>
                                                <div className="timeline-cont-info">
                                                    <h5>Idea Generation</h5>
                                                    <p>Sullamco laboris nisi ut aliquip ex onse quamet, consectetur adip isicing elit, sed do eiusmod</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="road-map-row">
                                        <div className="road-map-event event wow bounceInRight" data-wow-duration="1s" data-wow-delay=".5s">
                                            <div className="content">
                                                <h3>September 12, 2018</h3>
                                                <div className="timeline-cont-info">
                                                    <h5>Concept Making</h5>
                                                    <p>Lapatta hoyaga asochsa onec dictum lectus ac sem posuere venenatis. Cras sodales </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="road-map-row">
                                        <div className="road-map-event event wow bounceInLeft" data-wow-duration="1s" data-wow-delay=".5s">
                                            <div className="content">
                                                <h3>November 20, 2018</h3>
                                                <div className="timeline-cont-info">
                                                    <h5>R &amp; D</h5>
                                                    <p>Tormu khtaami beiman ex mauris lacinia mauris ac leo pulvinar vitae cursus odio thakukna</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="road-map-row circle-row">
                                        <div className="road-map-event event wow bounceInRight" data-wow-duration="1s" data-wow-delay=".5s">
                                            <div className="content">
                                                <h3>December 01, 2018</h3>
                                                <div className="timeline-cont-info">
                                                    <h5>The Launch</h5>
                                                    <p>Demet pellentesque urna semper Cras sodales, massa et sagittis aliquam, elit lectus sollicitu</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="road-map-row circle-row2">
                                        <div className="road-map-event event wow bounceInLeft" data-wow-duration="1s" data-wow-delay=".5s">
                                            <div className="content">
                                                <h3>December 23, 2018</h3>
                                                <div className="timeline-cont-info">
                                                    <h5>Pre Sale</h5>
                                                    <p>Amar ei baje sovab ex sliquam vel porttitor lorem. Nam porta ipsum nec tortor intkono din</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* //end .roadmap-container */}
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
            {/* //end #wrapper */}

        </div>
        </>
    )
}
