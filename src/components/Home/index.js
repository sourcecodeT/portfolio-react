import React, { useEffect } from "react";

import animatedHOC from "hocs/animated";
import { connect } from "react-redux";
import { TweenMax, TimelineMax, Power1 } from "gsap";
import { Link } from "react-router-dom";
import FLogo from "resources/f_logo.png";
import actions from "../../redux/actions/nav.actions";
import "styles/home.css";

import useWhyDidYouUpdate from "hooks/useWhyDidYouUpdate";

function Home(props) {
  useWhyDidYouUpdate("Home", props);
  useEffect(() => {
    const tl = new TimelineMax();
    const ptl = new TimelineMax();
    const sptl = new TimelineMax();
    const btl = new TimelineMax();
    const ltl = new TimelineMax();
    let largeFont = "54px";
    let smallFont = "48px";

    tl.staggerFrom(".home_it1", 1, { opacity: 0 }, 0.05, "+=.3")
      .staggerTo(".home_it1", 0.1, { color: "#59bd8e" }, 0.05, "-=1.4")
      .staggerTo(
        ".home_it1",
        0.3,
        { fontSize: largeFont, ease: Power1.easeOut },
        0.05,
        "-=1.4"
      )
      .staggerTo(".home_it1", 0.5, { color: "#ffffff" }, 0.03, "-=1")
      .staggerTo(
        ".home_it1",
        0.5,
        { fontSize: smallFont, ease: Power1.easeOut },
        0.03,
        "-=1"
      );

    tl.staggerFrom(".home_it2", 1, { opacity: 0 }, 0.05, "-=.6")
      .staggerTo(".home_it2", 0.1, { color: "#59bd8e" }, 0.05, "-=1.6")
      .staggerTo(
        ".home_it2",
        0.3,
        { fontSize: largeFont, ease: Power1.easeOut },
        0.05,
        "-=1.6"
      )
      .staggerTo(".home_it2", 0.5, { color: "#ffffff" }, 0.03, "-=1.3")
      .staggerTo(
        ".home_it2",
        0.5,
        { fontSize: smallFont, ease: Power1.easeOut },
        0.03,
        "-=1.3"
      );

    tl.staggerFrom(".home_it3", 1, { opacity: 0 }, 0.05, "-=.8")
      .staggerTo(".home_it3", 0.1, { color: "#59bd8e" }, 0.05, "-=1.9")
      .staggerTo(
        ".home_it3",
        0.3,
        { fontSize: largeFont, ease: Power1.easeOut },
        0.05,
        "-=1.9"
      )
      .staggerTo(".home_it3", 0.5, { color: "#ffffff" }, 0.03, "-=1.4")
      .staggerTo(
        ".home_it3",
        0.5,
        { fontSize: smallFont, ease: Power1.easeOut },
        0.04,
        "-=1.4"
      );

    ptl.from(".home_p", 1, { opacity: 0 }, "+=2");
    sptl.from(".home_h1_span", 1, { opacity: 0 }, "+=2");
    ltl.from(".home_logo", 1, { opacity: 0 }, "+=2");
    btl
      .from(".home_button", 1, { opacity: 0 }, "+=2")
      .from(".home_button_span", 1, { opacity: 0 }, "-=1");

    onWindowResize();
    window.addEventListener("resize", onWindowResize);

    return () => window.removeEventListener("resize", onWindowResize);
  }, []);

  function onWindowResize() {
    let logoHeight;
    let logoLeft;
    let ease = Power1.easeOut;
    let logoStyle;
    const innerWidth = window.innerWidth;
    if (innerWidth >= 1290) {
      logoHeight = 500;
      logoLeft = "55%";
    }
    if (innerWidth < 1290) {
      logoHeight = 500;
      logoLeft = "55%";
    }
    if (innerWidth < 1188) {
      logoHeight = 400;
      logoLeft = "55%";
    }
    if (innerWidth < 1000) {
      logoLeft = "60%";
    }
    if (innerWidth < 850) {
      logoLeft = "65%";
      logoHeight = 300;
    }
    if (innerWidth < 740) {
      logoHeight = 200;
    }

    logoStyle = {
      height: logoHeight,
      left: logoLeft,
      ease
    };
    if (logoHeight) {
      TweenMax.to(".home_logo", 0.3, logoStyle);
    }
    let introLeft;
    let introStyle;
    let introPadding;

    if (innerWidth >= 1100) {
      introLeft = 0;
      introPadding = "0 0 0 100px";
    }
    if (innerWidth < 1100) {
      introLeft = -50;
      introPadding = "0 0 0 100px";
    }
    if (innerWidth < 740) {
      introLeft = -90;
      introPadding = "0 0 0 100px";
    }
    if (innerWidth <= 600) {
      introLeft = 0;
      introPadding = "0 0 0 0px";
    }
    if (innerWidth < 480) {
      introLeft = 0;
      introPadding = "0 0 0 0px";
    }
    introStyle = {
      left: introLeft,
      padding: introPadding,
      ease
    };
    TweenMax.to(".home_intro_section", 0.3, introStyle);
  }

  function enterIT(type, index) {
    const tl = new TimelineMax();
    tl.to(`.home_${type}_${index}`, 0.1, { color: "#59bd8e" });
    tl.to(
      `.home_${type}_${index}`,
      0.3,
      { fontSize: "56px", color: "#59bd8e", ease: Power1.easeOut },
      "-=.1"
    );
  }

  function leaveIT(type, index) {
    const tl = new TimelineMax();
    tl.to(`.home_${type}_${index}`, 0.5, { color: "#ffffff" });
    tl.to(
      `.home_${type}_${index}`,
      0.5,
      { fontSize: "48px", ease: Power1.easeOut },
      "-=.3"
    );
  }

  function enterButton() {
    TweenMax.to(".home_button", 0.3, {
      backgroundColor: "#59bd8e",
      color: "white"
    });
  }

  function leaveButton() {
    TweenMax.to(".home_button", 0.3, {
      backgroundColor: "transparent",
      color: "#59bd8e"
    });
  }

  function render() {
    return (
      <main className={"Home"}>
        <section className="home_intro_section">
          <span className="home_h1_span">{"<h1>"}</span>
          <aside>{renderTextIntro("Hi, ", "it1")}</aside>
          <aside>{renderTextIntro("I'm Đào Ngọc Thành,", "it2")}</aside>
          <aside>{renderTextIntro("web developer.", "it3")}</aside>
          <span className="home_h1_span">{"<h1/>"}</span>
          <p className="home_p">
            <span className="home_p_span">{"<p>"}</span>
            &nbsp; ReactJS / NodeJS / HTML5 / CSS3 / JS &nbsp;
            <span className="home_p_span">{"</p>"}</span>
          </p>
          <div>
            <span className="home_button_span">{"<button>"}</span>
            <Link className="home_link" to="/projects">
              <button
                className="home_button"
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                V I E W &nbsp;&nbsp; P R O J E C T S
              </button>
            </Link>
            <span className="home_button_span">{"</button>"}</span>
          </div>
        </section>
        <img alt="home logo" className="home_logo" src={FLogo} />
      </main>
    );
  }

  function renderTextIntro(text, it) {
    return text.split("").map((word, i) => (
      <h1
        key={i}
        onMouseEnter={() => enterIT(it, i)}
        onMouseLeave={() => leaveIT(it, i)}
        className={`home_it home_${it} home_${it}_${i}`}
      >
        {word}
        {word === " " ? "\xa0" : ""}
      </h1>
    ));
  }

  return render();
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setMountedComp: value => {
      dispatch({
        type: actions.SET_MOUNTED_COMP,
        value
      });
    },
    setAnimatedComp: route => {
      dispatch({
        type: actions.SET_ANIMATED_COMP,
        animatedComp: {
          status: false,
          route
        }
      });
    }
  };
};

const animatedHome = animatedHOC(Home);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(animatedHome);
