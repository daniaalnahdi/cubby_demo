import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

// Popup
import Modal from 'react-modal';

//Layout Components
import HeaderComponent from '../components/HeaderComponent';
import SidebarComponent from '../components/SidebarComponent';

//Grading Components
import SubmissionsListComponent from '../components/grading/SubmissionsListComponent';
import GradeAllComponent from '../components/grading/GradeAllComponent';

//Popup Style
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '500px',
  },
};

const GradingFeature = () => {
  const [isGrading, setIsGrading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const toggleIsGrading = () => {
    setIsGrading(!isGrading);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <HeaderComponent />
      <Grid container direction='row' spacing={2}>
        <Grid item xs={1}>
          <SidebarComponent />
        </Grid>
        <Grid item xs={11}>
          {isGrading ? (
            <GradeAllComponent completeTask={openModal} />
          ) : (
            <SubmissionsListComponent toggleIsGrading={toggleIsGrading} />
          )}
        </Grid>
      </Grid>
      {/* Popup */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        I am a modal
        <button onClick={closeModal}>Done</button>
      </Modal>
    </>
  );
};

export default GradingFeature;
