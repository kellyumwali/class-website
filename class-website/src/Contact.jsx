export default function Contact({ schoolName, onReturnHome }) {
  return (
    <section>
      <h2>Contact Us</h2>
      <p><strong>School:</strong> {schoolName}</p>
      <p><strong>Location:</strong> Rwanda (replace with the school's district and address)</p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:info@example.com">info@example.com</a>
      </p>
      <p>Replace the sample email and location with the official school details.</p>
      <button type="button" onClick={onReturnHome}>Return to Home</button>
    </section>
  );
}