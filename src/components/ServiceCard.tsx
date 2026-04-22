import type { Service } from '../data/services';

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  return (
    <article className={`card card--${service.tone}`}>
      <div className="card-icon" aria-hidden="true">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <a className="btn-card" href="#">Read More</a>
    </article>
  );
}
