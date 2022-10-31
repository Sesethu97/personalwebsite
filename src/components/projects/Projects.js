import "./projects.css";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projectsDone">
        <br />
        <br />
        <h14 className="project-header">My Projects</h14>
        <div className="project-msg">
          <p className="project-desc">
            <br/>To learn different languages and frame works. 
            I did mini exercises and  projects that Ive uploaded to my <a href="https://github.com/Sesethu97" className="links"> github.</a>
          </p>
        </div>
        <br />
        <br />

        {/* <div className="values">
          <ul className="projectA">
            <li>
              <h9>First Major Project</h9>
              <br />
              <br />
              <a href="https://github.com/Sesethu97/Blogging" className="links">
                <h8>BLOG</h8>
              </a>

              <br />
              <br />

                <p className="progress"><b>Progress:</b> Almost Complete</p>
                <br />
                (need to figure out how users can like/dislike items)
            </li>
          </ul>
          <br />
          <br />

          <ul className="projectB">
            <li>
              <h9>2nd Major Project</h9>
              <br />
              <br />

              <a
                href="https://github.com/Sesethu97/photoalbum"
                className="links">
                <h8>YearBook</h8>
              </a>
              <br />
              <br />

              <p className="progess">
                <b>Progress:</b> Still in the beginning stages
              </p>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
