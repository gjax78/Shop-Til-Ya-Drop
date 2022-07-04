import React from "react";
import './SubmissionCard.css'

const SubmissionCard = ({name, email, address, age}) => {
  return (
    <div className='about-card'>
      <p>{name}</p>
      <p>{email}</p>
      <p>{address}</p>
      <p>{age}</p>
    </div>
  )
}

export default SubmissionCard