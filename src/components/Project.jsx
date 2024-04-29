import ProjectLink from "./ProjectLink";

// las imagenes locales las tenemos que importar
import flappyImg from "../assets/images/flappy.png"

function Project() {

  let projectName = "Flappy Bird";

  return (
    <section>

      <h4>Proyecto final de modulo 1</h4>
      <img src={flappyImg} width="200px"/>
      <h5> {projectName} </h5>

      <ProjectLink />

    </section>
  )


}

export default Project