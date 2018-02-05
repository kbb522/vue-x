const ss = window.sessionStorage
const JSON = window.JSON

export default {
  get(name) {
    let value = ss.getItem(name)
    if (/^\{.*\}$/.test(value)) {
      value = JSON.parse(value)
    }
    return value
  },
  set(name, value) {
    if (typeof value === typeof {}) {
      value = JSON.stringify(value)
    }
    return ss.setItem(name, value)
  },
  remove(name) {
    return ss.removeItem(name)
  }
}
