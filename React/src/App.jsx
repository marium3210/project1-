import Card from "./components/Card"
const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://icon2.cleanpng.com/20180614/hau/kisspng-salesforce-com-netsuite-customer-relationship-mana-great-idea-5b22720fe7eb20.32355178152898407995.jpg",
    companyName: "Salesforce",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Intermediate",
    pay: "60$/hr",
    location: "San Francisco, CA, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTmVc7unwsynm3Ofz31vehWOoGK4FMpkPtw&s",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "UI/UX Designer",
    tag1: "Part-time",
    tag2: "Basic",
    pay: "50$/hr",
    location: "San Jose, CA, USA"
  },
  {
    brandLogo: "https://e7.pngegg.com/pngimages/4/438/png-clipart-spotify-logo-spotify-mobile-app-computer-icons-app-store-music-free-icon-spotify-miscellaneous-logo.png",
    companyName: "Spotify",
    datePosted: "5 days ago",
    post: "Mobile App Developer",
    tag1: "Full-time",
    tag2: "Intermediate",
    pay: "58$/hr",
    location: "New York, NY, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuAnqQdfyWSd-5SxyMR2S1dNpnqRwtP7o-jQ&s",
    companyName: "Slack",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Intermediate",
    pay: "62$/hr",
    location: "San Francisco, CA, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5cUyVhM7gSOUBGj-eqXwhemUgUJgTTK9m0A&s://logo.clearbit.com/dropbox.com",
    companyName: "Dropbox",
    datePosted: "6 days ago",
    post: "Cloud Solutions Engineer",
    tag1: "Full-time",
    tag2: "Basic",
    pay: "55$/hr",
    location: "Austin, TX, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicMDzk5BVKCMaspR4wow1fC8Kt9fDI-ACBg&s",
    companyName: "Airbnb",
    datePosted: "5 days ago",
    post: "Data Analyst",
    tag1: "Part-time",
    tag2: "Intermediate",
    pay: "52$/hr",
    location: "San Francisco, CA, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/27/Square%2C_Inc_-_Square_Logo.jpg",
    companyName: "Square",
    datePosted: "1 week ago",
    post: "Full Stack Developer",
    tag1: "Full-time",
    tag2: "Intermediate",
    pay: "65$/hr",
    location: "San Francisco, CA, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqAcp2nKqa7kAITMdhwg1hyl7S288Z2y-CA&s",
    companyName: "Coinbase",
    datePosted: "6 days ago",
    post: "Blockchain Developer",
    tag1: "Full-time",
    tag2: "Intermediate",
    pay: "70$/hr",
    location: "Remote, USA"
  },
  {
    brandLogo: "https://toppng.com/uploads/preview/nvidia-logo-vector-11574170524xza1ggbhhk.png",
    companyName: "NVIDIA",
    datePosted: "5 days ago",
    post: "AI Research Engineer",
    tag1: "Full-time",
    tag2: "Intermediate",
    pay: "80$/hr",
    location: "Santa Clara, CA, USA"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2021/06/Zoom-Logo.png",
    companyName: "Zoom",
    datePosted: "1 week ago",
    post: "Software QA Engineer",
    tag1: "Part-time",
    tag2: "Basic",
    pay: "48$/hr",
    location: "San Jose, CA, USA"
  }
];



  return (
    <div className="parent">
     
      {jobOpenings.map(function(elem,idx){
        return  <div key= {idx}><Card  companyName={elem.companyName} datePosted={elem.datePosted} post={elem.post}  tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo} /></div>
      
      })}
    </div>
  );
};

export default App;
