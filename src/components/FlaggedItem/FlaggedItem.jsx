import FlagIcon from '@mui/icons-material/Flag';
import PopUp from '../PopUp/PopUp';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

function FlaggedItem({ row, handleFlag, handleDelete }) {

    let callFlag = () => {
        handleFlag(row.id, row)
    }

    let callDelete = () => {
        handleDelete(row.id)
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    return (
        <>
            <StyledTableCell align="center">{row.feeling}</StyledTableCell>
            <StyledTableCell align="center">{row.understanding}</StyledTableCell>
            <StyledTableCell align="center">{row.support}</StyledTableCell>
            <StyledTableCell align="center">{row.comments}</StyledTableCell>
            <StyledTableCell align="center"><FlagIcon onClick={callFlag} cursor="pointer" /></StyledTableCell>
            <StyledTableCell align="center"><PopUp callDelete={callDelete} /></StyledTableCell>

        </>
    )
}

export default FlaggedItem;