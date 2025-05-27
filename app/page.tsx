import Col from "@/components/atom/flex/ui/Col";
// import {Header} from '@/components/organism/Header'
import {GuideSection, HeroSection} from '@/page/home'

export default function Home() {
  return (
    <Col width={'fill'}>
      {/*<Header/>*/}
      <HeroSection/>
      <GuideSection/>
    </Col>
  );
}
