import NewsItem from './NewsItem'
import dl from './dulieu.json'
import React,{Component} from 'react';

class News extends Component{
  constructor(props){
    super(props)
  }
  render(){
    var dlieu= dl.map((value,key)=>{
      return  (
          <NewsItem key={key}
          tinid={value.id}
          anh={value.anh}
          trichdan={value.trichdan} 
          tieude={value.tieude}
          />  
      )
        
      
  })
    return (
    <div >
    <header className="masthead tintuc">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-12 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-1 text-center">Trang tin tức</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* begin tin tức */}
<div className="container">
  <div className="row mt-3">
      {dlieu}
  </div>
</div>
{/* end tin tức */}



    </div>
    )
  }
}   

export default News;
