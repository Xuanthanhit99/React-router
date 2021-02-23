
import React,{Component} from 'react';
import dl from './dulieu.json'
import NewsRelated from './NewsRelated'
class NewDetail extends Component{
  constructor(props){
    super(props)
  }
  render(){
    var dchitiet= dl.map((value,key)=>{
      if(value.id == this.props.match.params.id){
        return  (
          <div className="jumbotron jumbotron-fluid " key={key}>
          <div className="container" >
            <img src={value.anh} className="img-fluid rong100" alt="react router demo" />
            <h3 className="lead text-center">{value.tieude}</h3>
            <hr className="my-2" />
            {value.noidung}
          </div>
        </div>
          )
      }
     
  })
  var demo=1
  return(
    <div >
 <div>
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
  {dchitiet}
  <div className="container">
    <h4 className="card-title text-center">Tin liên quan</h4>
    <div className="row">
      <div className="col-12">
        <div className="card-deck">
          {
            dl.map((value,key)=>{
              if(value.id != this.props.match.params.id){
                if(demo <= 4){
                  demo++
                return (
                <NewsRelated key={key} 
                tinid={value.id}
                anh={value.anh}
                trichdan={value.trichdan} 
            tieude={value.tieude}
                />
              )
              }
              }           
            })
          }
        </div>
      </div>
    </div>
  </div>
  {/* end tin tức */}
</div>



    </div>
  );
  }
}

export default NewDetail;
