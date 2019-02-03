import React, { useEffect } from "react";
import { connect } from "react-redux";
import "styles/about.css";
import actions from "../../redux/actions/nav.actions";
import Profile from "resources/profile_picture.jpg";
import { TimelineMax, Power1, TweenMax } from "gsap";
import animatedHOC from "hocs/animated";
import TLink from "components/share/TLink";
import useWhyDidYouUpdate from "hooks/useWhyDidYouUpdate";

function About(props) {
  useWhyDidYouUpdate("About", props);
  useEffect(() => {
    const tl = new TimelineMax(); // heading

    tl.staggerFrom(".about_it", 1, { opacity: 0 }, 0.05, "+=.2")
      .staggerTo(".about_it", 0.1, { color: "#59bd8e" }, 0.05, "-=1.3")
      .staggerTo(
        ".about_it",
        0.3,
        { fontSize: "56px", ease: Power1.easeOut },
        0.05,
        "-=1.3"
      )
      .staggerTo(".about_it", 0.5, { color: "#ffffff" }, 0.03, "-=1")
      .staggerTo(
        ".about_it",
        0.5,
        { fontSize: "48px", ease: Power1.easeOut },
        0.03,
        "-=.8"
      );

    const ttl = new TimelineMax(); // text
    ttl
      .fromTo(".about_p", 1, { opacity: 0 }, { opacity: 1 }, "+=.2")
      .fromTo(".about_span", 1, { opacity: 0 }, { opacity: 1 }, "-=1");

    const ptl = new TimelineMax(); // picture
    ptl
      .fromTo(".about_profile", 1, { opacity: 0 }, { opacity: 1 }, "+=.2")
      .fromTo(
        ".about_profile_mobile",
        1,
        { opacity: 0 },
        { opacity: 1 },
        "-=1"
      );

    onWindowResize(true);
    window.addEventListener("resize", onWindowResize);
    return () => window.removeEventListener("resize", onWindowResize);
  }, []);

  function onWindowResize(immediate) {
    let ease = Power1.easeOut;
    let textLeft;
    let textTop;
    let textPadding;
    let textMargin;
    let textWidth;
    let textStyle;
    let time = immediate ? 0 : 0.3;
    const innerWidth = window.innerWidth;
    if (innerWidth > 1100) {
      textLeft = 0;
      textTop = 0;
      textPadding = "0 0 0 100px";
      textWidth = "600px";
      textMargin = 0;
    }
    if (innerWidth <= 1100) {
      textLeft = 0;
      textTop = 70;
      textPadding = "0 0 0 20px";
      textWidth = "600px";
      textMargin = 0;
    }
    if (innerWidth < 1000) {
      textLeft = 0;
      textTop = 70;
      textPadding = 0;
      textWidth = "500px";
      textMargin = "0 auto";
    }
    if (innerWidth < 700) {
      textLeft = 0;
      textTop = 70;
      textPadding = 0;
      textWidth = "400px";
      textMargin = "0 auto";
    }
    if (innerWidth < 500) {
      textLeft = 0;
      textTop = 70;
      textPadding = 0;
      textWidth = "350px";
      textMargin = "0 auto";
    }
    if (innerWidth < 420) {
      textLeft = 0;
      textTop = 70;
      textPadding = 0;
      textWidth = "80%";
      textMargin = "0 auto";
    }
    textStyle = {
      left: textLeft,
      marginTop: textTop,
      padding: textPadding,
      width: textWidth,
      margin: textMargin,
      ease
    };

    TweenMax.to(".about_intro_section", time, textStyle);

    let pSize;
    let pStyle;
    if (innerWidth >= 420) {
      pSize = "16px";
    }
    if (innerWidth < 420) {
      pSize = "12px";
    }
    pStyle = {
      fontSize: pSize
    };
    TweenMax.to(".about_p", time, pStyle);
    TweenMax.to(".about_span", time, pStyle);

    let imageHeight;
    let imageWidth;
    let imageLeft;

    if (innerWidth >= 1250) {
      imageHeight = 400;
      imageWidth = 400;
      imageLeft = "5%";
    }

    if (innerWidth < 1250) {
      imageHeight = 300;
      imageWidth = 300;
      imageLeft = "2%";
    }
    if (innerWidth < 1100) {
      imageHeight = 300;
      imageWidth = 300;
      imageLeft = "5%";
    }

    let imageStyle = {
      height: imageHeight,
      width: imageWidth,
      left: imageLeft,
      ease
    };

    TweenMax.to(".about_profile", time, imageStyle);
  }

  function enterIT(type, index) {
    const tl = new TimelineMax();
    tl.to(`.about_${type}_${index}`, 0.1, { color: "#59bd8e" });
    tl.to(
      `.about_${type}_${index}`,
      0.3,
      { fontSize: "56px", color: "#59bd8e", ease: Power1.easeOut },
      "-=.1"
    );
  }

  function leaveIT(type, index) {
    const tl = new TimelineMax();
    tl.to(`.about_${type}_${index}`, 0.5, { color: "#ffffff" });
    tl.to(
      `.about_${type}_${index}`,
      0.5,
      { fontSize: "48px", ease: Power1.easeOut },
      "-=.3"
    );
  }

  function enterButtons(type) {
    TweenMax.to(`.fa-${type}-about`, 0.4, { color: "white" });
  }

  function leaveButtons(type) {
    TweenMax.to(`.fa-${type}-about`, 0.4, { color: "#59bd8e" });
  }

  function render() {
    return (
      <main className={"About"}>
        <section className="about_intro_section">
          <span className="about_body_span about_span">{"<body>"}</span>
          <span className="about_h1_span about_span">{"<h1>"}</span>
          <aside>
            {renderTextIntro("About me", "it")}
            <img
              alt="Mobile profile pic of me"
              src={Profile}
              className="about_profile_mobile"
            />
          </aside>
          <span className="about_h1_span about_span">{"<h1/>"}</span>
          <span className="about_p_span about_span">{"<p>"}</span>
          <p className="about_p">
            I began learning to code in 2017, at
            <TLink
              href="https://freecodecamp.org"
              type="code"
              content="freecodecamp.org"
              page="about"
            />
            . There, I taught myself the basics of HTML, CSS and JavaScript. I
            also created some of my first projects: A
            <TLink
              href="https://pokedex-dlv.firebaseapp.com/"
              type="poke"
              content="Pokedex"
              page="about"
            />
            and the
            <TLink
              href="https://game-of-life-dlv.firebaseapp.com/"
              type="gol"
              content="Game of life."
              page="about"
            />
            They {"weren't"} perfect, but they were fun to make. It definitely
            set the path to pursuing a career in software {"development!"} the
            path to pursuing a career in software development!
          </p>
          <span className="about_br_span about_span">{"</p> <p>"}</span>
          <p className="about_p">
            Later that same year, I attended
            <TLink href="" type="dev" content="DevMountain" page="about" />, an
            intense 13 week coding bootcamp. While there, I started learning
            fullstack web development, specifically with ReactJS. I spent 900+
            hours learning new technologies and developing personal projects.
          </p>
          <span className="about_br_span about_span">{"</p> <p>"}</span>
          <p className="about_p">
            After graduating from the bootcamp and receiving my Javascript Web
            Development
            <TLink
              href="https://www.youracclaim.com/badges/a02aa461-981c-4ca2-a195-1df270e5716f"
              type="cert"
              content="Badge"
              page="about"
            />
            , I joined a startup company named
            <TLink
              href="https://vibix-web.firebaseapp.com/"
              type="vibix"
              content="Vibix"
              page="about"
            />
            . We worked on developing shopify apps to automate{"users'daily"}
            time-consuming tasks. I was solely responsible to build the web
            presence of the company by utilizing the latest technology
            (ReactJS/Redux/Cloud Functions/Firebase).
          </p>
          <span className="about_br_span about_span">{"</p> <p>"}</span>
          <p className="about_p">
            I {"don't"} just code, music and fitness are also a big part of my
            life! If you would like to see more, check out my social media!
            {renderSocialMedia()}
          </p>
          <span className="about_p_span about_span">{"</p>"}</span>
          <span className="about_body_span about_span">{"</body>"}</span>
        </section>
        <img
          alt="Profile pic of me"
          className="about_profile"
          height={32}
          width={32}
          src={Profile}
        />
      </main>
    );
  }

  function renderTextIntro(text, it) {
    return text.split("").map((word, i) => (
      <h1
        key={i}
        onMouseEnter={() => enterIT(it, i)}
        onMouseLeave={() => leaveIT(it, i)}
        className={`about_it about_${it}_${i}`}
      >
        {word}
        {word === " " ? "\xa0" : ""}
      </h1>
    ));
  }

  function renderSocialMedia() {
    const socialMediaItems = [
      { name: "instagram", href: "https://www.instagram.com/f.dlv" },
      { name: "facebook", href: "https://www.facebook.com/fernandodlv32" },
      { name: "linkedin", href: "https://www.linkedin.com/in/fernandodlv" }
    ];
    return socialMediaItems.map(item => renderSocialMediaItem(item));
  }

  function renderSocialMediaItem(item) {
    return (
      <a
        key={`social-${item.name}`}
        className="about_social_media"
        href={item.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        <i
          onMouseEnter={() => enterButtons(item.name)}
          onMouseLeave={() => leaveButtons(item.name)}
          className={`fab fa-${item.name} fa-${item.name}-about`}
        />
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
      dispatch({
        type: actions.SET_MOUNTED_COMP,
        value
      });
    }
  };
};

const AnimatedAbout = animatedHOC(About);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimatedAbout);
