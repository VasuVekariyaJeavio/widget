import { SERVICES } from '../data/services';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  return (
    <section className="section section-services" id="services">
      <h2>Our Services</h2>
      <div className="cards">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
