
import '../App.css';
 
import PtPortal from './PtPortal';


function DrPage(props) {

   const viewAllpts = (pt) => {
    fetch(`https://drportalazure.herokuapp.com/api/pts/`, {
         method: 'GET'
       }).then(response => response.json())
       .then(res => { 
         props.onPtsLoaded()
         console.log(viewAllpts)
       })
       
   }
   

   return (
     <nav>
      <ul>
        <viewAllpts/>
        <PtPortal/>
      </ul>
     </nav>
   )
}
  
  
 
  export default DrPage
