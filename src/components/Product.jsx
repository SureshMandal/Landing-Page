import ProductData from './ProductData';

const Product = () => {
    const handleFilter = (type, value) => {
        console.log(`Filter applied: ${type} - ${value}`);
    };

    return (
        <div className="container">
            <h1 className="text-bold text-primary text-center">Exclusive Deals</h1>
            <section className="filter-section d-flex justify-content-between">
                <div className="filters">
                    <button
                        className="btn btn-outline-dark text-info"
                        onClick={() => handleFilter('category', 'gadgets')}
                    >
                        Gadgets
                    </button>
                    <button
                        className="btn btn-outline-dark text-info"
                        onClick={() => handleFilter('category', 'furniture')}
                    >
                        Furniture
                    </button>
                    <button
                        className="btn btn-outline-dark text-info"
                        onClick={() => handleFilter('category', 'appliances')}
                    >
                        Appliances
                    </button>
                    <button
                        className="btn btn-outline-dark text-info"
                        onClick={() => handleFilter('category', 'books')}
                    >
                        Books
                    </button>
                </div>
                <div className="sorting">
                    <button
                        className="btn btn-outline-dark text-success"
                        onClick={() => handleFilter('sort', 'high-to-low')}
                    >
                        Price: High to Low
                    </button>
                    <button
                        className="btn btn-outline-dark text-success"
                        onClick={() => handleFilter('sort', 'low-to-high')}
                    >
                        Price: Low to High
                    </button>
                </div>
            </section>

            <section className="row">
                {ProductData.map((product) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
                        <div className="card">
                            <img
                                src={product.image}
                                className="card-img-top"
                                alt={product.title}
                                width="100%"
                                height="200px"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.title.slice(0, 20)}</h5>
                                <p className="card-text">${product.price.toFixed(2)}</p>
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Product;
