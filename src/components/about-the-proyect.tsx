import InstaVisualizer from "./insta-visualizer";
import { aboutMe } from "../data/text";
import { IoMdDownload } from "react-icons/io";
import { stories, stories2, } from "../data/images";

const AboutTheProyect = () => {
  return (
    <>
    <section id="igSection">
    <div className="igDiv">
      <InstaVisualizer stories={stories}/>
    </div>
    <div className="igDiv">
    <InstaVisualizer stories={stories2} />
    </div>
  </section>
  <div id="aboutMeDiv">
    {aboutMe.map((element) => {
      return <p className="aboutMeText">{element}</p>;
    })}
  </div>
  <section>
    <div>
      <p id="text-download">
        ▪️ Podés descargar la demo del libro dandole clic al siguiente botón
        👇🥰
      </p>
      <a href="LMDE_parte_1.pdf" download={true}>
        <IoMdDownload id="icon-download" />
      </a>
    </div>
  </section>
  </>
  )
}

export default AboutTheProyect;