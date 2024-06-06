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
  
  return (
    <>
      <Helmet>
        <body className="test-pricing-page" />
      </Helmet>
      <div className="mainPricingPage">
        <div className="form_wrapper">
          <input type="radio" className="radio" name="radio" id="firstTable" defaultChecked />
          <div className="tile">
            <h3 className="firstTable">Yearly</h3>
          </div>
          <span className="shape"></span>
          <div className="form_wrap">
            <div className="form_fild firstTable_form">
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