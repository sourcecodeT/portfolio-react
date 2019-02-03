import actions from "../actions/nav.actions";

const initState = {
  comp: "home",
  animatedComp: {
    status: false,
    route: '/'
  }
};

export default function navReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_MOUNTED_COMP:
      return { ...state, comp: action.value };
    case actions.SET_ANIMATED_COMP:
      return { ...state, animatedComp: action.value };
    default:
      return state;
  }
};