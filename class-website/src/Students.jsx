const students = [
  { id: "SD001", name: "Student One", trade: "Software Development" },
  { id: "SD002", name: "Student Two", trade: "Software Development" },
  { id: "SD003", name: "Student Three", trade: "Software Development" },
  { id: "SD004", name: "Student Four", trade: "Software Development" },
  { id: "SD005", name: "Student Five", trade: "Software Development" }
];

export default function Students({ schoolName }) {
  return (
    <section>
      <h2>Our Students</h2>
      <p>Students in the Software Development class at {schoolName}.</p>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>ID:</strong> {student.id} —{" "}
            <strong>Name:</strong> {student.name} —{" "}
            <strong>Trade:</strong> {student.trade}
          </li>
        ))}
      </ul>
      <p>Replace the sample names and IDs with the real class information.</p>
    </section>
  );
}