import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {

  const jobs = [
    {
      companyLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      jobRole: "Frontend Developer",
      location: "Mountain View, CA, USA",
      jobType: "Full-time",
      salary: "$120,000 - $150,000",
    },
    {
      companyLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      jobRole: "Backend Engineer",
      location: "Redmond, WA, USA",
      jobType: "Full-time",
      salary: "$110,000 - $140,000",
    },
    {
      companyLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      jobRole: "UI/UX Designer",
      location: "Seattle, WA, USA",
      jobType: "Full-time",
      salary: "$100,000 - $130,000",
    },
    {
      companyLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      jobRole: "Mobile App Developer",
      location: "Menlo Park, CA, USA",
      jobType: "Full-time",
      salary: "$125,000 - $160,000",
    },
    {
      companyLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      jobRole: "Data Analyst",
      location: "Los Gatos, CA, USA",
      jobType: "Full-time",
      salary: "$115,000 - $145,000",
    },
    {
      companyLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      jobRole: "Software Engineer Intern",
      location: "Cupertino, CA, USA",
      jobType: "Part-time",
      salary: "$40/hr",
    },
    {
      companyLogo: "https://logo.clearbit.com/adobe.com",
      companyName: "Adobe",
      jobRole: "Product Designer",
      location: "San Jose, CA, USA",
      jobType: "Full-time",
      salary: "$105,000 - $135,000",
    },
    {
      companyLogo: "https://logo.clearbit.com/spotify.com",
      companyName: "Spotify",
      jobRole: "Audio Engineer",
      location: "New York, NY, USA",
      jobType: "Full-time",
      salary: "$95,000 - $125,000",
    },
    {
      companyLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      jobRole: "Automation Engineer",
      location: "Austin, TX, USA",
      jobType: "Full-time",
      salary: "$110,000 - $140,000",
    },
    {
      companyLogo: "https://logo.clearbit.com/airbnb.com",
      companyName: "Airbnb",
      jobRole: "Marketing Specialist",
      location: "San Francisco, CA, USA",
      jobType: "Full-time",
      salary: "$90,000 - $115,000",
    },
  ];



  return (

    <div className="perent">
      {
        jobs.map((e, idx) => {
          return <Cards
            key={idx}
            companyLogo={e.companyLogo}
            companyName={e.companyName}
            jobRole={e.jobRole}
            location={e.location}
            jobType={e.jobType}
            salary={e.salary}
          />
        })
      }
    </div>

  )
}

export default App
