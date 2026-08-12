import { FaWhatsapp } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer-section text-white pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row g-4">
          
          {/* Column 1: Brand Info & Contact & Download App */}
          <div className="col-12 col-md-4">
            <h2 className="fw-bold fs-2 mb-4">MegaMart</h2>
            
            <h6 className="fw-semibold mb-3">Contact Us</h6>
            <div className="d-flex flex-column gap-3 mb-4">
              <div className="d-flex align-items-center gap-3">
                <FaWhatsapp size={22} className="opacity-90" />
                <div className="d-flex flex-column">
                  <span className="small opacity-75">Whats App</span>
                  <span className="fw-medium small">+1 202-918-2132</span>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <FiPhoneCall size={20} className="opacity-90" />
                <div className="d-flex flex-column">
                  <span className="small opacity-75">Call Us</span>
                  <span className="fw-medium small">+1 202-918-2132</span>
                </div>
              </div>
            </div>

            <h6 className="fw-semibold mb-3">Download App</h6>
            <div className="d-flex align-items-center gap-2">
              {/* App Store Button */}
              <a href="#appstore" className="btn btn-dark d-flex align-items-center gap-2 px-3 py-2 rounded-3 border-secondary">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" 
                  alt="App Store" 
                  style={{ width: '18px' }} 
                />
                <div className="text-start lh-1">
                  <span className="d-block text-uppercase opacity-75" style={{ fontSize: '9px' }}>Download on the</span>
                  <span className="fw-semibold" style={{ fontSize: '12px' }}>App Store</span>
                </div>
              </a>

              {/* Google Play Button */}
              <a href="#googleplay" className="btn btn-dark d-flex align-items-center gap-2 px-3 py-2 rounded-3 border-secondary">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" 
                  alt="Google Play" 
                  style={{ width: '18px' }} 
                />
                <div className="text-start lh-1">
                  <span className="d-block text-uppercase opacity-75" style={{ fontSize: '9px' }}>Get it on</span>
                  <span className="fw-semibold" style={{ fontSize: '12px' }}>Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Most Popular Categories */}
          <div className="col-6 col-md-4 ps-md-5">
            <h6 className="fw-bold mb-3 pb-2 border-bottom border-light border-opacity-25 d-inline-block pe-4">
              Most Popular Categories
            </h6>
            <ul className="list-unstyled footer-list d-flex flex-column gap-2 small opacity-90">
              <li>• Staples</li>
              <li>• Beverages</li>
              <li>• Personal Care</li>
              <li>• Home Care</li>
              <li>• Baby Care</li>
              <li>• Vegetables & Fruits</li>
              <li>• Snacks & Foods</li>
              <li>• Dairy & Bakery</li>
            </ul>
          </div>

          {/* Column 3: Customer Services */}
          <div className="col-6 col-md-4">
            <h6 className="fw-bold mb-3 pb-2 border-bottom border-light border-opacity-25 d-inline-block pe-4">
              Customer Services
            </h6>
            <ul className="list-unstyled footer-list d-flex flex-column gap-2 small opacity-90">
              <li>• About Us</li>
              <li>• Terms & Conditions</li>
              <li>• FAQ</li>
              <li>• Privacy Policy</li>
              <li>• E-waste Policy</li>
              <li>• Cancellation & Return Policy</li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Line */}
        <div className="border-top border-light border-opacity-25 pt-3 mt-5 text-center small opacity-75">
          © 2026 MegaMart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;