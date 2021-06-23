import React from 'react';
import {Link} from 'react-router-dom';

export default function Homes() {
    return (
        <div>
            <>
                <div id="wrapper" className="overflow-hidden">
                    <div className="fat-nav" />
                    {/* start header-container */}
                    <header className="header-container position-absolute">
                        <div className="container">
                            <div className="row header-area justify-content-between pt-50 pb-20">
                                <div className="logo">
                                    <a href="index.html"><img src="assets/images/logo.png" alt="" width={216} height={39} /></a>
                                </div>
                                <div className="menu-area d-flex flex-wrap">
                                    <nav className="main-menu">
                                        <ul className="nav">
                                            <li className="current-menu-item menu-item-has-children"><a href="index.html">Home</a>
                                                <ul>
                                                    <li><a href="index.html">Home</a></li>
                                                    <li><a href="index2.html">Home 2</a></li>
                                                    <li><a href="index3.html">Home 3</a></li>
                                                </ul>
                                            </li>
                                            <li><Link to="about">About</Link></li>
                                            <li><Link to="token_sale">Token Sale</Link></li>
                                            <li><Link to="road_map">Road_map</Link></li>
                                            <li><Link to="team">Team</Link></li>
                                            <li><Link to="faq">Faq</Link></li>
                                            <li className="menu-item-has-children"><Link to="blog">Blog</Link>
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
                    {/* start banner-container */}
                    <div className="banner-container">
                        <div className="container">
                            <div className="row banner-content-area justify-content-between">
                                <div className="col-12 col-md-10 col-lg-6 banner-content">
                                    <div className="banner-cont-info text-white wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                        <h5 className="text-white">The True Game Changer</h5>
                                        <h1 className="text-white">UniCrypt will change your experience of Crypto Currency</h1>
                                        <p className="text-white">Sed sollicitudin arcu urna, sit amet pellentesque massa con sequat faucibus. Quisque posuere venenatis cursus.</p>
                                        <a className="unc-btn text-white" href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <a className="btn-scroll skip_swing" href="#section0"><span /></a>
                        </div>
                    </div>
                    {/* //end .banner-container */}
                    {/* start three-col-container */}
                    <div className="three-col-container">
                        <div className="container">
                            <div className="row three-col-area">
                                <div className="col-12 col-md-12 col-lg-4 mb-40 three-col wow zoomIn" data-wow-duration="1s" data-wow-delay=".3s">
                                    <div className="three-col-info pt-60 pb-50 mobile-pb-30 mobile-pt-40">
                                        <div className="three-col-icon">
                                            <img src="assets/images/col-icon1.png" alt="" width={108} height={120} />
                                        </div>
                                        <div className="three-col-cont">
                                            <h3>Secure ICO System</h3>
                                            <p>Sed sollicitudin arcu sect etur adip isici uta magna eget posuere ferme ntum, leo nisl luctus risu</p>
                                            <a className="more-btn" href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-4 mb-40 three-col wow zoomIn" data-wow-duration="1s">
                                    <div className="three-col-info pt-60 pb-50 mobile-pb-30 mobile-pt-40">
                                        <div className="three-col-icon">
                                            <img src="assets/images/col-icon2.png" alt="" width={118} height={120} />
                                        </div>
                                        <div className="three-col-cont">
                                            <h3>Easy System Integration</h3>
                                            <p>Donec dictum lectus ac sem posu eresect etur adipisicing elit, sed do ei usmod tempor incididunt</p>
                                            <a className="more-btn" href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-4 mb-40 three-col wow zoomIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <div className="three-col-info pt-60 pb-50 mobile-pb-30 mobile-pt-40">
                                        <div className="three-col-icon">
                                            <img src="assets/images/col-icon3.png" alt="" width={116} height={120} />
                                        </div>
                                        <div className="three-col-cont">
                                            <h3>One to One Token Sale</h3>
                                            <p>Etiam suscipit urna quis nulla con sequat, at condimentum diam congue. Integer volu sectet</p>
                                            <a className="more-btn" href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //end .three-col-container */}
                    {/* start invented-container */}
                    <div id="section0" className="invented-container overflow-hidden">
                        <div className="container">
                            <div className="row invented-area pt-70 pb-40 mobile-pt-45 justify-content-between">
                                <div className="col-12 col-md-6 col-lg-6 invented-left">
                                    <div className="invented-img wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                                        <img src="assets/images/invented-img.png" alt="" width={626} height={556} />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 invented-cont wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
                                    <h3>We are UniCrypt</h3>
                                    <h2>We invented a new type of Crypto Currency</h2>
                                    <p>Suspendisse molestie lobortis eros, sit amet pellente mod tempor incididunt ut labore et do assa et sagittis aliquam, elit lectulore magna aliqua. Uesestrud exercitation.</p>
                                    <p>Etiam suscipit urna quis nulla conseq tetr adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                                    <a className="unc-btn text-white" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //end .invented-container */}
                    {/* start unc-inventment-container */}
                    <section className="unc-inventment-container overflow-hidden">
                        <div className="container">
                            <div className="row pt-20 pb-90 mobile-pb-20">
                                <div className="col-12 col-md-12 col-lg-8 mobile-pb-0">
                                    <div className="unc-inventment-content pt-110 mobile-pt-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
                                        <h3>Why Choose UniCrypt</h3>
                                        <h2>Buying UniCrypt will be a great inventment for you</h2>
                                        <p>Metetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                                        <div className="unc-inv-col-area">
                                            <div className="unc-inv-col">
                                                <div className="unc-inv-col-row">
                                                    <div className="unc-inv-col-img">
                                                        <img src="assets/images/inv-col-img1.png" alt="" width={60} height={60} />
                                                    </div>
                                                    <div className="unc-inv-col-cont">
                                                        <h4>Multichain with device</h4>
                                                        <p>Vivamus semper ipsum dolex ea commodo consequat.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="unc-inv-col">
                                                <div className="unc-inv-col-row">
                                                    <div className="unc-inv-col-img">
                                                        <img src="assets/images/inv-col-img2.png" alt="" width={60} height={60} />
                                                    </div>
                                                    <div className="unc-inv-col-cont">
                                                        <h4>Initial coin offering</h4>
                                                        <p>Etiam suscipit urna quis nulla eqx ea commodo consequat.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="unc-inv-col">
                                                <div className="unc-inv-col-row">
                                                    <div className="unc-inv-col-img">
                                                        <img src="assets/images/inv-col-img3.png" alt="" width={60} height={60} />
                                                    </div>
                                                    <div className="unc-inv-col-cont">
                                                        <h4>Payment integration</h4>
                                                        <p>Cras sodales, massa et sagittis a vitae cursus odio equat. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="unc-inv-col">
                                                <div className="unc-inv-col-row">
                                                    <div className="unc-inv-col-img">
                                                        <img src="assets/images/inv-col-img4.png" alt="" width={60} height={60} />
                                                    </div>
                                                    <div className="unc-inv-col-cont">
                                                        <h4>Full data ownership</h4>
                                                        <p>Sullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* //end .unc-inventment-container */}
                    {/* start features-bns-container */}
                    <div className="features-bns-container overflow-hidden">
                        <div className="container">
                            <div className="row justify-content-between pt-110 pb-70 mobile-pt-50 mobile-pb-30">
                                <div className="col-12 col-md-5 features-bns-left wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">
                                    <img src="assets/images/features-bns-img.png" alt="" width={600} height={768} />
                                </div>
                                <div className="col-12 col-md-6 features-bns-right mobile-pt-10 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
                                    <div className="features-bns-cont">
                                        <h3>UniCrypt Features</h3>
                                        <h2>UniCrypt has awesome features for business</h2>
                                        <p>Donec dictum lectus ac sem posuere venenatis. Cras sodale eiusmod tempor incididunt ut labore et dolore magna</p>
                                        <div className="features-bns-area">
                                            <div className="features-bns-col-row">
                                                <div className="features-bns-col-img">
                                                    <img src="assets/images/features-bns-icon1.png" alt="" width={60} height={60} />
                                                </div>
                                                <div className="features-bns-col-cont">
                                                    <h4>The true game changer</h4>
                                                    <p>Quisque posuere pulvinar eleifend odo conse quamet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labor</p>
                                                </div>
                                            </div>
                                            <div className="features-bns-col-row">
                                                <div className="features-bns-col-img">
                                                    <img src="assets/images/features-bns-icon2.png" alt="" width={62} height={62} />
                                                </div>
                                                <div className="features-bns-col-cont">
                                                    <h4>Solid blockchain infrastructure</h4>
                                                    <p>Nam porta ipsum nec tortor interd dilero naedo conse quamet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor</p>
                                                </div>
                                            </div>
                                            <div className="features-bns-col-row">
                                                <div className="features-bns-col-img">
                                                    <img src="assets/images/features-bns-icon3.png" alt="" width={60} height={60} />
                                                </div>
                                                <div className="features-bns-col-cont">
                                                    <h4>Global system intigration</h4>
                                                    <p>Etiam at massa ut ipsum viverra dictum comuem cetetur adipisicing elit, sed do eiusmod tempor incididunt ut labor</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //end .features-bns-container */}
                    {/* start unc-happenning-container */}
                    <div className="unc-happenning-container overflow-hidden">
                        <div className="container">
                            <div className="row justify-content-between pt-110 pb-110 mobile-pt-60 mobile-pb-60 unc-happenning-content">
                                <div className="col-12 col-md-5 unc-happenning-left wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                    <h3>Token Sale</h3>
                                    <h2>UniCrypt live selling is happenning now</h2>
                                    <p>Metetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div className="col-12 col-md-6 unc-happenning-right wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
                                    <div className="clockdiv-area">
                                        <div id="clock" className="d-flex flex-wrap justify-content-center">
                                            <div className="clockdiv_column">
                                                <div className="clocktimes">
                                                    <span id="days" />
                                                    <small>Days</small>
                                                </div>
                                            </div>
                                            <div className="clockdiv_column">
                                                <div className="clocktimes">
                                                    <span id="hours" />
                                                    <small>Hours</small>
                                                </div>
                                            </div>
                                            <div className="clockdiv_column">
                                                <div className="clocktimes">
                                                    <span id="mins" />
                                                    <small>Mins</small>
                                                </div>
                                            </div>
                                            <div className="clockdiv_column">
                                                <div className="clocktimes">
                                                    <span id="secs" />
                                                    <small>Secs</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="token-amount-area d-flex flex-wrap justify-content-between">
                                        <div className="token-amount-col">
                                            <h5>Start Date</h5>
                                            <p>April 20, 2018 - 20.00 Am GMT</p>
                                        </div>
                                        <div className="token-amount-col">
                                            <h5>End Date</h5>
                                            <p>April 20, 2018 - 20.00 Am GMT</p>
                                        </div>
                                        <div className="token-amount-col">
                                            <h5>Total Token amount</h5>
                                            <p>1,000,000.000 ICC</p>
                                        </div>
                                        <div className="token-amount-col">
                                            <h5>Exchange Rate</h5>
                                            <p>1 ETH = 1000 ICC, 1 BTC = 2000 ICC</p>
                                        </div>
                                        <div className="token-amount-col">
                                            <h5>Currencies</h5>
                                            <p>ETH, BTC</p>
                                        </div>
                                        <div className="token-amount-col">
                                            <h5>Minimum Amount</h5>
                                            <p>10 ETH / BTC</p>
                                        </div>
                                    </div>
                                    <a className="unc-btn text-white" href="#">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //end .unc-happenning-container */}
                    {/* start .container-fluid */}
                    <div className="container-fluid">
                        <div className="row pt-110 pb-50 mobile-pt-60 mobile-pb-0">
                            <div className="col-12 big-title text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                                <h3>Buy Our Token</h3>
                                <h2>Token Management</h2>
                            </div>
                        </div>
                        <div className="chart-container d-flex flex-wrap pb-110 mobile-pb-60 mobile-pt-20">
                            <div className="chart-col wow zoomIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="chart-token d-flex flex-wrap align-items-center justify-content-sm-center justify-content-lg-start mb-50">
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
                                <div className="chart-token d-flex flex-wrap align-items-center order-lg-2 justify-content-lg-end justify-content-sm-center justify-content-md-center mobile-pt-10 mb-50">
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
                    {/* start benefits-container */}
                    <div className="benefits-container overflow-hidden">
                        <div className="container">
                            <div className="row pt-110 mobile-pt-60">
                                <div className="col-12 big-title white-text text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <h3>How You Get Benefited</h3>
                                    <h2>Benefits of UniCrypt Hoders</h2>
                                </div>
                            </div>
                            <div className="row justify-content-between benefits-content pt-40 pb-80 mobile-pt-10 mobile-pb-40">
                                <div className="col-12 col-md-6 benefits-left wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">
                                    <img src="assets/images/mgm-img.png" alt="" width={736} height={464} />
                                </div>
                                <div className="col-12 col-md-6 benefits-right wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
                                    <div className="benefits-cont">
                                        <p>Etiam suscipit urna quis nulla consequat, at condimentum unt ut labore et dolore magna alienim ad minim veniam</p>
                                        <div className="bnf-area pt-30 mt-2 mobile-mt-0">
                                            <div className="bnf-col-row pb-20 mobile-pb-10">
                                                <div className="bnf-col-img">
                                                    <i className="fas fa-check" />
                                                </div>
                                                <div className="bnf-col-cont">
                                                    <p>Cras sodales, massa et sagittis aliquam, elit lect veniam, quis nostrud exmco labtomra keu kidite paro prem oris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                            </div>
                                            <div className="bnf-col-row pb-20 mobile-pb-10">
                                                <div className="bnf-col-img">
                                                    <i className="fas fa-check" />
                                                </div>
                                                <div className="bnf-col-cont">
                                                    <p>Integer volutpat aliquam felisque posuere , quis nostrud exmco labtomra keu kidite paro prem oris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                            </div>
                                            <div className="bnf-col-row pb-20 mobile-pb-10">
                                                <div className="bnf-col-img">
                                                    <i className="fas fa-check" />
                                                </div>
                                                <div className="bnf-col-cont">
                                                    <p>Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exmco labtomra keu kidite paro prem oris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //end .benefits-container */}
                    {/* start roadmap-container */}
                    <div className="roadmap-container">
                        <div className="container pt-110 pb-80 mobile-pt-60 mobile-pb-25">
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
                    {/* start team */}
                    <div className="team overflow-hidden">
                        <div className="container">
                            <div className="row pt-110 mobile-pt-60 ">
                                <div className="col-12 big-title white-text text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                                    <h3>Team Members</h3>
                                    <h2>Our Amazing Team</h2>
                                </div>
                            </div>
                            <div className="row justify-content-center team-col-area pt-40 pb-60 mobile-pt-10 mobile-pb-20">
                                <div className="col-12 col-md-4 col-lg-3 team-col pb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                    <div className="team-mem">
                                        <div className="team-mem-info">
                                            <a href="#"><img src="assets/images/member-img1.png" alt="" width={197} height={197} /></a>
                                        </div>
                                    </div>
                                    <div className="team-cont">
                                        <h3><a href="#">Tom Anderson</a></h3>
                                        <small>Founder</small>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-3 team-col pb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                    <div className="team-mem">
                                        <div className="team-mem-info">
                                            <a href="#"><img src="assets/images/member-img2.png" alt="" width={197} height={197} /></a>
                                        </div>
                                    </div>
                                    <div className="team-cont">
                                        <h3><a href="#">Jane Doe</a></h3>
                                        <small>CEO</small>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-3 team-col pb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                    <div className="team-mem">
                                        <div className="team-mem-info">
                                            <a href="#"><img src="assets/images/member-img3.png" alt="" width={197} height={197} /></a>
                                        </div>
                                    </div>
                                    <div className="team-cont">
                                        <h3><a href="#">Richard Johnson</a></h3>
                                        <small>Operating Manager</small>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-3 team-col pb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                    <div className="team-mem">
                                        <div className="team-mem-info">
                                            <a href="#"><img src="assets/images/member-img4.png" alt="" width={197} height={197} /></a>
                                        </div>
                                    </div>
                                    <div className="team-cont">
                                        <h3><a href="#">Sarah Jenifer</a></h3>
                                        <small>Lead Developer</small>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-3 team-col pb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                    <div className="team-mem">
                                        <div className="team-mem-info">
                                            <a href="#"><img src="assets/images/member-img5.png" alt="" width={197} height={197} /></a>
                                        </div>
                                    </div>
                                    <div className="team-cont">
                                        <h3><a href="#">Paula Neilson</a></h3>
                                        <small>Advisor</small>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-3 team-col pb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                    <div className="team-mem">
                                        <div className="team-mem-info">
                                            <a href="#"><img src="assets/images/member-img6.png" alt="" width={197} height={197} /></a>
                                        </div>
                                    </div>
                                    <div className="team-cont">
                                        <h3><a href="#">Robarto Mike</a></h3>
                                        <small>Advisor</small>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-3 team-col pb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
                                    <div className="team-mem">
                                        <div className="team-mem-info">
                                            <a href="#"><img src="assets/images/member-img4.png" alt="" width={197} height={197} /></a>
                                        </div>
                                    </div>
                                    <div className="team-cont">
                                        <h3><a href="#">Hannah Harrison</a></h3>
                                        <small>Advisor</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //end .team */}
                    {/* start faq */}
                    <div className="faq pt-110 mobile-pt-60 mobile-pb-20 overflow-hidden">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 big-title text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                    <h3>UniCrypt Help Desk</h3>
                                    <h2>Frequently Asked Questions</h2>
                                </div>
                            </div>
                            <div className="row pb-60 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                <div className="horizontal_tab_data">
                                    <div id="horizontalTab">
                                        <ul className="resp-tabs-list">
                                            <li>General</li>
                                            <li>Token</li>
                                            <li>Bitcoin</li>
                                            <li>Cryptocurrency</li>
                                            <li>Blockchain</li>
                                        </ul>
                                        <div className="resp-tabs-container">
                                            <div>
                                                <div className="tab_inner">
                                                    <div className="d-flex flex-wrap justify-content-between tab_content">
                                                        <div className="tab-col">
                                                            <h3>What is Crypto Currency ?</h3>
                                                            <p>Praesent dictum eu nibh eget pretium odo conse quamet, conon sectetur adipisicing elit, sed do eiusmod tempor incididunt utahu labor Lorem ipsum dolor sit amet, consectetur</p>
                                                        </div>
                                                        <div className="tab-col">
                                                            <h3>What exactly UniCrypt is ?</h3>
                                                            <p>Sullamco laboris nisi ut aliquip ex ea commodo conse quamet, con sectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor Lorem ipsum dolor sit amet, consectetur</p>
                                                        </div>
                                                        <div className="tab-col">
                                                            <h3>How to exchange UniCrypt ?</h3>
                                                            <p>Fusce diam eros, dapibus at rutrum ac, iaculis eu or quamet, con sectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor Lorem ipsum dolor sit amet, consectetur</p>
                                                        </div>
                                                        <div className="tab-col">
                                                            <h3>How to get benefited with Unicrypt ?</h3>
                                                            <p>Proin sed commodo metus. Phasellus arcu nibh, luct et, con se ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labor Lorem ipsum dolor sit amet, consectetur</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="tab_inner">
                                                    <div className="d-flex flex-wrap justify-content-between tab_content">
                                                        <div className="tab-col">
                                                            <h3>What is Crypto Currency ?</h3>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra a lorem vitae consequat. Donec consequat nec felis vitae suscipit. Etiam ultricies elit id laoreet ultricies.</p>
                                                        </div>
                                                        <div className="tab-col">
                                                            <h3>What exactly UniCrypt is ?</h3>
                                                            <p>Etiam eleifend faucibus gravida. Vestibulum mattis posuere rutrum. Quisque eu diam at arcu accumsan sollicitudin nec a nibh. Nullam consequat laoreet condimentum. Sed id hendrerit ipsum</p>
                                                        </div>
                                                        <div className="tab-col">
                                                            <h3>How to exchange UniCrypt ?</h3>
                                                            <p>Sed ut lectus iaculis, faucibus quam et, fermentum quam. Praesent massa ex, egestas ut felis a, vehicula aliquet elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada accumsan urna eu iaculis.</p>
                                                        </div>
                                                        <div className="tab-col">
                                                            <h3>How to get benefited with Unicrypt ?</h3>
                                                            <p>Donec eu eros ullamcorper, dictum dolor et, viverra lacus. Nunc luctus purus quis porta sagittis. Proin egestas nunc sit amet dapibus iaculis. Phasellus ultrices bibendum urna eget aliquet. Pellentesque in leo semper, egestas metus non, accumsan enim.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="tab_inner">
                                                    <div className="d-flex flex-wrap justify-content-between tab_content">
                                                        <div className="tab-col">
                                                            <h3>What is Crypto Currency ?</h3>
                                                            <p>Praesent dictum eu nibh eget pretium odo conse quamet, conon sectetur adipisicing elit, sed do eiusmod tempor incididunt utahu labor Lorem ipsum dolor sit amet, consectetur</p>
                                                        </div>
                                                        <div className="tab-col">
                                                            <h3>What exactly UniCrypt is ?</h3>
                                                            <p>Sullamco laboris nisi ut aliquip ex ea commodo conse quamet, con sectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor Lorem ipsum dolor sit amet, consectetur</p>
                                                        </div>
                                                        <div className="tab-col">
                                                            <h3>How to exchange UniCrypt ?</h3>
                                                            <p>Fusce diam eros, dapibus at rutrum ac, iaculis eu or quamet, con sectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor Lorem ipsum dolor sit amet, consectetur</p>
                                                        </div>
                                                        <div className="tab-col">
                                                            <h3>How to get benefited with Unicrypt ?</h3>
                                                            <p>Proin sed commodo metus. Phasellus arcu nibh, luct et, con se ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labor Lorem ipsum dolor sit amet, consectetur</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="tab_inner">
                                                    <div className="d-flex flex-wrap justify-content-between tab_content">
                                                        <div className="tab-col">
                                                            <h3>What is Crypto Currency ?</h3>
                                                            <p>Aenean lacinia elementum est, id finibus nunc maximus vel. Duis non ipsum sodales, fermentum nisl vel, cursus leo. Suspendisse sit amet ante feugiat, ullamcorper diam eu, mollis mi. Proin id nulla metus. </p>
                                                        </div>
                                                        <div className="tab-col">
                                                            <h3>What exactly UniCrypt is ?</h3>
                                                            <p>Duis elementum feugiat nisi eu sollicitudin. Nullam sit amet tincidunt dolor. Curabitur porttitor aliquam lacus, ut dictum diam fringilla ut.</p>
                                                        </div>
                                                        <div className="tab-col">
                                                            <h3>How to exchange UniCrypt ?</h3>
                                                            <p>Quisque a pharetra lorem. Etiam in eros malesuada, vestibulum massa non, mollis metus. Nunc feugiat sem turpis, euismod pharetra est maximus ultrices. Nam ultrices sem ut nisi sollicitudin laoreet.</p>
                                                        </div>
                                                        <div className="tab-col">
                                                            <h3>How to get benefited with Unicrypt ?</h3>
                                                            <p>Etiam porta, erat ut pretium porta, erat turpis lobortis enim, sit amet blandit felis tellus tempus felis. Quisque vitae ornare mauris. Ut eleifend massa vitae leo fermentum ullamcorper.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="tab_inner">
                                                    <div className="d-flex flex-wrap justify-content-between tab_content">
                                                        <div className="tab-col">
                                                            <h3>What is Crypto Currency ?</h3>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra a lorem vitae consequat. Donec consequat nec felis vitae suscipit. Etiam ultricies elit id laoreet ultricies.</p>
                                                        </div>
                                                        <div className="tab-col">
                                                            <h3>What exactly UniCrypt is ?</h3>
                                                            <p>Etiam eleifend faucibus gravida. Vestibulum mattis posuere rutrum. Quisque eu diam at arcu accumsan sollicitudin nec a nibh. Nullam consequat laoreet condimentum. Sed id hendrerit ipsum</p>
                                                        </div>
                                                        <div className="tab-col">
                                                            <h3>How to exchange UniCrypt ?</h3>
                                                            <p>Sed ut lectus iaculis, faucibus quam et, fermentum quam. Praesent massa ex, egestas ut felis a, vehicula aliquet elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada accumsan urna eu iaculis.</p>
                                                        </div>
                                                        <div className="tab-col">
                                                            <h3>How to get benefited with Unicrypt ?</h3>
                                                            <p>Donec eu eros ullamcorper, dictum dolor et, viverra lacus. Nunc luctus purus quis porta sagittis. Proin egestas nunc sit amet dapibus iaculis. Phasellus ultrices bibendum urna eget aliquet. Pellentesque in leo semper, egestas metus non, accumsan enim.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //end .faq */}
                    {/* start partner */}
                    <div className="partner">
                        <div className="container">
                            <div className="row pt-110 pb-40 mobile-pt-60 mobile-pb-10">
                                <div className="big-title white-text text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                    <h3>Our Partners</h3>
                                    <h2>We Worked with Brands</h2>
                                </div>
                            </div>
                            <div className="row justify-content-center pb-60 partner-area mobile-pb-20 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                <div className="col-6 col-md-3 col-lg-2 mb-50 partner-logo">
                                    <a href="#">
                                        <img src="assets/images/brands-logo1.png" alt="" width={105} height={49} />
                                    </a>
                                </div>
                                <div className="col-6 col-md-3 col-lg-2 mb-50 partner-logo">
                                    <a href="#">
                                        <img src="assets/images/brands-logo2.png" alt="" width={106} height={49} />
                                    </a>
                                </div>
                                <div className="col-6 col-md-3 col-lg-2 mb-50 partner-logo">
                                    <a href="#">
                                        <img src="assets/images/brands-logo3.png" alt="" width={126} height={49} />
                                    </a>
                                </div>
                                <div className="col-6 col-md-3 col-lg-2 mb-50 partner-logo">
                                    <a href="#">
                                        <img src="assets/images/brands-logo4.png" alt="" width={82} height={49} />
                                    </a>
                                </div>
                                <div className="col-6 col-md-3 col-lg-2 mb-50 partner-logo">
                                    <a href="#">
                                        <img src="assets/images/brands-logo5.png" alt="" width={67} height={49} />
                                    </a>
                                </div>
                                <div className="col-6 col-md-3 col-lg-2 mb-50 partner-logo">
                                    <a href="#">
                                        <img src="assets/images/brands-logo6.png" alt="" width={126} height={49} />
                                    </a>
                                </div>
                                <div className="col-6 col-md-3 col-lg-2 mb-50 partner-logo">
                                    <a href="#">
                                        <img src="assets/images/brands-logo7.png" alt="" width={106} height={49} />
                                    </a>
                                </div>
                                <div className="col-6 col-md-3 col-lg-2 mb-50 partner-logo">
                                    <a href="#">
                                        <img src="assets/images/brands-logo8.png" alt="" width={119} height={49} />
                                    </a>
                                </div>
                                <div className="col-6 col-md-3 col-lg-2 mb-50 partner-logo">
                                    <a href="#">
                                        <img src="assets/images/brands-logo9.png" alt="" width={93} height={49} />
                                    </a>
                                </div>
                                <div className="col-6 col-md-3 col-lg-2 mb-50 partner-logo">
                                    <a href="#">
                                        <img src="assets/images/brands-logo10.png" alt="" width={138} height={49} />
                                    </a>
                                </div>
                                <div className="col-6 col-md-3 col-lg-2 mb-50 partner-logo">
                                    <a href="#">
                                        <img src="assets/images/brands-logo11.png" alt="" width={143} height={49} />
                                    </a>
                                </div>
                                <div className="col-6 col-md-3 col-lg-2 mb-50 partner-logo">
                                    <a href="#">
                                        <img src="assets/images/brands-logo12.png" alt="" width={142} height={49} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //end .partner */}
                    {/* start contact-container */}
                    <div className="contact-container pt-40">
                        <div className="contact-content">
                            <div className="container">
                                <div className="row justify-content-between mb-2 pt-70 pb-90 mobile-pt-20 mobile-pb-30 contact-content-area">
                                    <div className="col-12 col-md-5 contact-info wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                        <div className="contact-us">
                                            <h3>Contact us</h3>
                                            <h2>Got A Question?</h2>
                                            <p>Nam aliquam tempus sodale vestibulum con dimentum est id vulputat  auctor lacus eget enim melahobe hobe na</p>
                                            <ul className="contact-social">
                                                <li>
                                                    <div className="social-row">
                                                        <a href="tel:88012345678" target="_blank"><span><i className="fas fa-phone" /></span>
                                                            <p>+880 - 1234 - 5678</p></a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="social-row">
                                                        <a href="mailto:hello@unicrypt.com" target="_blank"><span><i className="far fa-envelope" /></span>
                                                            <p>hello@unicrypt.com</p></a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="social-row">
                                                        <span><a href="#" target="_blank"><i className="fas fa-map-marker-alt" /></a></span>
                                                        <p>20, Bardeshi, Amin Bazar, <br />Savar, Dhaka</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                        <form className="contact-form" action="assets/mail.php" method="POST">
                                            <div className="d-flex flex-wrap form-col">
                                                <div className="form-group">
                                                    <input className="form-control required" type="text" name="fname" placeholder="Your name" />
                                                    <span className="alert-error" />
                                                </div>
                                                <div className="form-group">
                                                    <input className="form-control required" type="email" name="email" placeholder="Your email" />
                                                    <span className="alert-error" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control required" type="text" name="subject" placeholder="Subject" />
                                                <span className="alert-error" />
                                            </div>
                                            <div className="form-group">
                                                <textarea className="form-control required" name="message" rows={7} cols={7} placeholder="Start writing here" defaultValue={""} />
                                                <span className="alert-error" />
                                            </div>
                                            <div className="submit-col">
                                                <input type="submit" defaultValue="Submit" />
                                            </div>
                                            <div className="col-12 contact-message" />
                                        </form>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="newsletter-content wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                            <h2>Subscribe to Our Newsletter</h2>
                                            <div className="form-group newsletter-field">
                                                <form target="_blank" action="https://bootstrapshaper.us6.list-manage.com/subscribe/post?u=0061a1f05f345a8f34416646c&id=000949c92f" method="post" noValidate>
                                                    <input className="form-control" type="email" name="EMAIL" placeholder="Your email" />
                                                    <input type="submit" defaultValue />
                                                </form>
                                                {/* submission error message */}
                                                <div className="nl-error" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //end .contact-container */}
                    {/* start footer-container */}
                    <footer className="footer-container footer-curve">
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
