import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import FlagIcon from '@mui/icons-material/Flag';

function FlaggedItem({ row, handleFlag, handleDelete }) {

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
            <td><FlagIcon onClick={callFlag}/></td>
            <td><DeleteSweepIcon onClick={callDelete}/></td>

        </>
    )
}

export default FlaggedItem;