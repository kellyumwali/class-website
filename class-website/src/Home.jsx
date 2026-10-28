export default function Home({ schoolName, onNavigate }) {
  return (
    <section>
      <h2>Welcome to Our Class Website</h2>
      <p><strong>School:</strong> {schoolName}</p>
      <p><strong>Class level:</strong> TVET Certificate IV</p>
      <p><strong>Trade:</strong> Software Development</p>
      <p>
        Welcome! This website introduces our class, shares information about
        the Software Development trade, lists students, and provides contact
        information.
      </p>
      <h3>Explore the website</h3>
      <p>
        <button type="button" onClick={() => onNavigate("About")}>Learn about our class</button>{" "}
        <button type="button" onClick={() => onNavigate("Students")}>View students</button>{" "}
        <button type="button" onClick={() => onNavigate("Contact")}>Contact the school</button>
      </p>
    </section>
  );
}