import {CHECK_DOMAIN, CHECK_DOMAIN_SUCCESS, CHECK_DOMAIN_FAIL} from "../actions/domain";

export function domain(state = {loading: false}, action) {
  switch (action.type) {
    case CHECK_DOMAIN:
      return {...state, loading: true};
    case CHECK_DOMAIN_SUCCESS:
      return {...state, ...action.domainData, loading: false}
    case CHECK_DOMAIN_FAIL:
      return {...state, ...action.error, loading: false}
    default:
      return state;
  }
}
