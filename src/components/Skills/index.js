import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { TimelineMax, TweenMax, Power1, Power0 } from 'gsap';
import { Link } from 'react-router-dom';

import AnimatedHOC from "hocs/animated";
import { debounce } from "utils";
import actions from "../../redux/actions/nav.actions";

import "styles/skills.css";

const animationTL = new TimelineMax();
function Skills(props) {
  const [list1, setList1] = useState([
    'JS', 'CSS3', 'HTML5', 'AngularJS', 'NodeJS',
    'SASS', 'SCSS', 'MassiveJS', 'PostgreSQL', 'Redux',
    'ExpressJS', 'Amazon Web Services', 'Google Cloud Platform', 'Firebase',
    'RESTful APIs', 'Chrome Extension Development', 'Greensock Animating Platform',
    'NGINX', 'Linux/Unix administration', 'Python', 'Git/Github', 'jQuery',
    'Bootstrap', 'Auth0', 'StripeJS'
  ]);
  const [list2, setList2] = useState(["ReactJS"]);
  const [choice, setChoice] = useState("list1");
  const [currentText, setCurrentText] = useState("ReactJS");
  const [previousText, setPreviousText] = useState("ReactJS");

  useEffect(
    () => {
      const tl = new TimelineMax(); // heading

      tl.staggerFrom('.skills_it', 1, { opacity: 0 }, .05, '+=.2')
        .staggerTo('.skills_it', .1, { color: '#59bd8e' }, .05, '-=1.3')
        .staggerTo('.skills_it', .3, { fontSize: '56px', ease: Power1.easeOut }, .05, '-=1.3')
        .staggerTo('.skills_it', .5, { color: '#ffffff' }, .03, '-=1')
        .staggerTo('.skills_it', .5, { fontSize: '48px', ease: Power1.easeOut }, .03, '-=.8');

      const ttl = new TimelineMax(); // text
      ttl.fromTo('.skills_p', 1, { opacity: 0 }, { opacity: 1 }, '+=.2')
        .fromTo('.skills_span', 1, { opacity: 0 }, { opacity: 1 }, '-=1');

      const ptl = new TimelineMax(); // picture
      ptl.fromTo('.skills_wrap', 1, { opacity: 0 }, { opacity: 1 }, '+=.2')

      animateBox();
      window.onresize = debounce(onWindowResize, 50, 200);
      onWindowResize(true);
      return () => {
        window.onreset = null;
        animationTL.clear();
      };
    },
    []
  );

  function animateBox() {
    const list = choice === "list1" ? list1 : list2;
    const randomNum = Math.ceil(Math.random() * 4);
    const rotationX = randomNum === 1 ? '90deg' : randomNum === 2 ? '-90deg' : '0deg';
    const rotationY = randomNum === 3 ? '90deg' : randomNum === 4 ? '-90deg' : '0deg';
    const item = list[Math.floor(Math.random() * list.length)];
    const index = list.indexOf(item);

    if (choice === "list1") {
      list2.push(list1[index]);
      list1.splice(index, 1)
    } else {
      list1.push(list2[index]);
      list2.splice(index, 1)
    }

    if (list.length === 0) {
      const newChoice = choice === "list1" ? "list2" : "list1";
      setChoice(newChoice);
    }

    setCurrentText(item);
    setPreviousText(currentText);
    setList1([...list1]);
    setList2([...list2]);

    animationTL.to('.skills_cube', 0, { rotationY: '0deg', rotationX: '0deg' })
      .to('.skills_cube', 1.5, { rotationY, rotationX, ease: Power0.easeOut })
      .to('.skills_cube', 0, { rotationY: '0deg', rotationX: '0deg' })
      .call(animateBox);
  }

  function onWindowResize(immediate) {
    let ease = Power1.easeOut;
    let textLeft;
    let textTop;
    let textPadding;
    let textMargin;
    let textWidth;
    let textStyle;
    let time = immediate ? 0 : .3;
    const innerWidth = window.innerWidth;
    if (innerWidth > 1100) {
      textLeft = 0;
      textTop = 0;
      textPadding = '0 0 0 100px';
      textWidth = '600px';
      textMargin = 0;
    }
    if (innerWidth <= 1100) {
      textLeft = 0;
      textTop = 0;
      textPadding = '0 0 0 20px';
      textWidth = '600px';
      textMargin = 0;
    }
    if (innerWidth < 1000) {
      textLeft = 0;
      textTop = 0;
      textPadding = 0;
      textWidth = '500px';
      textMargin = '0 auto'
    }
    if (innerWidth < 700) {
      textLeft = 0;
      textTop = 0;
      textPadding = 0;
      textWidth = '90%';
      textMargin = '0 auto'
    }
    if (innerWidth < 460) {
      textLeft = 0;
      textTop = 0;
      textPadding = 0;
      textWidth = '80%';
      textMargin = '0 auto'
    }
    textStyle = {
      left: textLeft,
      marginTop: textTop,
      padding: textPadding,
      width: textWidth,
      margin: textMargin,
      ease,
    }

    TweenMax.to('.skills_intro_section', time, textStyle);

    let pSize;
    let pStyle;
    if (innerWidth >= 460) {
      pSize = '16px';
    }
    if (innerWidth < 460) {
      pSize = '12px';
    }
    pStyle = {
      fontSize: pSize
    }
    TweenMax.to('.skills_p', time, pStyle);
    TweenMax.to('.skills_span', time, pStyle);

    let imageLeft;
    if (innerWidth >= 1250) {
      imageLeft = '15%';
    }

    if (innerWidth < 1250) {
      imageLeft = '10%';
    }
    if (innerWidth < 1100) {
      imageLeft = '10%';
    }
    if (innerWidth < 1000) {
      imageLeft = 0;
    }

    let imageStyle = {
      left: imageLeft,
      ease,
    };

    TweenMax.to('.skills_wrap', time, imageStyle);
  }


  function enterLink(type) {
    TweenMax.to(`.skills_link_${type}`, .4, { color: 'white' });
  }

  function leaveLink(type) {
    TweenMax.to(`.skills_link_${type}`, .4, { color: '#59bd8e' });
  }

  function enterIT(type, index) {
    const tl = new TimelineMax();
    tl.to(`.skills_${type}_${index}`, .1, { color: '#59bd8e' });
    tl.to(`.skills_${type}_${index}`, .3, { fontSize: '56px', color: '#59bd8e', ease: Power1.easeOut }, '-=.1');
  }

  function leaveIT(type, index) {
    const tl = new TimelineMax();
    tl.to(`.skills_${type}_${index}`, .5, { color: '#ffffff' });
    tl.to(`.skills_${type}_${index}`, .5, { fontSize: '48px', ease: Power1.easeOut }, '-=.3');
  }

  function render() {
    return (
      <main className="Skills">
        <section className="skills_intro_section">
          <span className="skills_body_span skills_span">{"<body>"}</span>
          <span className="skills_h1_span skills_span">{"<h1>"}</span>
          <aside className="skills_h1">
            {renderTextIntro("My Skills")}
          </aside>
          <span className="skills_h1_span skills_span">{"<h1/>"}</span>
          <span className="skills_p_span skills_span">{"<p>"}</span>
          <p className="skills_p">
            I mainly work with front end technology
            (HTML5, CSS3, ES5/ES6 JavaScript) to build scalable,
            responsive, single page web applications.
            I use ReactJS for most of my projects,
            and manage state with Redux.
          </p>
          <span className="skills_br_span skills_span">{"</p> <p>"}</span>
          <p className="skills_p">
            For the back end,
            I usually build Express apps with NodeJS.
            I handle database management with either MassiveJS or Firebase.
            I host all of my websites with Firebase as well.
          </p>
          <span className="skills_br_span skills_span">{"</p> <p>"}</span>
          <p className="skills_p">
            I have experience with Amazon Web Services and Google Cloud Platform.
            I've used many APIs and a variety of libraries in my apps.
            I also like to add animation to make the apps stand out a bit more!
          </p>
          <span className="skills_br_span skills_span">{"</p> <p>"}</span>
          <p className="skills_p">
            If you would like to know more,
            you can always
            <Link
              to='/contact'
              onMouseEnter={() => enterLink("contact")}
              onMouseLeave={() => leaveLink("contact")}
              className="skills_link skills_link_contact"
            >
              contact me
            </Link>!
          </p>
          <span className="skills_p_span skills_span">{"</p>"}</span>
          <span className="skills_body_span skills_span">{"</body>"}</span>
        </section>
        <section className="skills_wrap">
          <aside className="skills_cube">
            <div className="skills_cube_el skills_cube_front">{previousText}</div>
            <div className="skills_cube_el skills_cube_top">{currentText}</div>
            <div className="skills_cube_el skills_cube_bottom">{currentText}</div>
            <div className="skills_cube_el skills_cube_left">{currentText}</div>
            <div className="skills_cube_el skills_cube_right">{currentText}</div>
          </aside>
        </section>
      </main>
    );
  }

  function renderTextIntro(text) {
    return text
      .split('')
      .map((el, i) => (
        <h1
          key={i}
          onMouseEnter={() => enterIT('it', i)}
          onMouseLeave={() => leaveIT('it', i)}
          className={` skills_it skills_it_${i}`}
        >
          {el}{el === ' ' ? '\xa0' : ''}
        </h1>
      ));
  }

  return render();
}

const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {
    setMountedComp: (value) => {
      dispatch({ type: actions.SET_MOUNTED_COMP, value });
    }
  }
}

const animatedSkills = AnimatedHOC(Skills);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(animatedSkills);
