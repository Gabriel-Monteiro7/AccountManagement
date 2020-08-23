export function registerRequest(email, password,displayName) {
  return {
    type: "@user/REGISTER_REQUEST",
    payload: { email, password,displayName },
  };
}
