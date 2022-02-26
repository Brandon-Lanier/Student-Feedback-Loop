import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import axios from 'axios';

function AdminItem({row, getFeedback}) {


    const handleFlag = () => {
        console.log(row.id);
    }

    const handleDelete = () => {
        axios.delete(`/feedback/${row.id}`)
        .then(response => {
            console.log('You deleted it');
            getFeedback();
        }).catch(error => {
            console.log('Failed to delete');
        })
    }

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

export default AdminItem;