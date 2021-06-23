import React from 'react'

export default function blog_single() {
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
                                            <li><a href="token-sale.html">Token Sale</a></li>
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
                                    <h1 className="pb-30 text-white mobile-pb-10">Single Post</h1>
                                    <p>Eusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //end .page-banner */}
                    {/*start blog-container*/}
                    <div className="blog-container">
                        <div className="container">
                            <div className="row pt-110 pb-80 mobile-pt-60 mobile-pb-30">
                                <div className="col-12 col-md-12 col-lg-8">
                                    <div className="blog-content-left">{/*start container_left*/}
                                        <div className="blog-item-row wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                            <div className="sibgle-blog-img">
                                                <img src="assets/images/blog-img10.png" width={734} height={413} alt="" />
                                            </div>
                                            <div className="sibgle-blog-content">
                                                <h2>Duis facilisis tellus ac tortor aliquam sed pulvinar tellus commodo</h2>
                                                <div className="post-meta pt-20 pb-30">
                                                    <ul className="d-flex flex-wrap">
                                                        <li><a href="#"><i className="fas fa-folder-open" /> Potography</a></li>
                                                        <li><a href="#"><i className="fas fa-user" /> Jewel Khan</a></li>
                                                        <li><i className="far fa-clock" /> Sept 25, 2018</li>
                                                        <li><a href="#"><i className="fas fa-comments" /> 33 Comments</a></li>
                                                    </ul>
                                                </div>
                                                <p>Liusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min im veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip dresch nsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ex ercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
                                                <p>Lesno cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupi datat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem ac cusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt expli cabo. Nemo enim ipsam voluptatem quia voluptas sit</p>
                                                <blockquote>
                                                    <p>Meiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ex ercitation ullamco labo ris nisi ut alijse achelagne</p>
                                                    <span>Tomas Jefferson, <small>Web Developer</small></span>
                                                </blockquote>
                                                <p>Amaspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui do lorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dotumi jodi nodi hou ai motojege thakachad amar chatok chlkhe tumi hobe durer akash tumi jodi nodi ou ami hobo dure thaka chad lore magnam ali quam quaerat voluptatem.</p>
                                                <div className="social-list d-flex flex-wrap justify-content-between align-items-center pt-20 pb-10">
                                                    <div className="tags-list">
                                                        <a href="#">Crypto</a>
                                                        <a href="#">Travelling</a>
                                                    </div>
                                                    <ul className="blog-social d-flex flex-wrap">
                                                        <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                                                        <li className="blog-social-tw"><a href="#" target="_blank"><i className="fab fa-twitter" /></a></li>
                                                        <li className="blog-social-gop"><a href="#" target="_blank"><i className="fab fa-google-plus-g" /></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="prev-next-area d-flex flex-wrap justify-content-between pb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                            <a className="prev-link" href="#">Prev Post</a>
                                            <a className="next-link" href="#">Next Post</a>
                                        </div>
                                        <div className="blog-item-row wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                            <div className="author-box">
                                                <div className="author-img">
                                                    <a href="#"><img src="assets/images/comt-img1.png" width={120} height={120} alt="" /></a>
                                                </div>
                                                <div className="author-info">
                                                    <h3>Jewel Khan</h3>
                                                    <p>Aliquam eu diam libero. Nam scelerisque justo nec elementum  enim ad min im veniam, quis nostrud exercita tion ullamco osn laboris nisi ut aliquip dresch nsecte</p>
                                                    <ul className="blog-social d-flex flex-wrap">
                                                        <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                                                        <li className="blog-social-tw"><a href="#" target="_blank"><i className="fab fa-twitter" /></a></li>
                                                        <li className="blog-social-gop"><a href="#" target="_blank"><i className="fab fa-google-plus-g" /></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-postcomment wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                            <div className="postcomment-box">
                                                <h2>33 Comments</h2>
                                                <div className="postcomment-area">
                                                    <div className="comment wow fadeInLeft">
                                                        <div className="comment-author avatar_image">
                                                            <img src="assets/images/comt-img2.png" alt="" width={96} height={96} />
                                                        </div>
                                                        <div className="comment-meta">
                                                            <h4><a href="#" rel="external nofollow" className="url">Nayla Rohoman</a></h4>
                                                            <div className="posttimeinfo">
                                                                <small>- 22 Hours ago</small>
                                                            </div>
                                                        </div>
                                                        <div className="comment-content">
                                                            <p>Proin mattis libero et ultricies conse lore magna aliqua. Ut enim ad mnc aliquam nec. Duis at lorem ac turpis tempus inter onois nisi ut aliquip dresch nsecte seponre amanis.</p>
                                                            <a rel="nofollow" className="comment-reply-link" href="#" aria-label="Reply to A WordPress Commenter">Reply</a>
                                                        </div>
                                                    </div>{/* #comment-## */}
                                                </div>
                                                <div className="comment depth-2 wow fadeInLeft">
                                                    <div className="comment-author avatar_image">
                                                        <img src="assets/images/comt-img3.png" alt="" width={96} height={96} />
                                                    </div>
                                                    <div className="comment-meta">
                                                        <h4><a href="#" rel="external nofollow" className="url">Nayla Rohoman</a></h4>
                                                        <div className="posttimeinfo">
                                                            <small>- 22 Hours ago</small>
                                                        </div>
                                                    </div>
                                                    <div className="comment-content">
                                                        <p>Vivamus feugiat enim non nunc vestibu dolore Ut enurus egestas at. Fusce odio orci, consectetur ut portita tion ullam coaliquip dresch nsecte</p>
                                                        <a rel="nofollow" className="comment-reply-link" href="#" aria-label="Reply to A WordPress Commenter">Reply</a>
                                                    </div>
                                                    <div className="comment depth-3 wow fadeInLeft">
                                                        <div className="comment-author avatar_image">
                                                            <img src="assets/images/comt-img4.png" alt="" width={96} height={96} />
                                                        </div>
                                                        <div className="comment-meta">
                                                            <h4><a href="#" rel="external nofollow" className="url">Nayla Rohoman</a></h4>
                                                            <div className="posttimeinfo">
                                                                <small>- 22 Hours ago</small>
                                                            </div>
                                                        </div>
                                                        <div className="comment-content">
                                                            <p>Liusmod tempor incididunt ut labore et dolore Ut enim ad min im veniam, quis nostrud exercita tion ullam coy laboris nisi ut aliquip dresch nsecte</p>
                                                            <a rel="nofollow" className="comment-reply-link" href="#" aria-label="Reply to A WordPress Commenter">Reply</a>
                                                        </div>
                                                    </div>{/* #comment-## */}
                                                </div>{/* #comment-## */}
                                                <div className="postcomment-area">
                                                    <div className="comment wow fadeInLeft">
                                                        <div className="comment-author avatar_image">
                                                            <img src="assets/images/comt-img5.png" alt="" width={96} height={96} />
                                                        </div>
                                                        <div className="comment-meta">
                                                            <h4><a href="#" rel="external nofollow" className="url">Nayla Rohoman</a></h4>
                                                            <div className="posttimeinfo">
                                                                <small>- 22 Hours ago</small>
                                                            </div>
                                                        </div>
                                                        <div className="comment-content">
                                                            <p>Interdum et malesuada fames ac ore magna aliqua. Ut enim ad min im veniaquam ac. Vivamus feugiat enim non nunc vestibul si ut aliquip dresch nsecte niserta sara arkisu bosean.</p>
                                                            <a rel="nofollow" className="comment-reply-link" href="#" aria-label="Reply to A WordPress Commenter">Reply</a>
                                                        </div>
                                                    </div>{/* #comment-## */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-item-row mt-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                            <div className="postcomment-box">
                                                <div role="form" id="blogform">
                                                    <div id="respond" className="comment-respond">
                                                        <h4 id="reply-title" className="comment-reply-title"> <small><a rel="nofollow" id="cancel-comment-reply-link" href="#">Add A Comment</a></small></h4>
                                                        <form action="#" method="post" id="commentform" className="comment-form">
                                                            <div className="input-field w-100">
                                                                <textarea id="comment" aria-required="true" cols={30} rows={10} placeholder="Your comment" defaultValue={""} />
                                                            </div>
                                                            <div className="input-field-area d-flex flex-wrap">
                                                                <div className="input-field">
                                                                    <input id="author" className="full_name" placeholder="Your name" size={30} type="text" />
                                                                </div>
                                                                <div className="input-field">
                                                                    <input id="email" className="email_address" placeholder="Your email" size={30} type="email" />
                                                                </div>
                                                                <div className="input-field">
                                                                    <input id="website" className="website_address" placeholder="Your website" size={30} type="text" />
                                                                </div>
                                                            </div>
                                                            <p className="form-submit">
                                                                <input name="submit" id="submit" className="submit-comment" defaultValue="Submit" type="submit" />
                                                                <input name="comment_post_ID" defaultValue={1} id="comment_post_ID" type="hidden" />
                                                                <input name="comment_parent" id="comment_parent" defaultValue={0} type="hidden" />
                                                            </p>
                                                        </form>
                                                    </div>{/* #respond */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/*//end .container_left*/}
                                </div>
                                <div className="col-12 col-md-12 col-lg-4">
                                    <div className="sidebar mobile-pt-30">{/*start sidebar*/}
                                        <div className="form-group search-field wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                            <form action="#">
                                                <input className="form-control" type="search" name="email" placeholder="Search" />
                                                <button className="btn search-btn" type="submit"><i className="fas fa-search" /></button>
                                            </form>
                                        </div>
                                        <div className="sidebar-post-col wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                            <h3><a href="#">Recent Posts</a></h3>
                                            <div className="sidebar-post-cat">
                                                <div className="sidebar-post-row">
                                                    <div className="sidebar-post-img">
                                                        <a href="#"><img src="assets/images/blog-img7.png" width={71} height={71} alt="" /></a>
                                                    </div>
                                                    <div className="sidebar-post-content">
                                                        <h4><a href="#">Tomra keu dikete paeo dum vitae tristi</a></h4>
                                                        <small>Sept 28, 2018</small>
                                                    </div>
                                                </div>
                                                <div className="sidebar-post-row">
                                                    <div className="sidebar-post-img">
                                                        <a href="#"><img src="assets/images/blog-img8.png" width={71} height={71} alt="" /></a>
                                                    </div>
                                                    <div className="sidebar-post-content">
                                                        <h4><a href="#">Etiam ipsum nisi biben dum vitae tristi</a></h4>
                                                        <small>Aug 13, 2018</small>
                                                    </div>
                                                </div>
                                                <div className="sidebar-post-row">
                                                    <div className="sidebar-post-img">
                                                        <a href="#"><img src="assets/images/blog-img9.png" width={71} height={71} alt="" /></a>
                                                    </div>
                                                    <div className="sidebar-post-content">
                                                        <h4><a href="#">Setoa amar pahse ano bose chairos ne</a></h4>
                                                        <small>June 24, 2018</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sidebar-post-col wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                            <h3><a href="#">category</a></h3>
                                            <div className="sidebar-post-cat">
                                                <ul>
                                                    <li><a href="#">Cryptocurrency <small>( 48 )</small></a></li>
                                                    <li><a href="#">Bitcoin <small>( 24 )</small></a></li>
                                                    <li><a href="#">UniCrypt <small>( 41 )</small></a></li>
                                                    <li><a href="#">Block Chain <small>( 4 )</small></a></li>
                                                    <li><a href="#">ICO Token <small>( 40 )</small></a></li>
                                                    <li><a href="#">Data Mining <small>( 78 )</small></a></li>
                                                    <li><a href="#">Cryptocoin <small>( 25 )</small></a></li>
                                                    <li><a href="#">Etharium <small>( 16)</small></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="sidebar-post-col wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                            <h3><a href="#">TAgs</a></h3>
                                            <div className="sidebar-post-cat">
                                                <div className="tags-list">
                                                    <a href="#">Web Design</a>
                                                    <a href="#">Weeding</a>
                                                    <a href="#">Photography</a>
                                                    <a href="#">Behance</a>
                                                    <a href="#">Picky</a>
                                                    <a href="#">Travelling</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sidebar-post-col wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                            <h3><a href="#">Follow us</a></h3>
                                            <div className="sidebar-post-cat">
                                                <div className="sidebar-social">
                                                    <ul className="d-flex flex-wrap">
                                                        <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                                                        <li className="sid-twitter"><a href="#" target="_blank"><i className="fab fa-twitter" /></a></li>
                                                        <li className="sid-gplus"><a href="#" target="_blank"><i className="fab fa-google-plus-g" /></a></li>
                                                        <li className="sid-linkedin"><a href="#" target="_blank"><i className="fab fa-linkedin-in" /></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/*//end .sidebar*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*//end .blog-container*/}
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
