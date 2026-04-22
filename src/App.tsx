import { useAvatarForgeWidget } from './hooks/useAvatarForgeWidget';
import SiteHeader from './components/SiteHeader';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import ServicesSection from './components/ServicesSection';
import WidgetNote from './components/WidgetNote';

export default function App() {
  useAvatarForgeWidget({
    widgetId: '8a7ee32a-675c-4292-80fc-0303b011225a',
    position: 'bottom-right',
    theme: 'dark',
    buttonColor: '#995515',
    buttonText: 'Jeev',
    widgetSize: 'large',
  });

  return (
    <>
      <SiteHeader />
      <Hero />
      <IntroSection />
      <ServicesSection />
<WidgetNote />
    </>
  );
}
