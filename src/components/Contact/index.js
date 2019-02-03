import React, { useStates } from 'react';
import { connect } from 'react-redux';

import { TimelineMax, Power1, TweenMax } from 'gsap';
import GoogleMapReact from 'google-map-react';
import AnimatedHOC from "hocs/animated";
import FMarker from "resources/f_marker.png";
import actions from "../../redux/actions/nav.actions";

import "styles/contact.css";

function Contact(props) {

  function enterLink(type) {
    TweenMax.to(`.contact_link_${type}`, .4, { color: 'white' });
  }

  function leaveLink(type) {
    TweenMax.to(`.contact_link_${type}`, .4, { color: '#59bd8e' });
  }

  function render() {
    return (
      <main className={'Contact'}>
        <section className="contact_intro_section">
          <span className="contact_body_span contact_span">{"<body>"}</span>
          <span className="contact_h1_span contact_span">{"<h1>"}</span>
          <aside className="contact_h1">

          </aside>
          <span className="contact_h1_span contact_span">{"<h1/>"}</span>
          <span className="contact_p_span contact_span">{"<p>"}</span>
          <p className="contact_p">
            Contact me by email at
            <a
              onMouseEnter={() => enterLink("email")}
              onMouseLeave={() => leaveLink("email")}
              className="contact_link contact_link_email"
              href="mailto:fernandodlv32@gmail.com"
            >
              fernandodlv32@gmail.com
            </a>
            , or use the form below. I'll get back to you ASAP!
          </p>
          <span className="contact_p_span contact_span">{"</p>"}</span>
          <span className="contact_form_span contact_span">{"<form>"}</span>
          <span className="contact_form_span contact_span">{"</form>"}</span>
          <span className="contact_body_span contact_span">{"</body>"}</span>
        </section>
        <GoogleMap />
      </main>
    )
  }

  return render();
}

function GoogleMap() {
  const center = { lat: 34.29738, lng: -83.82531 };
  const zoom = 9;
  const Marker = ({ marker }) => {
    return <div>{marker}</div>;
  }
  return (
    <section className="contact_map" style={{ height: '100vh', width: '50%', opacity: .8 }}>
      <GoogleMapReact bootstrapURLKeys={{ key: "" }} defaultCenter={center} defaultZoom={zoom} >
        <Marker
          lat={center.lat}
          lng={center.lng}
          marker={
            <img
              alt="Google maps marker"
              src={FMarker}
              style={{
                height: 40,
                width: 32,
                opacity: .8,
                position: 'absolute',
                top: -40
              }}
            />
          }
        />
      </GoogleMapReact>
    </section>
  );
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

const animatedContact = AnimatedHOC(Contact);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(animatedContact);