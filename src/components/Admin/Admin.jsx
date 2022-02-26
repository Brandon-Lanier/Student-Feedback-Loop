import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import './Admin.css'
import AdminItem from '../AdminItem/AdminItem';
import FlaggedItem from '../FlaggedItem/FlaggedItem';



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

    return (
        <div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Flag</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {adminFeed.map((row) => (
                        <tr key={row.id}>
                            <AdminItem row={row} 
                            handleDelete={handleDelete}
                            handleFlag={handleFlag}
                            />
                        </tr>
                    ))}
                </tbody>

            </table>
            
            {flagged.length !== 0 && <table className="styled-table">
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Flag</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {flagged.map((row) => (
                        <tr key={row.id}>
                            <FlaggedItem row={row} 
                            handleDelete={handleDelete}
                            handleFlag={handleFlag}/>
                        </tr>
                    ))}
                </tbody>

            </table>
            }
        </div>

    )
}

export default Admin;

//     return (
//         <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {adminFeed.map((row) => (
//             <TableRow
//               key={row.id}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.feeling}
//               </TableCell>
//               <TableCell align="right">{row.understanding}</TableCell>
//               <TableCell align="right">{row.support}</TableCell>
//               <TableCell align="right">{row.comments}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     )
// 
