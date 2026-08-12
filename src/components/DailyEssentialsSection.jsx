import { FiChevronRight } from 'react-icons/fi';

const essentials = [
  { id: 1, title: 'Daily Essentials', discount: 'UP to 50% OFF', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=200&q=80' },
  { id: 2, title: 'Vegetables', discount: 'UP to 50% OFF', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=200&q=80' },
  { id: 3, title: 'Fruits', discount: 'UP to 50% OFF', image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=200&q=80' },
  { id: 4, title: 'Strawberry', discount: 'UP to 50% OFF', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=200&q=80' },
  { id: 5, title: 'Mango', discount: 'UP to 50% OFF', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=200&q=80' },
  { id: 6, title: 'Cherry', discount: 'UP to 50% OFF', image: 'https://raw.githubusercontent.com/googlefonts/noto-emoji/main/png/512/emoji_u1f352.png' },
];

const DailyEssentialsSection = () => {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
        <h5 className="fw-bold m-0 position-relative pb-2">
          Daily <span className="text-primary-blue">Essentials</span>
          <div className="active-title-line"></div>
        </h5>
        <a href="#all" className="text-decoration-none text-muted small d-flex align-items-center gap-1 fw-semibold">
          View All <FiChevronRight />
        </a>
      </div>

      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-3 text-center">
        {essentials.map((item) => (
          <div key={item.id} className="col">
            <div className="p-3 rounded-4 bg-light-card h-100 d-flex flex-column align-items-center justify-content-between essential-card">
              <div className="essential-img-wrapper mb-2 d-flex align-items-center justify-content-center" style={{ height: '90px' }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="img-fluid" 
                  style={{ maxHeight: '80px', objectFit: 'contain' }}
                  onError={(e) => {
                    // حماية إضافية في حال فشل التحميل لأي سبب
                    e.target.onerror = null; 
                    e.target.src = 'https://cdn-icons-png.flaticon.com/512/3137/3137044.png';
                  }}
                />
              </div>
              <div>
                <span className="d-block text-muted small fw-medium">{item.title}</span>
                <span className="fw-bold text-dark fs-7">{item.discount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyEssentialsSection;