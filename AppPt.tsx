import React from 'react';
import HeroPt from './components/pt/HeroPt';
import FeaturesPt from './components/pt/FeaturesPt';
import ContentShowcasePt from './components/pt/ContentShowcasePt';
import PricingWidgetPt from './components/pt/PricingWidgetPt';
import FAQPt from './components/pt/FAQPt';
import CompatibilityPt from './components/pt/CompatibilityPt';
import FooterPt from './components/pt/FooterPt';

const AppPt: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-green-500 selection:text-black">
            <HeroPt />
            <FeaturesPt />
            <ContentShowcasePt />
            <PricingWidgetPt />
            <FAQPt />
            <CompatibilityPt />
            <FooterPt />
        </div>
    );
};

export default AppPt;
