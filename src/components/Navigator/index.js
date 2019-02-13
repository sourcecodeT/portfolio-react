import React, { useState, useEffect } from "react";

import Logo from "resources/logo.png";
import { TweenMax } from "gsap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../redux/actions/nav.actions";
import useWhyDidYouUpdate from "hooks/useWhyDidYouUpdate";

import "styles/nav.css";

function Navigator(props) {
  const [comp, setComp] = useState("home");
  const [mobileNav, setMobileNav] = useState(false);
  const navButtons = [
    { title: "HOME", iconName: "home", route: "/" },
    { title: "ABOUT", iconName: "user", route: "/about" },
    { title: "SKILLS", iconName: "cog", route: "/skills" },
    { title: "PROJECTS", iconName: "eye", route: "/projects" },
    { title: "CONTACT", iconName: "envelope", route: "/contact" }
  ];

  useWhyDidYouUpdate("Navigator", props);
  useEffect(() => {
    TweenMax.to(`.fa-${comp}`, 0.4, { color: "#59bd8e" });
    TweenMax.to(`.p-${comp}`, 0.4, { color: "#59bd8e", opacity: 0 }, "-=.4");
    TweenMax.to(".nav_target", 0.4, { opacity: comp === "home" ? 1 : 0.7 });
  }, []);

  useEffect(() => {
    const moutedComp = props.comp;
    TweenMax.to(`.fa-lg`, 0.4, { color: "#42474b" });
    TweenMax.to(`.fa-${moutedComp}`, 0.4, { color: "#59bd8e" });
    TweenMax.to(`.p-${moutedComp}`, 0.4, { color: "#59bd8e", opacity: 0 });
    TweenMax.to(".nav_target", 0.4, {
      opacity: moutedComp === "home" ? 1 : 0.7
    });
    setComp(moutedComp);
  }, [props.comp]);

  function enterNavButtons(type, bool) {
    if (bool) {
      TweenMax.to(`.fa-${type}`, 0.4, { color: "#59bd8e" });
    } else {
      TweenMax.to(`.fa-${type}`, 0.4, { color: "#181818" });
      TweenMax.to(`.p-${type}`, 0.4, { color: "#59bd8e", opacity: 1 }, "-=.4");
    }
  }

  function leaveNavButtons(type, bool) {
    if (bool) {
      TweenMax.to(`.fa-${type}`, 0.4, { color: "#42474b" });
    } else {
      TweenMax.to(`.fa-${type}`, 0.4, {
        color: type !== comp ? "#42474b" : "#59bd8e"
      });
      TweenMax.to(
        `.p-${type}`,
        0.4,
        { color: type !== comp ? "#181818" : "#59bd8e", opacity: 0 },
        "-=.4"
      );
    }
  }

  function enterMobileNav() {
    TweenMax.to(`.fa-bars`, 0.4, { color: "#59bd8e" });
  }

  function leaveMobileNav() {
    TweenMax.to(`.fa-bars`, 0.4, { color: mobileNav ? "#ffffff" : "#42474b" });
  }

  function enterNavIcon() {
    TweenMax.to(`.nav_target`, 0.3, { opacity: 1 });
  }

  function leaveNavIcon() {
    TweenMax.to(`.nav_target`, 0.3, { opacity: comp === "home" ? 1 : 0.7 });
  }

  function toggleMobileNav() {
    TweenMax.to(".mobile_nav_buttons", 0.4, {
      left: mobileNav ? "100%" : "0px",
      opacity: mobileNav ? 0 : 1
    });
    setMobileNav(prevState => !prevState);
  }

  function animateComp(e, btn) {
    e.preventDefault();
    props.setAnimatedComp(btn.route);
    props.setMoutedComp(btn.iconName);
    if (window.innerWidth <= 500 && mobileNav) {
      toggleMobileNav();
    }
  }

  function render() {
    return (
      <main className={"Nav"}>
        {renderLogo()}
        <section className="nav_buttons">
          {navButtons.map(btn => renderBtn(btn))}
        </section>
        {renderSocialMedia()}
        <section className="nav_mobile">
          <i
            onMouseEnter={enterMobileNav}
            onMouseLeave={leaveMobileNav}
            onClick={toggleMobileNav}
            className="fas fa-2x fa-bars"
          />
        </section>
        <section className="mobile_nav_buttons">
          {navButtons.map(btn => renderBtn(btn))}
        </section>
      </main>
    );
  }

  function renderLogo() {
    return (
      <Link
        onMouseEnter={enterNavIcon}
        onMouseLeave={leaveNavIcon}
        onClick={e => animateComp(e, "/")}
        className="nav_link nav_target"
        to="/"
      >
        <section className="nav_icon">
          <img height={60} src={Logo} alt="profile logo" />
        </section>
      </Link>
    );
  }

  function renderBtn(btn) {
    return (
      <Link
        key={`btn-${btn.title}`}
        onClick={e => animateComp(e, btn)}
        className="nav_link"
        to={btn.route}
      >
        <i
          onMouseEnter={() => enterNavButtons(btn.iconName)}
          onMouseLeave={() => leaveNavButtons(btn.iconName)}
          className={`fas fa-lg fa-${btn.iconName}`}
        >
          <p className={`p-${btn.iconName}`}>{btn.title}</p>
        </i>
      </Link>
    );
  }

  function renderSocialMedia() {
    const socialMedia = [
      { href: "https://www.linkedin.com/in/fernandodlv", name: "linkedin" },
      { href: "https://www.facebook.com/fernandodlv32", name: "facebook" },
      { href: "https://www.instagram.com/f.dlv", name: "instagram" },
      { href: "https://github.com/ClassyFD", name: "github" }
    ];
    return (
      <section className="nav_social_media">
        {socialMedia.map(item => renderSocialMediaItem(item))}
      </section>
    );
  }

  function renderSocialMediaItem(item) {
    return (
      <a
        href={item.href}
        rel="noopener noreferrer"
        target="_blank"
        key={`item-${item.name}`}
      >
        <i
          onMouseEnter={() => enterNavButtons(`${item.name}-nav`, true)}
          onMouseLeave={() => leaveNavButtons(`${item.name}-nav`, true)}
          className={`fab fa-${item.name} fa-${item.name}-nav`}
        />
      </a>
    );
  }

  return render();
}

const mapStateToProps = state => {
  return {
    comp: state.nav.comp
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAnimatedComp: route => {
      dispatch({
        type: actions.SET_ANIMATED_COMP,
        value: { status: true, route }
      });
    },
    setMoutedComp: value => {
      dispatch({
        type: actions.SET_MOUNTED_COMP,
        value
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigator);
