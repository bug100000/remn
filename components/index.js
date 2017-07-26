import React from 'react';
import ReactDOM from 'react-dom';
import Head from './views/head';
import Foot from './views/foot';
import { Router, Route} from 'react-router';

// class User extends React.Component{
//   render(){
//     console.log(this.props.data);
//     return (
//       <div>
//       <h4>{this.props.data.name}</h4>
//       <h4>{this.props.data.password}</h4>
//       <h4>{this.props.data._id}</h4>
//       </div>
//     )
//   }
// }
//
// class Result extends React.Component{
//   render(){
//     return (
//       <div>
//       {this.props.result.map((result) => {
//         return <User key={result._id} data={result}></User>
//       })}
//       </div>
//     )
//   }
// }


class Result extends React.Component{
  render(){
    console.log(this.props.result);
    console.log(this.props.result.subjects);
    return (
      <div>

      </div>
    )
  }
}

class Index extends React.Component {
  constructor(props){
      super(props);
      this.state = {result: []};
    }
  componentWillMount(){
    var thisin = this;
    $.ajax({
      type : "get",
      async : false,
      url: "http://api.douban.com/v2/movie/coming_soon",
      dataType: "jsonp",
      success: function(result){
        thisin.setState({
          result: result
        })
      },
      error: function(){
        alert('fail');
      }
    })
    // $.post("/", function(result){
    //   console.log(result);
    //   thisin.setState({
    //     result: result
    //   })
    // })
  }
  render(){
    return (
      <div>
        <h1>Hello</h1>
        <Head name="React">
        </Head>
        <hr></hr>
        <Foot></Foot>
        <Result result={this.state.result}></Result>
      </div>
    );
  }
}


ReactDOM.render(
  <Index />,
  document.getElementById('react-root')
);
