import { useState } from "react";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("Відправляємо...");

    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Повідомлення надіслано");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Помилка при відправці. Спробуй ще раз.");
      }
    } catch {
      setStatus("Немає з’єднання з сервером :(");
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Твоє ім’я"
          required
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Твій email"
          required
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Повідомлення"
          required 
          value={form.message}
          onChange={handleChange}
        />
        <button className="cta" type="submit">
          Надіслати
        </button>
      </form>
      <p className="contact-status">{status}</p>
    </section>
  );
}