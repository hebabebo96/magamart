import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const categoriesList = [
  'Groceries',
  'Premium Fruits',
  'Home & Kitchen',
  'Fashion',
  'Electronics',
  'Beauty',
  'Home Improvement',
  'Sports, Toys & Luggage'
];

const CategoriesHeader = () => {
  // حالة لتحديد العنصر المفتعل/المحدد حالياً
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-light border-bottom py-2">
      <div className="container d-flex align-items-center gap-2 overflow-auto text-nowrap">
        {categoriesList.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`btn btn-sm rounded-pill px-3 py-1 d-flex align-items-center gap-1 small fw-medium ${
              activeIndex === idx ? 'category-btn active' : 'category-btn'
            }`}
          >
            {cat} <FiChevronDown size={14} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesHeader;