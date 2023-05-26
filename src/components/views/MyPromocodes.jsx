import { useState } from "react";
import BackArrow from "../partials/generalPartials/BackArrow";
import PromoCodeCard from "../partials/PromoCodeCard";
import { useNavigate } from "react-router-dom";

const MyPromocodes = () => {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1)
	};



  const [tab, setTab] = useState ('current');

  const [promocodes] = useState([
    { title: "Acme Co.", discount: "50", expiry: "Valid until June 30, 2024", used: false },
    { title: "Abstergo Ltd.", discount: "30", expiry: "Valid until August 30, 2023", used: false },
    { title: "Barone LLC", discount: "15", expiry: "Valid until December 31, 2023", used: true },
    //Nya nedan!
    { title: "ABC Company", discount: "20", expiry: "Valid until September 30, 2023", used: false },
    { title: "XYZ Corporation", discount: "25", expiry: "Valid until October 31, 2023", used: false },
    { title: "Eagle Enterprises", discount: "66", expiry: "Valid until November 30, 2023", used: true },
    { title: "Global Solutions", discount: "35", expiry: "Valid until January 31, 2024", used: false },
    { title: "Sunshine Co.", discount: "40", expiry: "Valid until February 28, 2024", used: false },
    { title: "Moonlight Ltd.", discount: "5", expiry: "Valid until March 31, 2024", used: false },
    { title: "Stellar Services", discount: "30", expiry: "Valid until April 30, 2024", used: true },
    { title: "Tech Innovators", discount: "15", expiry: "Valid until May 31, 2024", used: false },
  ]);
 

  const visiblePromocodes = promocodes.filter(promocode => (tab === 'current') ? !promocode.used : promocode.used);

  return (
    <div className="promocodes-wrapper">
      <div className="promo-header">
        <BackArrow clickEvent={handleGoBack} />
        <h3>My Promocodes</h3>
      </div>
      <div className="promocodes-container">
        <div className="current-used-promocodes">
        <button className={`promocode-tab-button ${tab === 'current' ? 'active' : ''}`} onClick={() => setTab('current')}>
            Current
          </button>
          <button className={`promocode-tab-button ${tab === 'used' ? 'active' : ''}`} onClick={() => setTab('used')}>
            Used
          </button>
        
        </div>
        {visiblePromocodes.map((promocode, index) => 
          <PromoCodeCard 
            key={index}
            title={promocode.title} 
            discount={promocode.discount} 
            expiry={promocode.expiry}
            used={promocode.used}

          />
        )}
      </div>
    </div>
  );
};

export default MyPromocodes;