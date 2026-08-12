import { FiX, FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';

const CartSidebar = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {
  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* خلفية معتمة عند فتح السلة */}
      <div 
        className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
        style={{ zIndex: 1040 }}
        onClick={onClose}
      />

      {/* لوحة السلة المنزلقة */}
      <div 
        className="position-fixed top-0 end-0 h-100 bg-white shadow-lg d-flex flex-column"
        style={{ width: '380px', maxWidth: '100%', zIndex: 1050, transition: 'all 0.3s ease-in-out' }}
      >
        <div className="p-3 border-bottom d-flex justify-content-between align-items-center bg-light">
          <h5 className="m-0 fw-bold">Shopping Cart</h5>
          <button className="btn btn-sm btn-outline-secondary rounded-circle" onClick={onClose}>
            <FiX size={18} />
          </button>
        </div>

        <div className="flex-grow-1 overflow-auto p-3">
          {cartItems.length === 0 ? (
            <div className="text-center py-5 text-muted">
              <p className="mb-0 fs-5">Your cart is empty.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="d-flex align-items-center gap-3 border-bottom pb-3 mb-3">
                <div className="flex-grow-1">
                  <h6 className="mb-1 fw-bold small">{item.title}</h6>
                  <div className="text-primary fw-bold small">₹{item.price.toLocaleString()}</div>
                  <div className="d-flex align-items-center gap-2 mt-2">
                    <button 
                      className="btn btn-sm btn-outline-secondary py-0 px-2"
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    >
                      <FiMinus size={12} />
                    </button>
                    <span className="fw-semibold small">{item.quantity}</span>
                    <button 
                      className="btn btn-sm btn-outline-secondary py-0 px-2"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      <FiPlus size={12} />
                    </button>
                  </div>
                </div>
                <button 
                  className="btn btn-sm btn-link text-danger p-0"
                  onClick={() => onRemoveItem(item.id)}
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="p-3 border-top bg-light">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="fw-bold">Total:</span>
            <span className="fw-bold fs-5 text-primary">₹{totalAmount.toLocaleString()}</span>
          </div>
          <button className="btn btn-primary w-100 fw-bold py-2" disabled={cartItems.length === 0}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;