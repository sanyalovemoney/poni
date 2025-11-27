export function ContactForm() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <h2>Зв’язатися з нами</h2>
        <p className="lead"></p>

        <form
          id="contactForm"
          style={{ display: "grid", gap: "10px", maxWidth: "420px" }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="text" name="name" placeholder="Твоє ім’я" required />
          <input type="email" name="email" placeholder="Твій email" required />
          <textarea name="message" rows="4" placeholder="Повідомлення" required />
          <button className="cta" type="submit">
            Надіслати
          </button>
        </form>

        <p id="contactStatus"></p>
      </div>
    </section>
  );
}
