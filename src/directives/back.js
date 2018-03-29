export default {
  inserted (el) {
    el.addEventListener('click', () => {
      window.history.back()
    })
  }
}
