import React from 'react'
import axios from 'axios' //used for sending get,post,put request to backend
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField';
import './Home.css';

class Home extends React.Component {
  state = {
    list: {}
  }

  componentDidMount() //get all the APi's immediatly after rendering
  {
    axios.get("https://api.github.com/repositories").then((res) => {
      console.log(res)
      this.setState({ list: res.data })
    });
  }
  goToDetail(event, newValue) {
    // console.log(event,newValue)
    this.props.history.push({
      pathname: "/details",
      state: {
        name: newValue.name,
        ownerName: newValue.owner.login

      }
    })

  }

  render() {
    return (
      // React fragment : DOM render 
      <>
        <div className= "github-logo">
          <img className= "github-image" alt="image-failed-to-load" src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg"></img>
        </div>
      
        <div className="github-searchbar">
          <Autocomplete
            id="combo-box-demo"
            options={this.state.list}
            getOptionLabel={(option) => option.name}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
            onChange={(event, newValue) => {
              this.goToDetail(event, newValue);
            }}

          />
        </div>
        {/* <button onClick={()=>this.goToDetail()}>onclik</button> */}
      </>
    );
  }
}

export default Home;
