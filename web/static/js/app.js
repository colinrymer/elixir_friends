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
    return(
      <div className="four wide column">
        <div className="ui card">
          <div className="image">
            <img src={this.props.imageUrl} />
          </div>
          <div className="content">
            <div className="header">
              {this.props.username}
            </div>
            <div className="meta">
              <span className="date">{this.props.insertedAt}</span>
            </div>
            <div className="description">
              {this.props.content}
            </div>
          </div>
        </div>
      </div>
    )
  }
})

let PostList = React.createClass({
  getInitialState() {
    return {
      posts: [
        {
          imageUrl: 'http://placekitten.com/g/200/300',
          username: 'knewter',
          insertedAt: 'July 25, 2015',
          content: 'zomg a kitty'
        }
      ]
    }
  },
  render() {
    return(
      <div className="ui grid stackable">
        {this.state.posts.map(function(post) {
          return <Post {...post} />
        })}
      </div>
    )
  }
})

window.onload = () => {
  var element = document.getElementById("app")
  React.render(<PostList />, element)
}

export default App
