import { FiSearch, FiList, FiUser, FiShoppingCart } from 'react-icons/fi';

const Navbar = ({ searchQuery, setSearchQuery, cartCount, onOpenCart }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top py-2 shadow-sm">
      <div className="container d-flex align-items-center justify-content-between gap-3">
        
        {/* اللوجو */}
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold text-primary fs-3 m-0" href="#">
          <FiList className="text-primary" />
          <span>MegaMart</span>
        </a>

        {/* شريط البحث */}
        <div className="flex-grow-1 max-w-md mx-3 position-relative" style={{ maxWidth: '600px' }}>
          <div className="input-group">
            <span className="input-group-text bg-light border-0 text-muted">
              <FiSearch />
            </span>
            <input
              type="text"
              className="form-control bg-light border-0 shadow-none"
              placeholder="Search essentials, groceries and more..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* أزرار الحساب والعربة */}
        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-link text-dark text-decoration-none d-flex align-items-center gap-2 p-0">
            <FiUser size={20} />
            <span className="d-none d-md-inline fw-medium">Sign Up/Sign In</span>
          </button>

          <button 
            onClick={onOpenCart}
            className="btn btn-outline-primary d-flex align-items-center gap-2 position-relative rounded-pill px-3 py-1 fw-semibold"
          >
            <FiShoppingCart size={18} />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;