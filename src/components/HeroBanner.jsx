import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const slides = [
  {
    id: 1,
    subtitle: 'Best Deal Online on smart watches',
    title: 'SMART WEARABLE.',
    discount: 'UP to 80% OFF',
    // صورة ساعة ذكية عالية الجودة خلفية شفافة/بيضاء
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    bgColor: '#1e293b' // أزرق داكن غامق مطابق للصور
  },
  {
    id: 2,
    subtitle: 'Grab the best deal on Smartphones',
    title: 'FLAGSHIP PHONES.',
    discount: 'UP to 56% OFF',
    // صورة هاتف ذكي
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
    bgColor: '#0f172a'
  },
  {
    id: 3,
    subtitle: 'High Performance Laptops & Tech',
    title: 'LATEST LAPTOPS.',
    discount: 'UP to 40% OFF',
    // صورة لابتوب
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80',
    bgColor: '#172554'
  }
];

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // تقليب تلقائي كل 4 ثوانٍ
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="container my-4">
      <div 
        className="rounded-4 position-relative p-4 p-md-5 text-white overflow-hidden shadow-sm"
        style={{ 
          backgroundColor: currentSlide.bgColor, 
          transition: 'background-color 0.5s ease-in-out',
          minHeight: '300px'
        }}
      >
        {/* زر السهم الأيسر */}
        <button 
          onClick={handlePrev}
          className="btn btn-light rounded-circle position-absolute start-0 top-50 translate-middle-y ms-3 d-flex align-items-center justify-content-center shadow"
          style={{ width: '42px', height: '42px', zIndex: 3 }}
          aria-label="Previous Slide"
        >
          <FiChevronLeft size={22} className="text-dark" />
        </button>

        <div className="row align-items-center h-100 py-2 px-md-4">
          {/* محتوى النصوص */}
          <div className="col-8 col-md-7 z-1">
            <p className="text-uppercase tracking-wider opacity-90 small fw-medium mb-1">
              {currentSlide.subtitle}
            </p>
            <h1 className="display-5 fw-extrabold text-white mb-2 tracking-tight">
              {currentSlide.title}
            </h1>
            <h3 className="fw-bold text-warning mb-0">
              {currentSlide.discount}
            </h3>
          </div>

          {/* صورة المنتج الخاصة بكل شريحة */}
          <div className="col-4 col-md-5 text-center position-relative">
            <img 
              src={currentSlide.image} 
              alt={currentSlide.title}
              className="img-fluid rounded-3 shadow-lg"
              style={{ 
                maxHeight: '220px', 
                objectFit: 'cover',
                transition: 'all 0.5s ease-in-out'
              }}
            />
          </div>
        </div>

        {/* زر السهم الأيمن */}
        <button 
          onClick={handleNext}
          className="btn btn-light rounded-circle position-absolute end-0 top-50 translate-middle-y me-3 d-flex align-items-center justify-content-center shadow"
          style={{ width: '42px', height: '42px', zIndex: 3 }}
          aria-label="Next Slide"
        >
          <FiChevronRight size={22} className="text-dark" />
        </button>

        {/* النقط التفاعلية (Indicators) بالأسفل */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex gap-2 z-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`hero-dot-btn ${currentIndex === index ? 'active' : ''}`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;