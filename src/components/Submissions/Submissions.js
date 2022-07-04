import React from "react";
import SubmissionCard from "../SubmissionCard/SubmissionCard";

const Submissions = ({ submissions }) => {
  const allSubmissions = submissions.map(submission => {
    return (
      <SubmissionCard key={submission.id}
        name={submission.name}
        email={submission.email}
        address={submission.address}
        age={submission.age}
      />
    )
  })

  return (
    <div className='submissions-container'>
      {allSubmissions}
    </div>
  )
}

export default Submissions