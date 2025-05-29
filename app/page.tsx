import Col from "@/components/atom/flex/ui/Col";
import {GuideSection, HeroSection} from '@/widget/home'
import {ApplicationSection} from '@/widget/home/applicationSection'
import ProgressWaySection from "@/widget/home/progressWaySection/ui/ProgressWaySection";
import {FaqSection} from "@/widget/home/faqSection";

export default function Home() {
  return (
    <Col width={'fill'}>
      <HeroSection/>
      <GuideSection/>
      <ProgressWaySection/>
      <ApplicationSection/>
      <FaqSection/>
    </Col>
  );
}
