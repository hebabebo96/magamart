import { useState } from 'react';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import CategoriesHeader from './components/CategoriesHeader';
import HeroBanner from './components/HeroBanner';
import ProductSection from './components/ProductSection';
import CategoriesSection from './components/CategoriesSection';
import BrandsSection from './components/BrandsSection';
import DailyEssentialsSection from './components/DailyEssentialsSection';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';

const initialProducts = [
  { 
    id: 1, 
    title: 'Galaxy S22 Ultra', 
    price: 32999, 
    originalPrice: 74999, 
    saveAmount: 32999, 
    discount: 56, 
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=300&q=80' 
  },
  { 
    id: 2, 
    title: 'Galaxy M13 (4GB | 64 GB )', 
    price: 10499, 
    originalPrice: 14999, 
    saveAmount: 4500, 
    discount: 56, 
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=300&q=80' 
  },
  { 
    id: 3, 
    title: 'Galaxy M33 (4GB | 64 GB )', 
    price: 16999, 
    originalPrice: 24999, 
    saveAmount: 8000, 
    discount: 56, 
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80' 
  },
  { 
    id: 4, 
    title: 'Galaxy M53 (4GB | 64 GB )', 
    price: 31999, 
    originalPrice: 40999, 
    saveAmount: 9000, 
    discount: 56, 
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=300&q=80' 
  },
  { 
    id: 5, 
    title: 'Galaxy S22 Ultra', 
    price: 67999, 
    originalPrice: 85999, 
    saveAmount: 18000, 
    discount: 56, 
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=300&q=80' 
  }
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  // تصفية المنتجات حسب خانة البحث
  const filteredProducts = initialProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // إضافة منتج للسلة
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  // تعديل كمية العناصر في السلة
  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  // حذف عنصر من السلة
  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const cartTotalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      {/* 1. الشريط الأعلى */}
      <TopHeader />

      {/* 2. شريط الملاحة الأساسي مع البحث والسلة */}
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* 3. شريط التصنيفات */}
      <CategoriesHeader />

      {/* 4. البانر الرئيسي */}
      <HeroBanner />

      {/* 5. قسم العروض والمنتجات */}
      <ProductSection products={filteredProducts} onAddToCart={handleAddToCart} />

      {/* 6. قسم أعلى التصنيفات */}
      <CategoriesSection />

      {/* 7. قسم الماركات الشهيرة */}
      <BrandsSection />

      {/* 8. قسم المنتجات اليومية */}
      <DailyEssentialsSection />

      {/* 9. الفوتر */}
      <Footer />

      {/* 10. القائمة الجانبية للسلة */}
      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}

export default App;