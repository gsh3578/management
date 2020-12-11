import React,{Component} from 'react';
import './App.css';
import Image from './logo.svg';
import Customer from './Components/Customer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles'


const styles = theme => ({
  root:{
    width : '100%',
    marginTop: theme.spacing.unit,
    overflowX:"auto"     
  },
  table:{
    minWidth: 1080
  }
})

class App extends Component {  
  state = {
    customers:""
  }

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({customers:res}))
      .catch(err => console.log(err));
  }

  callApi= async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render(){
      const {classes} = this.props;
      return (
        <Paper className={classes.root}>      
            <h1>Let's Develop Management System!!</h1>            
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>성명</TableCell>
                  <TableCell>이미지</TableCell>
                  <TableCell>나이</TableCell>
                  <TableCell>직업</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.customers?this.state.customers.map(c => {return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} age={c.age} job={c.job} />);}):""}
              </TableBody>
            </Table>
        </Paper>
      );
    }
}

export default withStyles(styles)(App);
