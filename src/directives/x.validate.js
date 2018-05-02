export default {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el, binding, vnode) {
    // 聚焦元素
    el.focus()
    var s = JSON.stringify
    console.log(
      'name: ' + s(binding.name) + '<br>' +
      'value: ' + s(binding.value) + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: ' + s(binding.arg) + '<br>' +
      'modifiers: ' + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
    )
  }
}
