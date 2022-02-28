import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import './Admin.css'
import AdminItem from '../AdminItem/AdminItem';
import FlaggedItem from '../FlaggedItem/FlaggedItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography } from "@mui/material";


function Admin() {

    const [adminFeed, setAdminFeed] = useState([]); // Local array of feedback history from Database
    const [flagged, setFlagged] = useState([]); // Will store all feedback that was marked as flagged

    useEffect(() => {
        getFeedback(); //Upon page load, get all feedback from DB
        getFlagged(); // Get all feedback that was flagged from DB
    }, [])

    // This will get all user feedback that flagged is set to false
    const getFeedback = () => {
        axios.get('/feedback')
            .then(response => {
                setAdminFeed(response.data); // User feedback store in local state
            }).catch(error => {
                console.log('Failed to get data', error);
            })
    }

    // Getting feedback from database that has flagged set to tru
    const getFlagged = () => {
        axios.get('/feedback/flagged')
            .then(response => {
                setFlagged(response.data); // Storing feedback from DB in local state
            }).catch(error => {
                console.log('Failed to get flagged', error);
            })
    }

    const handleFlag = (id, row) => {
        axios.put(`/feedback/${id}`, row) // Send server which feedback was click to change to flagged or not flagged
            .then(response => {
                getFeedback(); //re render after database update
                getFlagged();
            }).catch(error => {
                console.log('Failed to updated', error);
            })
    }

    const handleDelete = (id) => {
        axios.delete(`/feedback/${id}`) // Send ID of item we are deleting
            .then(response => {
                console.log('You deleted it');
                getFeedback(); //rerender after deletion
                getFlagged();
            }).catch(error => {
                console.log('Failed to delete');
            })
    }
    //Style overrides of MUI tables
    const StyledTableCell = styled(TableCell)(({ theme }) => ({ // Style overrides of MUI tables
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#07aa9e',
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    //Style overrides of MUI tables
    const StyledTableRow = styled(TableRow)(({ theme }) => ({ 
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    //Style overrides of MUI tables
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
            <Typography variant="h5">All User Input</Typography>
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
                {/* Conditionally render the flagged table if there are any */}
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






