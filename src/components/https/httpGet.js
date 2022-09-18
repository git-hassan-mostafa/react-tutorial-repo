import React, { Component } from 'react'
import axios from 'axios'
class httpGet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post:[] 
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(req=> {console.log(req.data)
            this.setState({
                post:req.data,
                
            })
        })
        .catch()
    }
    
  render() {
    return (
      <div>
        list of titles
        {
            this.state.post ?
            this.state.post.map(titles=><div key={titles.id}>{titles.id} 
            <div> {titles.title} </div></div>)
            :<div>empty </div>
        }
      </div>

    )
  }
}

export default httpGet
