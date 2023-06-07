import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  changeBtn = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
       this.setState({isSubscribed:false})
    }else{
       this.setState({isSubscribed:true})
         }
    }

    render(){
       <div className="container">
            <h1 className="heading">Welcome</h1>
            <p className="desc">Thank you! Happy Learning</p>
            {isSubscribed ? (<button type="button" className="button" onClick={this.changeBtn}>Subscribe</button>) : (<button type="button" className="button" onClick={this.changeBtn}>Subscribed</button>)}
        </div>
    }
}
export default Welcome