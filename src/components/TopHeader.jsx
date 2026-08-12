import { FiMapPin, FiTruck, FiPercent } from 'react-icons/fi';

const TopHeader = () => {
  return (
    <div className="top-header py-2 border-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        <div>Welcome to worldwide Megamart!</div>
        <div className="d-flex gap-4">
          <div className="d-flex align-items-center gap-1">
            <FiMapPin className="text-primary-blue" />
            <span>Deliver to <b>423651</b></span>
          </div>
          <div className="d-flex align-items-center gap-1">
            <FiTruck className="text-primary-blue" />
            <span>Track your order</span>
          </div>
          <div className="d-flex align-items-center gap-1">
            <FiPercent className="text-primary-blue" />
            <span>All Offers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;