import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { ReactComponent } from '*.svg';

class Post extends Component{
    constructor(props){
    super(props);
}
    render(props){
      return  (
          <article className = "Post" ref='Post'>
          <header>
            <div className="Post-user">
                <div className="Post-user-avatar">
                {/* insert image */}
                </div>
            </div>
        </header>
        </article>
        )        
    }

}

export default Post