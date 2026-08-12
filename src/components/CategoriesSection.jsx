import { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

const categories = [
  { name: 'Mobile', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=200&q=80' },
  { name: 'Cosmetics', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=200&q=80' },
  { name: 'Electronics', image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=200&q=80' },
  { name: 'Furniture', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=200&q=80' },
  { name: 'Watches', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=200&q=80' },
  { name: 'Decor', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=200&q=80' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=200&q=80' }
];

const CategoriesSection = () => {
  const [selectedCat, setSelectedCat] = useState(0);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
        <h5 className="fw-bold m-0 position-relative pb-2">
          Shop From <span className="text-primary-blue">Top Categories</span>
          <div className="active-title-line"></div>
        </h5>
        <a href="#all" className="text-decoration-none text-muted small d-flex align-items-center gap-1 fw-semibold">
          View All <FiChevronRight />
        </a>
      </div>

      <div className="d-flex justify-content-between text-center flex-wrap gap-3">
        {categories.map((cat, index) => (
          <div 
            key={index} 
            className="category-item cursor-pointer text-center" 
            onClick={() => setSelectedCat(index)}
            style={{ cursor: 'pointer' }}
          >
            <div className={`category-circle ${selectedCat === index ? 'active' : ''}`}>
              <img src={cat.image} alt={cat.name} />
            </div>
            <span className="fw-medium small d-block text-dark">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;