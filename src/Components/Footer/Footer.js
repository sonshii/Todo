import './Footer.css'
import { Button } from '@material-ui/core';

const Footer = ({toggle,allDestroy,completedCount,activeCount}) =>{

    let clearButton = null; 
    if(completedCount > 0){
        clearButton = (
            <Button 
                onClick={()=> allDestroy()}
                size="small">
                delete
            </Button>
        )
    }
    return(
        <footer>
            <div className="Wrap-row">
                <span>
                    <strong>{activeCount}</strong>&nbsp;
                    still have
                </span>
                <div className="footButton">
                    <Button variant="outlined" onClick={()=> toggle('all')}>All</Button>
                    <Button variant="outlined" onClick={()=> toggle('active')}>Active</Button>
                    <Button variant="outlined" onClick={()=> toggle('completed')}>Completed</Button>
                </div>
            </div>
            <div className="DeleteButton">
                {clearButton}
            </div>       
        </footer>
    )
}

export default Footer