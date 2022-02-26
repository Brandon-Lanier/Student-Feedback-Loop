import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';

function FlaggedItem() {

            
    return (
        <>
            
        <td>{row.feeling}</td>
        <td>{row.understanding}</td>
        <td>{row.support}</td>
        <td>{row.comments}</td>
        <td><EmojiFlagsIcon onClick={handleFlag}/></td>
        <td><DeleteSweepIcon onClick={handleDelete}/></td>
        
    </>
    )
}

export default FlaggedItem;