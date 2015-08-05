import {Socket} from "phoenix"

// let socket = new Socket("/ws")
// socket.connect()
// let chan = socket.chan("topic:subtopic", {})
// chan.join().receive("ok", chan => {
//   console.log("Success!")
// })

let App = {
}

let Post = React.createClass({
  render() {
    return(<p>The app goes here...</p>)
  }
})

window.onload = () => {
  var element = document.getElementById("app")
  React.render(<Post />, element)
}

export default App
