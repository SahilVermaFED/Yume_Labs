import Strategy from '../../pages/case-study/Strategy/index';
import { Productdesign } from './Productdesign';
import StatementSection from './StatementSection';
import HeroSection from './HeroSection';
import Unbiased from './Unbiased';
import Project from '../../pages/case-study/Project/index';
import Branding from './Branding';

const CaseStudy = () => {
    return (
        <div>
            <HeroSection />
            <StatementSection />
            <Productdesign />
            <Strategy />
            <Branding />
            <Unbiased />
            <Project />
        </div>
    );
};

export default CaseStudy;
