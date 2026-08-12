import { FiChevronRight } from 'react-icons/fi';

const ProductSection = ({ products, onAddToCart }) => {
  return (
    <div className="container my-5">
      {/* الهيدر الخاص بالسيكشن مع الخط الأزرق الأسفل */}
      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
        <h5 className="fw-bold m-0 position-relative pb-2">
          Grab the best deal on <span className="text-primary-blue">Smartphones</span>
          <div className="active-title-line"></div>
        </h5>
        <a href="#all" className="text-decoration-none text-muted small d-flex align-items-center gap-1 fw-semibold">
          View All <FiChevronRight />
        </a>
      </div>

      {/* قائمة المنتجات */}
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div 
              className="product-card h-100 position-relative p-3 rounded-4 bg-light-card cursor-pointer"
              onClick={() => onAddToCart && onAddToCart(product)}
            >
              {/* شارة الخصم الزرقاء في الأعلى يميناً */}
              <div className="discount-badge">
                {product.discount}% OFF
              </div>

              {/* صورة المنتج */}
              <div className="text-center my-3 product-img-wrapper">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="img-fluid product-img"
                />
              </div>

              {/* تفاصيل المنتج */}
              <div className="product-info mt-auto">
                <h6 className="product-title fw-semibold text-dark text-truncate mb-1" title={product.title}>
                  {product.title}
                </h6>

                <div className="d-flex align-items-center gap-2 mb-1">
                  <span className="fw-bold fs-6 text-dark">₹{product.price.toLocaleString()}</span>
                  <span className="text-muted text-decoration-line-through small">₹{product.originalPrice.toLocaleString()}</span>
                </div>

                <div className="text-success small fw-semibold">
                  Save - ₹{product.saveAmount.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;