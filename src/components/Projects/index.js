import React, { useEffect } from "react";

import { connect } from "react-redux";
import actions from "../../redux/actions/nav.actions";
import AnimatedHOC from "hocs/animated";
import { TweenMax, TimelineMax, Power1 } from "gsap";
import { debounce } from "utils";
import projects from "./projects";

import "styles/projects.css";

function Projects() {
  useEffect(() => {
    const tl = new TimelineMax();

    tl.staggerFrom(".projects_it", 1, { opacity: 0 }, 0.05, "+=.2")
      .staggerTo(".projects_it", 0.1, { color: "#59bd8e" }, 0.05, "-=1.5")
      .staggerTo(
        ".projects_it",
        0.3,
        { fontSize: "56px", ease: Power1.easeOut },
        0.05,
        "-=1.3"
      )
      .staggerTo(".projects_it", 0.5, { color: "#ffffff" }, 0.03, "-=1")
      .staggerTo(
        ".projects_it",
        0.5,
        { fontSize: "48px", ease: Power1.easeOut },
        0.03,
        "-=.8"
      );

    const ttl = new TimelineMax();
    ttl
      .fromTo(".projects_p", 1, { opacity: 0 }, { opacity: 1 }, "+=.2")
      .fromTo(".projects_span", 1, { opacity: 0 }, { opacity: 1 }, "-=1");

    const ptl = new TimelineMax(); // picture
    ptl
      .fromTo(".projects_profile", 1, { opacity: 0 }, { opacity: 1 }, "+=.2")
      .fromTo(
        ".projects_profile_mobile",
        1,
        { opacity: 0 },
        { opacity: 1 },
        "-=1"
      );

    window.onresize = debounce(onWindowResize, 50, 200);
    onWindowResize(true);
  }, []);

  function onWindowResize(immediate) {
    let ease = Power1.easeOut;
    let textTop;
    let textPadding;
    let textStyle;
    let time = immediate ? 0 : 0.3;
    const innerWidth = window.innerWidth;
    if (innerWidth > 1100) {
      textPadding = "50px 50px 20px 50px";
      textTop = 0;
    }
    if (innerWidth <= 1100) {
      textPadding = "50px 50px 20px 50px";
      textTop = 70;
    }
    textStyle = {
      marginTop: textTop,
      padding: textPadding,
      ease
    };

    TweenMax.to(".projects_intro_section", time, textStyle);
  }

  function enterProject(index) {
    TweenMax.to(`.projects_img_${index}`, 0.4, { opacity: 1 });
    TweenMax.to(`.projects_h2_${index}`, 0.4, { color: "#59bd8e" });
  }

  function leaveProject(index) {
    TweenMax.to(`.projects_img_${index}`, 0.4, { opacity: 0.7 });
    TweenMax.to(`.projects_h2_${index}`, 0.4, { color: "white" });
  }

  function enterIT(type, index) {
    const tl = new TimelineMax();
    tl.to(`.projects_${type}_${index}`, 0.1, { color: "#59bd8e" });
    tl.to(
      `.projects_${type}_${index}`,
      0.3,
      { fontSize: "56px", color: "#59bd8e", ease: Power1.easeOut },
      "-=.1"
    );
  }

  function leaveIT(type, index) {
    const tl = new TimelineMax();
    tl.to(`.projects_${type}_${index}`, 0.5, { color: "#ffffff" });
    tl.to(
      `.projects_${type}_${index}`,
      0.5,
      { fontSize: "48px", ease: Power1.easeOut },
      "-=.3"
    );
  }

  function enterButtons(type) {
    TweenMax.to(`.fa-${type}-projects`, 0.4, { color: "white" });
  }

  function leaveButtons(type) {
    TweenMax.to(`.fa-${type}-projects`, 0.4, { color: "#59bd8e" });
  }

  function render() {
    return (
      <main className={"Projects"}>
        <section className="projects_intro_section">
          <span className="projects_h1_span projects_span">{"<h1>"}</span>
          <aside>{renderTextIntro("My Projects")}</aside>
          <span className="projects_h1_span projects_span">{"</h1>"}</span>
          <span className="projects_p_span projects_span">{"<p>"}</span>
          <p className="projects_p">
            You can also check out my github for more of my mini projects!{" "}
            {renderGitHubLink()}
          </p>
          <span className="projects_p_span projects_span">{"</p>"}</span>
        </section>
        <section className="projects_project_section">
          {renderProjects()}
        </section>
      </main>
    );
  }

  function renderTextIntro(text) {
    return text.split("").map((el, i) => (
      <h1
        key={i}
        onMouseEnter={() => enterIT("it", i)}
        onMouseLeave={() => leaveIT("it", i)}
        className={`projects_it projects_it_${i}`}
      >
        {el}
        {el === " " ? "\xa0" : ""}
      </h1>
    ));
  }

  function renderProjects() {
    return projects.map((project, index) => (
      <div
        onMouseEnter={() => enterProject(index)}
        onMouseLeave={() => leaveProject(index)}
        key={`project-${index}`}
        className={`projects_el`}
      >
        {project.href ? (
          <a href={project.href} target="_blank" rel="noopener noreferrer">
            <img
              className={`projects_img_${index}`}
              alt={`project page ${project.name}`}
              src={project.image}
            />
          </a>
        ) : (
          <img
            className={`projects_img_${index}`}
            alt={`project page ${project.name}`}
            src={project.image}
          />
        )}
        <h2 className={`projects_h2_${index}`}>{project.name}</h2>
        {project.description}
      </div>
    ));
  }

  function renderGitHubLink() {
    return (
      <a
        onMouseEnter={() => enterButtons("github")}
        onMouseLeave={() => leaveButtons("github")}
        className="projects_social_media"
        href="https://github.com/sourcecodeT"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fab fa-github fa-github-projects" />
      </a>
    );
  }

  return render();
}

const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    setMountedComp: value => {
      dispatch({ type: actions.SET_MOUNTED_COMP, value });
    }
  };
};

const animatedProject = AnimatedHOC(Projects);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(animatedProject);
