import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import './Admin.css'
import AdminItem from '../AdminItem/AdminItem';
import FlaggedItem from '../FlaggedItem/FlaggedItem';
import FlagIcon from '@mui/icons-material/Flag';
import PopUp from "../PopUp/PopUp";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';



function Admin() {

    const [adminFeed, setAdminFeed] = useState([]);
    const [flagged, setFlagged] = useState([]);

    useEffect(() => {
        getFeedback();
        getFlagged()
    }, [])

    const getFeedback = () => {
        axios.get('/feedback')
            .then(response => {
                setAdminFeed(response.data)
            }).catch(error => {
                console.log('Failed to get data', error);
            })
    }

    const getFlagged = () => {
        axios.get('/feedback/flagged')
            .then(response => {
                setFlagged(response.data)
            }).catch(error => {
                console.log('Failed to get flagged', error);
            })
    }

    const handleFlag = (id, row) => {
        axios.put(`/feedback/${id}`, row)
            .then(response => {
                console.log('Updated Flag');
                getFeedback();
                getFlagged();
            }).catch(error => {
                console.log('Failed to updated', error);
            })
    }

    const handleDelete = (id) => {
        axios.delete(`/feedback/${id}`)
            .then(response => {
                console.log('You deleted it');
                getFeedback();
                getFlagged();
            }).catch(error => {
                console.log('Failed to delete');
            })
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#07aa9e',
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const FlaggedTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#a57373',
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    return (
        <div className="tableontainer">
            <div className="adminTable">

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead >
                            <StyledTableRow>
                                <StyledTableCell>Feeling</StyledTableCell>
                                <StyledTableCell align="center">Understanding</StyledTableCell>
                                <StyledTableCell align="center">Support</StyledTableCell>
                                <StyledTableCell align="center">Comments</StyledTableCell>
                                <StyledTableCell align="center">Flag</StyledTableCell>
                                <StyledTableCell align="center">Delete</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {adminFeed.map((row) => (
                                <StyledTableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                > <AdminItem row={row}
                                    handleDelete={handleDelete}
                                    handleFlag={handleFlag}
                                    />
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div>
                {flagged.length !== 0 && <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead >
                            <StyledTableRow>
                                <FlaggedTableCell colspan="6" align="center">
                                    Flagged For Review
                                </FlaggedTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <FlaggedTableCell align="center">Feeling</FlaggedTableCell>
                                <FlaggedTableCell align="center">Understanding</FlaggedTableCell>
                                <FlaggedTableCell align="center">Support</FlaggedTableCell>
                                <FlaggedTableCell align="center">Comments</FlaggedTableCell>
                                <FlaggedTableCell align="center">Flag</FlaggedTableCell>
                                <FlaggedTableCell align="center">Delete</FlaggedTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {flagged.map((row) => (
                                <StyledTableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                > <FlaggedItem row={row}
                                    handleDelete={handleDelete}
                                    handleFlag={handleFlag}
                                    />
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                }
            </div>
        </div>
    )
}

export default Admin;






