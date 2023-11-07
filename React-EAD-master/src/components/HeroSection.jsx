import Project from "./Project";
var React = require("react");
//import pic from "../assets/pic.jpg";
function HeroSection() {
  return (
    <>
      <div class="container-fluid" id="hero">
        <div class="row bgi">
          <div class="details col-lg-6 mb-5" id="col1">
            <h5 id="hello">Hello I'm</h5>
            <h1 id="welcome">Mern Stack Web Engineer</h1>
            <h1 id="myname">Ayaz Gul</h1>
            <button class="bg-warning btn">About Me</button>
          </div>
          <div class="picture col-lg-6 mb-5" id="col2">
            <div class="container">
              <img
                src="../assets/ayzi.JPG"
                id="mypic"
                class="img-circle rounded-circle"
                width="300"
                height="300"
                alt="Picture"
              />
            </div>
          </div>
        </div>
      </div>

      {/* My Projects */}
      <div class="container mb-5">
        <div class="row g-4 mt-5">
          <h1 class="text-center">My Projects</h1>
          <p class="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Dolore, quod cumque ea enim dolorem dolor quo culpa animi quasi,
            ipsum soluta itaque et <br />
            repudiandae quia facilis veniam! Aperiam, incidunt ex.
          </p>
          <div class="col-lg-4">
            <div class="card shadow">
              <div className="inner">
                <img src="../assets/mine1.png" class="card-img-top" alt="..." />
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card shadow">
              <div className="inner">
                <img src="../assets/mine2.png" class="card-img-top" alt="..." />
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card shadow">
              <div className="inner">
                <img src="../assets/mine3.png" class="card-img-top" alt="..." />
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card shadow">
              <div className="inner">
                <img src="../assets/mine4.png" class="card-img-top" alt="..." />
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills">
        <h1 class="text-center">My Skills</h1>
        <p class="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Dolore, quod cumque ea enim dolorem dolor quo culpa animi quasi, ipsum
          soluta itaque et <br />
          repudiandae quia facilis veniam! Aperiam, incidunt ex.
        </p>
      </div>
      <div className="container mt-5">
        <h4>Coding Progress</h4>
        <div class="row" id="prog">
          <Project />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
