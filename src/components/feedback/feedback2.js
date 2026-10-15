"use client";

const FeedbackTwo = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Repair enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:info@yomtech.co.uk?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Tell us what happened</h3>
      <p>Share a few details and we’ll help you work out the next step.</p>
      <div className="form-row">
        <label>
          Your name
          <input autoComplete="name" name="name" placeholder="Jane Smith" required />
        </label>
        <label>
          Email address
          <input
            autoComplete="email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            required
          />
        </label>
      </div>
      <label>
        How can we help?
        <textarea
          name="message"
          placeholder="Tell us a little about the damage or repair you need..."
          required
        />
      </label>
      <button className="button button-dark" type="submit">
        Start your enquiry <span aria-hidden="true">→</span>
      </button>
      <p className="form-note">This will open your email app with your enquiry ready to send.</p>
    </form>
  );
};

export default FeedbackTwo;
