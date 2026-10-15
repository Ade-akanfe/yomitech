import Accident from "@/assets/icons/car-burst-solid";
import Car from "@/assets/icons/car-solid";
import HeadSet from "@/assets/icons/headset-solid";
import Helment from "@/assets/icons/helmet-safety-solid";
import Wallet from "@/assets/icons/wallet-solid";

const services = [
  {
    title: "Accident repairs",
    description:
      "Restore your vehicle after a collision with considered, professional bodywork.",
    Icon: Accident,
  },
  {
    title: "Bodywork & dent repair",
    description:
      "Repair dents and damaged panels to bring back a clean, even finish.",
    Icon: Car,
  },
  {
    title: "Spray painting",
    description:
      "Refresh paintwork with careful preparation and a smooth, matched finish.",
    Icon: Helment,
  },
  {
    title: "Mobile assessment",
    description:
      "Can't make it to us? Ask about arranging a visit to assess your vehicle.",
    Icon: HeadSet,
  },
  {
    title: "Options for your budget",
    description:
      "Choose from repair options at different price points to suit your needs.",
    Icon: Wallet,
  },
];

const WhatSecond = () => (
  <section className="section services-section" id="services">
    <div className="section-inner">
      <div className="section-heading">
        <p className="eyebrow">What we do</p>
        <h2>Repairs that get you back on the road.</h2>
        <p>
          From the first assessment to the final polish, we make getting your
          car repaired feel straightforward.
        </p>
      </div>
      <div className="services-grid">
        {services.map(({ title, description, Icon }) => (
          <article className="service-card" key={title}>
            <span className="service-icon" aria-hidden="true">
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

export default WhatSecond;
