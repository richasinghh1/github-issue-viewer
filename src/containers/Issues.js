import React from 'react'
import axios from 'axios' //used for sending get,post,put request to backend
import './issues.css';
import  DatatablePage  from './IssueDetails';
class Issues extends React.Component {

  state = {
    list: {},
    issuesList: {},
  }
  goToDetail() {

  }

  componentDidMount() //get all the APi's immediatly after rendering
  {
    //console.log(this.props)
    let url = "https://api.github.com/repos/" + `${this.props.history.location.state.ownerName}` + '/' + `${this.props.history.location.state.name}`;
    axios.get(url).then((res) => {
      this.setState({ list: res.data })
      let fullName = res.data.full_name;
      let getAllIssues = `https://api.github.com/repos/${fullName}/issues`;
      axios.get(getAllIssues).then((res) => {
        console.log(':::::res new');
        this.setState({ issuesList: res.data });
      })
    });
  }
//this function is a callback func for each row click
  rowClick=(name)=>{
    console.log("name is",name)
    //hit the final api with needed data on next page
    this.props.history.push({
      pathname: "/issueDetail",
      state: {
        bugName: name,
      }
    })

  }

  goToIssueDetails(event, newValue) {
    console.log(event, newValue)
    // this.props.history.push({
    // pathname: "/issueDetails",
    // state: {
    //     number:newValue.id,
    //    // ownerName:newValue.owner.login

    // }
    //})

  }

  render() {
    // console.log(this.state.list.name, '::::::STATE')
    const { name, watchers,open_issues, forks_count } = this.state.list;
    return (
      <>
        {/* <button onClick={(event, newValue) => {
    this.goToIssueDetails(event,newValue)}}>getIssue Details</button> */}
        <div className="gitrepo-single-detail">
          <div className="gitrepo-name ">
            <h1>{name}</h1>
          </div>
          <div className="gitrepo-star">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/88/Octicons-star.svg" width="20px" height="20px" />
            <span>{watchers}</span>
          </div>

        </div>

        <div className="gitrepo-single-detail-count">
          <div className="gitrepo-name ">
            <span><b>{open_issues} Open, </b></span>
            <span>{forks_count} Closed</span>

          </div>
          {/* <div className="gitrepo-star">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/88/Octicons-star.svg" width="20px" height="20px" />
            <span>{watchers}</span>
          </div> */}

        </div>
        <div className="gitrepo-single-detail-table">
          <DatatablePage listofIssue={this.state.issuesList} handleClick={this.rowClick} />
        </div>
      </>
    );
  }
}

export default Issues;
