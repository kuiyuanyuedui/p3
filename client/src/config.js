export const baseurl = "http://localhost"

export function setLoginUser(value) {
  localStorage.setItem("loginuser", value)
}

export function getLoginUser() {
  return localStorage.getItem("loginuser")
}

