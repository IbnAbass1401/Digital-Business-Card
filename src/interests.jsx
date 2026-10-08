const interests = [
  "Frontend Development",
  "Civil Engineering",
  "Learning new tech",
  "Building projects",
]

export default function Interests() {
  return (
    <section className="section">
      <h2>Interests</h2>
      <ul className="interest-list">
        {interests.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}