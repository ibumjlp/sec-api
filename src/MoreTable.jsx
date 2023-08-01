import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableContainer, TableHead, TableRow, TableCell, tableCellClasses } from '@mui/material';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

export default function MoreTable({ data }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>#</StyledTableCell>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>Invest</StyledTableCell>
                        <StyledTableCell>Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((value, index) => (
                        <StyledTableRow key={value.proj_id}>
                            <StyledTableCell>{index + 1}</StyledTableCell>
                            <StyledTableCell>{value.proj_id}</StyledTableCell>
                            <StyledTableCell>{value.proj_name_th}</StyledTableCell>
                            <StyledTableCell>
                                {
                                    value.invest_country_flag === "1" ? "กองทุนรวมที่เน้นลงทุนแบบมีความเสี่ยงต่างประเทศ"
                                        : value.invest_country_flag === "2" ? "ลงทุนในต่างประเทศบางส่วน"
                                            : value.invest_country_flag === "3" ? "กองทุนที่ลงทุนแบบไม่มีความเสี่ยงต่างประเทศ" :
                                                value.invest_country_flag === "3" ? "กองทุนที่ลงทุนแบบมีความเสี่ยงทั้งในและต่างประเทศ" : ""
                                }
                            </StyledTableCell>
                            <StyledTableCell>{value.fund_status}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}