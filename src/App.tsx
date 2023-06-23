import AfterHeroSection from './components/AfterHeroSection';
import CompaniesTicker from './components/CompaniesTicker';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import GetStartedSection from './components/GetStartedSection';
import Header from './components/Header';
import Hero from './components/Hero';
import LeftRightSection from './components/LeftRightSection';
import LocalCommunitySection from './components/LocalCommunitySection';
import MeetTheSuitSection from './components/MeetTheSuitSection';
import YoutubeFrame from './components/YoutubeFrame';
import IntroducingMarkerImage from './components/ui/Images/IntroducingMarkerImage';
import SpeedMarkerImage from './components/ui/Images/SpeedMarkerImage';
import {
  introducingHeading,
  introducingParagraph,
  joinCommunityContent,
  leftRightList,
  speedHeading,
  speedParagraph,
} from './config/constants';

function App() {
  return (
    <>
      <Header />
      <main className='font-arminGrotesk bg-beige'>
        <Hero />
        <AfterHeroSection
          heading={introducingHeading}
          p={introducingParagraph}
          MarkerImage={IntroducingMarkerImage}
        />
        <YoutubeFrame />
        <CompaniesTicker />
        <AfterHeroSection
          heading={speedHeading}
          p={speedParagraph}
          MarkerImage={SpeedMarkerImage}
        />
        {leftRightList.map((item) => (
          <LeftRightSection item={item} key={item.id} />
        ))}
        <MeetTheSuitSection />
        <LeftRightSection
          item={joinCommunityContent}
          className='md:grid-cols-2'
        />
        <LocalCommunitySection />
        <GetStartedSection />
        <FeaturesSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
