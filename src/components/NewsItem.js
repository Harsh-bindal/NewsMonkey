import React, { Component } from 'react'

export class NewsItem extends Component {

   
  render() {
      let {title,description,imageurl,newsUrl,Author,date,source} = this.props;
    return (
        <div  className='my-3'>

        <div className="card" style={{width: "18rem "}}>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:2, left:"90%"}}>{source}</span>
          <img src={imageurl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{ title}</h5>
            <p className="card-text" >{description}</p>
            <p className="card-text" style={{color:"#c22929"}}><small className="text-muted">Publish by {Author} on  {new Date(date).toGMTString()} </small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
        
              </div>
    )
  }
}

export default NewsItem