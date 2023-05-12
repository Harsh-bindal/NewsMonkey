import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class news extends Component {

  // static defaultProps=
  // {
  //      country: "in",
  //      pageSize: 5,
  //      category: "sports"
  // }

  static propTypes=
  {
    country:PropTypes.string,
    pageSize:PropTypes.number

  }

   capitlizeText=(word)=> 
{
    return word.charAt(0).toUpperCase() + word.slice(1);
}

      
    constructor(props)
  {
      super(props);

        this.state={
          articles:[],
          loading:false,
          page:1 
        }
        document.title=`${this.capitlizeText( this.props.category)}-News Monkey`
  }

  async componentDidMount()
  {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e2d65163e5404176bfb1bf66201d2568&pageSize=${this.props.pageSize}`;

    this.setState({loading:true});
    let data=await fetch(url);
    let parseData=await data.json()
    console.log(parseData);
    this.setState({articles:parseData.articles,
      totalResults:parseData.totalResults,
      loading:false})
  }

  handlePrevView= async()=>
  {
   
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e2d65163e5404176bfb1bf66201d2568 &page=${this.state.page-1 }&pageSize=${this.props.pageSize}`;

    this.setState({loading:true});
    let data=await fetch(url);
    let parseData=await data.json()
    console.log(parseData);
    
    
    this.setState(
      {
        page: this.state.page-1 ,
        articles:parseData.articles,
        loading:false
      
      }
    )

  }

  handleNextView= async()=>
  {
     if(this.state.page +1>Math.ceil(this.state.totalResults/this.props.pageSize))
     {

     }
     else{

       
       let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e2d65163e5404176bfb1bf66201d2568 &page=${this.state.page+1 }&pageSize=${this.props.pageSize}`;
    
       this.setState({loading:true});
       let data=await fetch(url);
    let parseData=await data.json()
   
    console.log(parseData);

    
    
    this.setState(
      {
        page: this.state.page+1 ,
        articles: parseData.articles,
      loading:false
        
      }
      )
      
    }
    
  }

  render() {
    return (
        <div>

<div className="container my-3">
    <h3 className="text-center" >News monkey-Top {this.props.category} headlines</h3>
    {this.state.loading &&<Spinner></Spinner>}
  <div className="row" >
    {!this.state.loading && this.state.articles.map((element)=>
   { 
    return   <div className="col-md-4" key={element.url}> 
    <NewsItem title={element.title?element.title.slice(0,34):""} description={element.description?element.description.slice(0,50):""} imageurl={element.urlToImage?element.urlToImage:"https://s.w-x.co/in-supernova%20%283%29.jpg"} newsUrl={element.url} Author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name} ></NewsItem>
    </div>
  
    
    })   }

<div className='container d-flex justify-content-between'>
<button disabled={this.state.page<=1} type="button" className="btn btn-info" onClick={this.handlePrevView}>&laquo; Previous</button>
<button disabled={this.state.page +1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-info" onClick={this.handleNextView}>Next &raquo;</button>
</div>

  
   
  </div>

   </div>
      
        
              </div>
    )
  }
}

export default news