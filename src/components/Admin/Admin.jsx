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
        getFeedback()
    }, [])

    const getFeedback = () => {
        axios.get('/feedback')
        .then(response => {
            setAdminFeed(response.data)
            handleFlagged();
        }).catch(error => {
            console.log('Failed to get data', error);
        })
    }

    const handleFlagged = () => {
        for (let feed of adminFeed) {
            if (feed.flagged === true) {
                setFlagged(feed);
            }
    }
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
                            <AdminItem row={row} getFeedback={getFeedback}/>
                        </tr>
                    ))}
                </tbody>

            </table>

            <table className="flagged-table">
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
                            <FlaggedItem row={row} getFeedback={getFeedback}/>
                        </tr>
                    ))}
                </tbody>

            </table>

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
