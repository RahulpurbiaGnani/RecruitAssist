import React from 'react';
import { FaFileAlt, FaRegCheckCircle } from 'react-icons/fa';
import { FiAlertCircle } from "react-icons/fi";

import '../styles/CampaignCard.css'; 

const CampaignCard = ({ campaign }) => {
  return (
    <div className={`campaign-card ${campaign.active ? 'active' : ''}`}>
      {/* <div className="category">{campaign.category}</div> */}
     <div className='titleContainer'>
     <h2>{campaign.title}</h2>
     <FiAlertCircle />
     </div>
      <div className='expContainer'>
      <p>Created by: {campaign.createdBy}</p>
      <p>Exp: {campaign.experience}</p>
      </div>
      <div className='resumeContainer'>
      <div className="resumes">
        <FaFileAlt /> Total resumes: {campaign.resumes}
      </div>
      <div className="status">
        <FaRegCheckCircle /> Active
      </div>
      </div>
    </div>
  );
};

export default CampaignCard;
