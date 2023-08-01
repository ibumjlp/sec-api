import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import MoreTable from './MoreTable';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90vw",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow:'scroll',
  height: '90vh'
};

export default function BasicModal({ id }) {
  const [open, setOpen] = React.useState(false);
  const [detailData, setDetailData] = React.useState([]);
  const handleOpen = async () => {
    await callAPI();
  }
  const handleClose = () => setOpen(false);

  const callAPI = async () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://api.sec.or.th/FundFactsheet/fund/amc/" + id, requestOptions)
        .then(response => response.json())
        .then(result => {setDetailData(result); setOpen(true);})
        .catch(error => console.log('error', error));
  }

  return (
    <div>
      <Button onClick={handleOpen}>Detail</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MoreTable data={detailData} />
        </Box>
      </Modal>
    </div>
  );
}