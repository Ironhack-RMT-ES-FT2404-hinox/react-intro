function Technologies() {

  const sectionstyles = {
    backgroundColor: "lightblue",
    color: "darkblue",
    padding: "10px",
    margin: "10px"
  }


  return (
    <section style={sectionstyles}>

      <h3 className="sub-title">Tecnologias usadas</h3>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>DOM</li>
        <li>Clases</li>
        <li>TDD</li>
      </ul>

    </section>
  )
}

export default Technologies