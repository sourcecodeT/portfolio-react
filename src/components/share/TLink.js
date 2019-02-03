import React from "react";
import PropTypes from "prop-types";
import { TweenMax } from "gsap";

export default function TLink(props) {
  function enterLink(type) {
    TweenMax.to(`.${props.page}_link_${type}`, 0.4, { color: "white" });
  }

  function leaveLink(type) {
    TweenMax.to(`.${props.page}_link_${type}`, 0.4, { color: "#59bd8e" });
  }

  return (
    <a
      onMouseEnter={() => enterLink(props.type)}
      onMouseLeave={() => leaveLink(props.type)}
      className={`${props.page}_link ${props.page}_link_${props.type}`}
      href={props.href}
    >
      {props.content}
    </a>
  );
}

TLink.propTypes = {
  type: PropTypes.string,
  page: PropTypes.string,
  href: PropTypes.string,
  content: PropTypes.string
};
