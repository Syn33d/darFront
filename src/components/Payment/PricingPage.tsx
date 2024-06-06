import * as React from 'react';
import { useState } from 'react';
import './PricingPage.css';
import { Helmet } from 'react-helmet';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

function PricingPage() {
  const [, setIsFirstTable] = useState(true);

  const handleFirstTableClick = () => {
    setIsFirstTable(true);
    const firstTableElement = document.getElementById('firstTable') as HTMLInputElement;
    if (firstTableElement) {
      firstTableElement.checked = true;
    }
  };

  const handleSecondTableClick = () => {
    setIsFirstTable(false);
    const secondTableElement = document.getElementById('secondTable') as HTMLInputElement;
    if (secondTableElement) {
      secondTableElement.checked = true;
    }
  };

  return (
    <>
      <Helmet>
        <body className="test-pricing-page" />
      </Helmet>
      <div className="mainPricingPage">
        <div className="form_wrapper">
          <input type="radio" className="radio" name="radio" id="firstTable" defaultChecked />
          <input type="radio" className="radio" name="radio" id="secondTable" />
          <div className="tile">
            <h3 className="firstTable">Yearly</h3>
            <h3 className="secondTable">Monthly</h3>
          </div>

          <label className="tab firstTable_tab" htmlFor="firstTable" onClick={handleFirstTableClick}>
            Yearly
          </label>

          <label className="tab secondTable_tab" htmlFor="secondTable" onClick={handleSecondTableClick}>
            Monthly
          </label>
          <span className="shape"></span>
          <div className="form_wrap">
            <div className="form_fild firstTable_form">
              <stripe-pricing-table pricing-table-id="prctbl_1PO2h2G3h0hR2My9jjbJGE3z"
                publishable-key="pk_live_51PFyI9G3h0hR2My98cpysUelbjSwFFXf6Td14iADtumZlDXTClojCtvekZ3BjSM3vlfmVGH43KfgdD1MtK3s3c3a00bRIIuK5B">
              </stripe-pricing-table>
            </div>

            <div className="form_fild secondTable_form">
              <stripe-pricing-table pricing-table-id="prctbl_1PO2h2G3h0hR2My9jjbJGE3z"
                publishable-key="pk_live_51PFyI9G3h0hR2My98cpysUelbjSwFFXf6Td14iADtumZlDXTClojCtvekZ3BjSM3vlfmVGH43KfgdD1MtK3s3c3a00bRIIuK5B">
              </stripe-pricing-table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingPage;