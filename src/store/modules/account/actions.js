export function insertRequest(data, user, type) {
  return {
    type: "@account/INSERT_REQUEST",
    payload: { data, user, type },
  };
}

export function insertSuccess(data, type) {
  return {
    type: "@account/INSERT_SUCCESS",
    payload: { data, type },
  };
}

export function selectedSuccess(data, type) {
  return {
    type: "@account/SELECTED_SUCCESS",
    payload: { data, type },
  };
}
export function updateRequest(data, user, type) {
  return {
    type: "@account/UPDATE_REQUEST",
    payload: { data, user, type },
  };
}

export function updateSuccess(data, type) {
  return {
    type: "@account/UPDATE_SUCCESS",
    payload: { data, type},
  };
}

export function getRequest(user) {
  return {
    type: "@account/GET_REQUEST",
    payload: { user },
  };
}

export function getSuccess(data, total,chart) {
  return {
    type: "@account/GET_SUCCESS",
    payload: { data, total,chart },
  };
}

export function deleteRequest(data, user) {
  return {
    type: "@account/DELETE_REQUEST",
    payload: { data, user },
  };
}

export function deleteSuccess(data) {
  return {
    type: "@account/DELETE_SUCCESS",
    payload: { data },
  };
}
