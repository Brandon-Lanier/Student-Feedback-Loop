import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import axios from 'axios';

function AdminItem({row, getFeedback, handleFlag, handleDelete}) {


    // const handleFlag = () => {
    //     axios.put(`/feedback/${row.id}`, row)
    //     .then(response => {
    //         console.log('Updated Flag');
    //         getFeedback();
    //     }).catch(error => {
    //         console.log('Failed to updated', error);
    //     })
    // }

    // const handleDelete = () => {
    //     axios.delete(`/feedback/${row.id}`)
    //     .then(response => {
    //         console.log('You deleted it');
    //         getFeedback();
    //     }).catch(error => {
    //         console.log('Failed to delete');
    //     })
    // }

    let callFlag = () => {
        handleFlag(row.id, row)
    }

    let callDelete = () => {
        handleDelete(row.id)
    }

    return (
        <>
            
            <td>{row.feeling}</td>
            <td>{row.understanding}</td>
            <td>{row.support}</td>
            <td>{row.comments}</td>
            <td><EmojiFlagsIcon onClick={callFlag}/></td>
            <td><DeleteSweepIcon onClick={callDelete}/></td>
            
        </>

    )
}

export default AdminItem;