export const CHECK_DOMAIN = "REDUX/CHECK_DOMAIN";
export const CHECK_DOMAIN_SUCCESS = "REDUX/CHECK_DOMAIN/SUCCESS";
export const CHECK_DOMAIN_FAIL = "REDUX/CHECK_DOMAIN/FAIL";



export function checkDomain(domain) {
return (dispatch) => {
  dispatch(startFetch())
  return fetch(`/api/check?domain=${domain}`)
    .then(res => res.json())
    .then(res => dispatch(fetchSuccess(res)))
    .catch(error => dispatch(fetchFail(error)))
}
}

function startFetch() {
  return {
    type: CHECK_DOMAIN
  };
}

function fetchSuccess(data) {
  return {
    type: CHECK_DOMAIN_SUCCESS,
    domainData: data
  };
}

function fetchFail(error) {
  return {
    type: CHECK_DOMAIN_FAIL,
    error
  };
}
