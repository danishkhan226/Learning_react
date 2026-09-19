import React from 'react'

import Card from './components/Card'
import User from './components/User'



const App = () => {
  const arr = [
    {
      logo: 'https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg',
      brandname: 'Amazon',
      posttime: '5 days ago',
      position: 'Senior UI/UX Designer',
      tag1: 'Part Time',
      tag2: 'Senior Level',
      pricing: '$120/hr',
      location: 'Mumbai, India',
    },
    {
      logo: 'https://53.fs1.hubspotusercontent-na1.net/hubfs/53/image8-2.jpg',
      brandname: 'Google',
      posttime: '2 days ago',
      position: 'Frontend Developer',
      tag1: 'Full Time',
      tag2: 'Mid Level',
      pricing: '$100/hr',
      location: 'Bangalore, India',
    },
    {
      logo: 'https://s3-figma-hubfile-images-production-cdn-cgi.figma.com/cdn-cgi/image/format=auto,quality=85,width=1600/hub/file/carousel/img/6451340d05a015f7bf556c39d0060a3a06356c08',
      brandname: 'Microsoft',
      posttime: '1 day ago',
      position: 'Software Engineer',
      tag1: 'Full Time',
      tag2: 'Senior Level',
      pricing: '$110/hr',
      location: 'Hyderabad, India',
    },
    {
      logo: 'https://cavinkare.com/wp-content/uploads/2021/12/Flipkart-Logo-removebg-preview.png',
      brandname: 'Flipkart',
      posttime: '3 days ago',
      position: 'Product Designer',
      tag1: 'Full Time',
      tag2: 'Junior Level',
      pricing: '$80/hr',
      location: 'Bangalore, India',
    },
    {
      logo: 'https://images.icon-icons.com/535/PNG/512/Spotify-Icon_icon-icons.com_52864.png',
      brandname: 'Spotify',
      posttime: '4 days ago',
      position: 'React Developer',
      tag1: 'Part Time',
      tag2: 'Mid Level',
      pricing: '$90/hr',
      location: 'Pune, India',
    },
    {
      logo: 'https://toppng.com/uploads/preview/netflix-logo-png-hd-116606008027stwkbpdxc.png',
      brandname: 'Netflix',
      posttime: '6 days ago',
      position: 'UI/UX Designer',
      tag1: 'Full Time',
      tag2: 'Senior Level',
      pricing: '$130/hr',
      location: 'Delhi, India',
    },
    {
      logo: 'https://s3.amazonaws.com/freebiesupply/large/2x/adobe-logo-transparent.png',
      brandname: 'Adobe',
      posttime: '2 days ago',
      position: 'UI/UX Designer',
      tag1: 'Full Time',
      tag2: 'Mid Level',
      pricing: '$95/hr',
      location: 'Pune, India',
    },
    {
      logo: 'https://logodix.com/logo/4559.jpg',
      brandname: 'IBM',
      posttime: '4 days ago',
      position: 'Backend Developer',
      tag1: 'Full Time',
      tag2: 'Senior Level',
      pricing: '$105/hr',
      location: 'Bangalore, India',
    },
    {
      logo: 'https://logos-world.net/wp-content/uploads/2020/07/Airbnb-Logo.png',
      brandname: 'Airbnb',
      posttime: '1 day ago',
      position: 'Product Designer',
      tag1: 'Part Time',
      tag2: 'Junior Level',
      pricing: '$85/hr',
      location: 'Delhi, India',
    },
    {
      logo: 'https://logodownload.org/wp-content/uploads/2015/05/uber-logo-1-1.png',
      brandname: 'Uber',
      posttime: '6 days ago',
      position: 'Full Stack Developer',
      tag1: 'Full Time',
      tag2: 'Mid Level',
      pricing: '$100/hr',
      location: 'Hyderabad, India',
    },
  ];
  return (
    <div className='parent'>
      {arr.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card logo={elem.logo} brandname={elem.brandname} posttime={elem.posttime} position={elem.position} tag1={elem.tag1} tag2={elem.tag2} pricing={elem.pricing} location={elem.location} />
          </div>
        )
      })}
    </div>
  )
}

export default App
