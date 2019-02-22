import React from 'react';
import axios from 'axios';
//import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Billing from '../src/bill';
//import Billing from '../../../shared/billing';
class App extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      data: [],
      count: null,
      demo: [],
     
    }
     axios.get("http://salty-badlands-70835.herokuapp.com/api/Products")
    .then(res => this.setState({data: res.data}));
    console.log(this.state.data);
}
   billingHandled(e){
   e.preventDefault();
   this.setState({salePrice : Number(e.target.value)})
  
 }

  render() {
    const allData = this.state.data.map((item) => {
      return(
       
          <button value={item.SalePrice}style={{margin:5}} 
               onClick = {(e) => {this.billingHandled(e)}}>
               <h1>{item.ProductName}</h1>
               <p> ${item.SalePrice}</p>
          </button>
       )
    })
   return (
     <div class="row">
      <div class="col-sm-8">
      {allData} 
    </div>
     <div class="col-sm-4">
     <p> PURCHASE ITEMS</p>
     <Billing sale = {this.state.salePrice} cal = {this.state.calculations} name={this.state.data}
              data1 = {this.state.data}
      />
    </div>
   
</div>
      );
   }
  }
export default App;