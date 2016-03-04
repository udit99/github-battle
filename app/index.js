var USER_DATA = {
  name: 'Udit',
  username: 'udit99',
  imageUrl: 'https://avatars3.githubusercontent.com/u/154256?v=3&s=400'
}


var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
  render: function(){
    return (
      <image src={this.props.imageUrl} style={{height: 100, width: 100}}/>
    )
  }
})

var ProfileLink = React.createClass({
  render: function(){
    return (
      <div>
        <a href={"http://www.github.com/" + this.props.username} >
          {this.props.username}
        </a>
      </div>
    )
  }
})

var ProfileName = React.createClass({
  render: function(){
    return (
      <div>{this.props.name}</div>
    )
  }
})


var Avatar = React.createClass({
  render: function(){
    return (
      <div>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
        <ProfilePic imageUrl={this.props.user.imageUrl}/>
      </div>
    )
  }
})
ReactDOM.render(
  <Avatar user={USER_DATA}/>,
  document.getElementById('app')
);
