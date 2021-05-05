// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CounterButton from '../Quiz5/Quiz5'
// const changeText=(event)=>{
//     console.log(event.target)
//     event.target.innerText=event.target.innerText+"被點了"
//   }
  
  const multiButton=(num)=>{
    var output=[];
    for(let i=1;i<num+1;++i)
    output.push(<CounterButton/>)
    // output.push(<IconButton color="primary" aria-label="add to shopping cart">
    // <AddShoppingCartIcon/></IconButton>)
    return output;
  }

export default multiButton;

