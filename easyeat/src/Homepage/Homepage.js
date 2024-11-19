import '@fortawesome/fontawesome-free/css/all.min.css';
import backgrounimg from '../assets/images/Backgroundimg.jpeg'
import './Homepage.css'

function Homepage() {
    return (

        <>
            <section className="Most-selling">
                <div className="Most-selling-text">
                    <h4>Most selling</h4>
                    <h1>Most Selling</h1>
                </div>

                <div className="food-cards">
                    <div className="food-card">
                        <img src={backgrounimg} alt="" />
                        <div className="addtofav">
                            <i className="fas fa-heart-circle-plus"></i>
                        </div>
                        <div className="sandwich-price">
                            <h4>150EGP</h4>
                            <div className="rating">
                                <i className="fas fa-star"></i>
                                <span className="">4.5</span>

                            </div>

                        </div>

                        <div className="Sandwich-name">
                            <h4>Burger with Apple Chutney</h4>
                        </div>

                        <div className="additonal-content">
                            <div className="content-item">
                                <i className="fas fa-circle-check"></i>
                                <span>4 Pieces</span>
                            </div>
                            <div className="content-item">
                                <i className="fas fa-circle-check"></i>
                                <span>Spicy Sauce</span>
                            </div>
                        </div>

                        <div className="addtocartbutton">
                            <button>Add To Cart</button>
                        </div>



                    </div>
                    <div className="food-card">
                        <img src={backgrounimg} alt="" />
                        <div className="addtofav">
                            <i className="fas fa-heart-circle-plus"></i>
                        </div>
                        <div className="sandwich-price">
                            <h4>150EGP</h4>
                            <div className="rating">
                                <i className="fas fa-star"></i>
                                <span className="">4.5</span>

                            </div>

                        </div>

                        <div className="Sandwich-name">
                            <h4>Burger with Apple Chutney</h4>
                        </div>

                        <div className="additonal-content">
                            <div className="content-item">
                                <i className="fas fa-circle-check"></i>
                                <span>4 Pieces</span>
                            </div>
                            <div className="content-item">
                                <i className="fas fa-circle-check"></i>
                                <span>Spicy Sauce</span>
                            </div>
                        </div>

                        <div className="addtocartbutton">
                            <button>Add To Cart</button>
                        </div>



                    </div>
                    <div className="food-card">
                        <img src={backgrounimg} alt="" />
                        <div className="addtofav">
                            <i className="fas fa-heart-circle-plus"></i>
                        </div>
                        <div className="sandwich-price">
                            <h4>150EGP</h4>
                            <div className="rating">
                                <i className="fas fa-star"></i>
                                <span className="">4.5</span>

                            </div>

                        </div>

                        <div className="Sandwich-name">
                            <h4>Burger with Apple Chutney</h4>
                        </div>

                        <div className="additonal-content">
                            <div className="content-item">
                                <i className="fas fa-circle-check"></i>
                                <span>4 Pieces</span>
                            </div>
                            <div className="content-item">
                                <i className="fas fa-circle-check"></i>
                                <span>Spicy Sauce</span>
                            </div>
                        </div>

                        <div className="addtocartbutton">
                            <button>Add To Cart</button>
                        </div>



                    </div>
                    <div className="food-card">
                        <img src={backgrounimg} alt="" />
                        <div className="addtofav">
                            <i className="fas fa-heart-circle-plus"></i>
                        </div>
                        <div className="sandwich-price">
                            <h4>150EGP</h4>
                            <div className="rating">
                                <i className="fas fa-star"></i>
                                <span className="">4.5</span>

                            </div>

                        </div>

                        <div className="Sandwich-name">
                            <h4>Burger with Apple Chutney</h4>
                        </div>

                        <div className="additonal-content">
                            <div className="content-item">
                                <i className="fas fa-circle-check"></i>
                                <span>4 Pieces</span>
                            </div>
                            <div className="content-item">
                                <i className="fas fa-circle-check"></i>
                                <span>Spicy Sauce</span>
                            </div>
                        </div>

                        <div className="addtocartbutton">
                            <button>Add To Cart</button>
                        </div>



                    </div>

                </div>

            </section>

        </>

    );
}

export default Homepage