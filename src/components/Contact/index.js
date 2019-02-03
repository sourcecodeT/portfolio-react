import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { TimelineMax, Power1, TweenMax } from "gsap";
import TLink from "components/share/TLink";
import GoogleMap from "./GoogleMap";
import AnimatedHOC from "hocs/animated";
import { debounce } from "utils";
import actions from "../../redux/actions/nav.actions";

import "styles/contact.css";

function Contact() {
  const emailValidationRegex = /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const [emailError, setEmalError] = useState(false);

  useEffect(() => {
    const tl = new TimelineMax(); // heading

    tl.staggerFrom(".contact_it", 1, { opacity: 0 }, 0.05, "+=.2")
      .staggerTo(".contact_it", 0.1, { color: "#59bd8e" }, 0.05, "-=1.3")
      .staggerTo(
        ".contact_it",
        0.3,
        { fontSize: "56px", ease: Power1.easeOut },
        0.05,
        "-=1.3"
      )
      .staggerTo(".contact_it", 0.5, { color: "#ffffff" }, 0.03, "-=1")
      .staggerTo(
        ".contact_it",
        0.5,
        { fontSize: "48px", ease: Power1.easeOut },
        0.03,
        "-=.8"
      );

    const ttl = new TimelineMax(); // text
    ttl
      .fromTo(".contact_p", 1, { opacity: 0 }, { opacity: 1 }, "+=.2")
      .fromTo(".contact_span", 1, { opacity: 0 }, { opacity: 1 }, "-=1");

    const ptl = new TimelineMax(); // picture
    ptl.fromTo(".contact_map", 1, { opacity: 0 }, { opacity: 1 }, "+=.2");

    const ftl = new TimelineMax(); // form
    ftl.fromTo(".contact_form", 1, { opacity: 0 }, { opacity: 1 }, "+=.2");

    window.onresize = debounce(onWindowResize, 50, 200);
    onWindowResize(true);
  }, []);

  function onWindowResize(immediate) {
    let ease = Power1.easeOut;
    let textWidth;
    let textStyle;
    let time = immediate ? 0 : 0.3;
    const innerWidth = window.innerWidth;
    if (innerWidth > 1100) {
      textWidth = "40%";
    }
    if (innerWidth <= 1100) {
      textWidth = "40%";
    }
    if (innerWidth < 801) {
      textWidth = "80%";
    }

    textStyle = {
      width: textWidth,
      ease
    };

    TweenMax.to(".contact_intro_section", time, textStyle);

    let pSize;
    let pStyle;
    if (innerWidth > 500) {
      pSize = "16px";
    }
    if (innerWidth <= 500) {
      pSize = "12px";
    }
    pStyle = {
      fontSize: pSize
    };
    TweenMax.to(".contact_p", time, pStyle);
    TweenMax.to(".contact_span", time, pStyle);

    let inputPadding;
    let inputStyle;

    if (innerWidth >= 650) {
      inputPadding = 15;
    }
    if (innerWidth < 650) {
      inputPadding = 10;
    }
    inputStyle = {
      padding: inputPadding
    };
    TweenMax.to(".contact_form_input", time, inputStyle);
  }

  function focusInput(type) {
    if (!emailError) {
      TweenMax.to(`.contact_form_input_${type}`, 0.5, {
        outlineColor: "#59bd8e"
      });
    }
  }

  function blurInput(type) {
    if (!emailError) {
      TweenMax.to(`.contact_form_input_${type}`, 0, {
        outlineColor: "#37393b"
      });
    }
  }

  function enterButton() {
    TweenMax.to(".contact_form_button", 0.3, {
      backgroundColor: "#59bd8e",
      color: "white"
    });
  }

  function leaveButton() {
    TweenMax.to(".contact_form_button", 0.3, {
      backgroundColor: "#252627",
      color: "#59bd8e"
    });
  }

  function render() {
    return (
      <main className={"Contact"}>
        <section className="contact_intro_section">
          <span className="contact_body_span contact_span">{"<body>"}</span>
          <span className="contact_h1_span contact_span">{"<h1>"}</span>
          <aside className="contact_h1" />
          <span className="contact_h1_span contact_span">{"<h1/>"}</span>
          <span className="contact_p_span contact_span">{"<p>"}</span>
          <p className="contact_p">
            Contact me by email at
            <TLink
              page="contact"
              type="email"
              href="mailto:fernandodlv32@gmail.com"
              content="fernandodlv32@gmail.com"
            />
            {", or use the form below. I'll get back to you ASAP!"}
          </p>
          <span className="contact_p_span contact_span">{"</p>"}</span>
          <span className="contact_form_span contact_span">{"<form>"}</span>
          {renderContactForm()}
          <span className="contact_form_span contact_span">{"</form>"}</span>
          <span className="contact_body_span contact_span">{"</body>"}</span>
        </section>
        <GoogleMap />
      </main>
    );
  }

  function renderContactForm() {
    return (
      <form className="contact_form">
        <aside>
          <input
            name="name"
            onChange={e => setName(e.target.value)}
            value={name}
            onBlur={() => blurInput("name")}
            onFocus={() => focusInput("name")}
            className="contact_form_input contact_form_input_name"
            placeholder="Name"
          />
          <input
            style={{ border: emailError ? "1px solid red" : null }}
            name="email"
            onChange={e => {
              setEmail(e.target.value);
              if (!emailValidationRegex.test(e.target.value)) {
                setEmalError(true);
              } else {
                setEmalError(false);
              }
            }}
            value={email}
            onBlur={() => blurInput("email")}
            onFocus={() => focusInput("email")}
            className="contact_form_input contact_form_input_email"
            placeholder="*Email"
          />
        </aside>
        <input
          name="subject"
          onChange={e => setSubject(e.target.value)}
          value={subject}
          onBlur={() => blurInput("subject")}
          onFocus={() => focusInput("subject")}
          className="contact_form_input contact_form_input_subject"
          placeholder="Subject"
        />
        <textarea
          name="message"
          onChange={e => setMsg(e.target.value)}
          value={msg}
          onBlur={() => blurInput("message")}
          onFocus={() => focusInput("message")}
          className="contact_form_input contact_form_input_message"
          placeholder="*Message"
          rows={5}
        />
        <div
          style={{
            position: "relative",
            height: 0,
            display: "flex",
            justifyContent: "flex-end",
            top: 55
          }}
        >
          <button
            onMouseEnter={enterButton}
            onMouseLeave={leaveButton}
            className="contact_form_button"
          >
            S E N D
          </button>
        </div>
      </form>
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

const animatedContact = AnimatedHOC(Contact);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(animatedContact);
