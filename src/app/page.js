import HomePage from "@/components/Home/home";
import Board from "@/components/board/board";
import Feedback from "@/components/feedback/feedback";
import FeedbackTwo from "@/components/feedback/feedback2";
import What from "@/components/what/what";
import WhatSecond from "@/components/what/what2";
import WhatThird from "@/components/what/what3";

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoBodyShop",
            name: "Yomtech Limited",
            description:
              "Car body repairs, accident restoration and spray painting in Birmingham.",
            telephone: "+447538733798",
            email: "info@yomtech.co.uk",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Unit 8, Cobham Business Centre, Off Cobham Road",
              addressLocality: "Birmingham",
              addressRegion: "West Midlands",
              postalCode: "B9 4UP",
              addressCountry: "GB",
            },
            areaServed: {
              "@type": "City",
              name: "Birmingham",
            },
          }),
        }}
      />
      <HomePage />
      <What />
      <WhatSecond />
      <WhatThird />
      <section className="section contact-section" id="contact">
        <div className="section-inner contact-layout">
          <div className="contact-copy">
            <p className="eyebrow">Let’s get you moving</p>
            <h2>Ready for a fresh start?</h2>
            <p>
              Talk to our team about your repair. We’re happy to answer
              questions, discuss your options and help you get a quote.
            </p>
            <Feedback />
          </div>
          <FeedbackTwo />
        </div>
      </section>
      <Board />
    </main>
  );
}
