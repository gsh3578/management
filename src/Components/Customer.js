import React,{Component} from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends Component{
    render(){
        return(
              
                <TableRow>
                    <TableCell>{this.props.name}({this.props.id})</TableCell>
                    <TableCell><img width="100" height="100" src={this.props.image} alt="" /></TableCell>
                    <TableCell>{this.props.age}</TableCell>
                    <TableCell>{this.props.job}</TableCell>
                </TableRow>                
            
        );
    }
}

export default Customer;
