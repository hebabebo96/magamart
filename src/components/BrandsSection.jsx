import { FiChevronRight } from 'react-icons/fi';

const brands = [
  {
    id: 1,
    name: 'IPHONE',
    logo: 'https://cdn-icons-png.flaticon.com/512/0/747.png',
    discount: 'UP to 80% OFF',
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=300&q=80',
    bgColor: '#212529',
    textColor: '#ffffff'
  },
  {
    id: 2,
    name: 'REALME',
    logoText: 'realme',
    discount: 'UP to 80% OFF',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=300&q=80',
    bgColor: '#fff3cd',
    textColor: '#000000'
  },
  {
    id: 3,
    name: 'XIAOMI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg',
    discount: 'UP to 80% OFF',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80',
    bgColor: '#ffe5d9',
    textColor: '#000000'
  }
];

const BrandsSection = () => {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
        <h5 className="fw-bold m-0 position-relative pb-2">
          Top <span className="text-primary-blue">Electronics Brands</span>
          <div className="active-title-line"></div>
        </h5>
        <a href="#all" className="text-decoration-none text-muted small d-flex align-items-center gap-1 fw-semibold">
          View All <FiChevronRight />
        </a>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {brands.map((brand) => (
          <div key={brand.id} className="col">
            <div 
              className="brand-card rounded-4 p-4 position-relative overflow-hidden d-flex justify-content-between align-items-center shadow-sm"
              style={{ backgroundColor: brand.bgColor, minHeight: '170px' }}
            >
              <div className="d-flex flex-column justify-content-between h-100 z-1" style={{ color: brand.textColor }}>
                <span className="badge bg-light text-dark align-self-start mb-2 px-2 py-1 opacity-75 fw-normal text-uppercase">
                  {brand.name}
                </span>

                {brand.logo ? (
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    style={{ 
                      width: '32px', 
                      height: '32px',
                      objectFit: 'contain',
                      filter: brand.textColor === '#ffffff' ? 'invert(1)' : 'none' 
                    }} 
                    className="mb-2" 
                  />
                ) : (
                  <span className="fw-bold fs-4 mb-2">{brand.logoText}</span>
                )}

                <h6 className="fw-bold mb-0 fs-5">{brand.discount}</h6>
              </div>

              <div className="brand-img-wrapper">
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="img-fluid rounded-3"
                  style={{ maxHeight: '130px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsSection;