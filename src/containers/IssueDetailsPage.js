import React from 'react'
import axios from 'axios' //used for sending get,post,put request to backend

class IssueDetailsPage extends React.Component {
  state = {
    list: {}
  }

 
  render() {
    return (
      // React fragment : DOM render 
     <div><p>{this.props.history.location.state.bugName}</p></div>
    );
  }
}

export default IssueDetailsPage;
