import React from 'react';
import CampaignCard from './components/CampaignCard';
import './styles/CampaignCard.css'; // Ensure this path is correct
import Sidebar from './components/Sidebar';
import './App.css'
import Navbar from './components/Navbar';
const campaigns = [
  {
    title: 'Senior Enterprise Sales Manager',
    category: 'Enterprise Sales',
    createdBy: 'Abhilash',
    experience: '8-10 Years',
    resumes: 12,
    active: true,
  },
  {
    title: 'Digital Marketing Lead',
    category: 'Marketing',
    createdBy: 'Abhilash',
    experience: '5-8 Years',
    resumes: 12,
    active: true,
  },
  {
    title: 'Senior Backend Engineer (5+ yrs)',
    category: 'Engineering',
    createdBy: 'Abhilash',
    experience: '5-8 Years',
    resumes: 12,
    active: true,
  },
  {
    title: 'Junior Financial Analyst',
    category: 'Finance',
    createdBy: 'Abhilash',
    experience: '1-2 Years',
    resumes: 12,
    active: true,
  },
];

const App = () => {
  return (
    <div className="app">
      <Sidebar/>
      <Navbar/>
      <div className="header">
        {/* <h1>Your Campaigns</h1> */}
        {/* <p>Hi, Abhilash</p> */}
        {/* <div className="date">Wednesday, January 17, 2024</div> */}
   
      <div className="campaigns">
        {campaigns.map((campaign, index) => (
          <CampaignCard key={index} campaign={campaign} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default App;


