import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTech } from '../../actions/techActions';

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = async (e) => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please Enter a message and tech.' });
    } else {
      addTech({ firstName, lastName });
      setFirstName('');
      setLastName('');
      M.toast({ html: `${firstName} ${lastName} was added` });
    }
  };

  return (
    <div id="tech-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Add New Tech</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className={`${
            lastName === '' || firstName === '' ? '' : 'modal-close'
          } btn waves-effect blue`}
          style={{ margin: '15px' }}
        >
          Enter
          {/* <i className="material-icons">check</i> */}
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%',
};
AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};
export default connect(null, { addTech })(AddTechModal);
