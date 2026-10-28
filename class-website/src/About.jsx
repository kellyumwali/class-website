export default function About({ schoolName }) {
  return (
    <section>
      <h2>About Our Class</h2>
      <p>
        The purpose of this class website is to present information about
        {` ${schoolName}`}, our students, and the skills we learn.
      </p>
      <h3>About Software Development</h3>
      <p>
        Software Development involves planning, building, testing, and
        maintaining computer applications and websites. Students learn to
        solve problems and create useful digital solutions.
      </p>
      <h3>Subjects and skills we learn</h3>
      <ul>
        <li>Front-End Development with ReactJS</li>
        <li>HTML and JavaScript fundamentals</li>
        <li>Back-End System Design and databases</li>
        <li>Data Structures and Algorithms</li>
        <li>Version control with Git and GitHub</li>
      </ul>
    </section>
  );
}