export default {
  isScrollBottom () {
    var scrollTop = document.documentElement.scrollTop
    var scrollHeight = document.documentElement.scrollHeight
    var clientHeight = document.documentElement.clientHeight
    if (scrollTop + clientHeight + 10 >= scrollHeight) {
      return true
    } else {
      return false
    }
  }
}
