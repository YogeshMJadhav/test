import React, {Component} from 'react';
class  Billing extends React.Component{
    constructor(props){
        super(props);
    
    console.log(this.props.sale);
    }
    render(){
    return(
    <div>
            <table>
                <tbody>
                    <tr>
                        <td>{this.props.sale}</td>
                        <td>{this.props.cal}</td>
                        <td>{this.props.name.ProductName}</td>
                        
                    </tr>
                </tbody>
            </table>
    </div>
        )
}
}
export default Billing;
