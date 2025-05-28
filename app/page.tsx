import Col from "@/components/atom/flex/ui/Col";
import {GuideSection, HeroSection} from '@/page/home'
import {ApplicationSection} from '@/page/home/applicationSection'
import ProgressWaySection from "@/page/home/progressWaySection/ui/ProgressWaySection";

export default function Home() {
  return (
    <Col width={'fill'}>
      <HeroSection/>
      <GuideSection/>
      <ProgressWaySection/>
      <ApplicationSection/>
    </Col>
  );
}
