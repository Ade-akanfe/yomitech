import HeadSet from "@/assets/icons/headset-solid";
import Helment from "@/assets/icons/helmet-safety-solid";
import Person from "@/assets/icons/person-solid";
import Seedling from "@/assets/icons/seedling-solid";
import Vial from "@/assets/icons/vial-circle-check-solid";

const values = [
  {
    title: "Quality workmanship",
    description: "Careful repairs and refinishing, with attention to every detail.",
    Icon: Vial,
  },
  {
    title: "Honest advice",
    description: "Clear assessments, fair pricing and options that suit your budget.",
    Icon: Person,
  },
  {
    title: "Here to help",
    description: "Friendly support and clear communication from start to finish.",
    Icon: HeadSet,
  },
  {
    title: "Safety first",
    description: "Repairs completed with your vehicle's safety in mind.",
    Icon: Helment,
  },
];

const What = () => (
  <section className="section about-section" id="about">
    <div className="section-inner about-layout">
      <div className="about-copy">
        <p className="eyebrow">The Yomtech difference</p>
        <h2>Good as new, without the guesswork.</h2>
        <p>
          We are a Birmingham car body repair team with a passion for bringing
          vehicles back to their best. From a small scratch to accident damage,
          we combine skilled workmanship with straightforward, personal service.
        </p>
        <a className="button button-dark" href="#services">
          See how we can help <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="values-grid">
        {values.map(({ title, description, Icon }) => (
          <article className="value-card" key={title}>
            <span className="value-icon" aria-hidden="true">
              <Icon />
            </span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default What;
