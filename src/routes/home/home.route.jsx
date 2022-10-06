import Bible from "../../components/bible/bible.component";
import VideoComp from "../../components/video/video.component";
import './home.style.css';
const Home = ()=>{

    return(
<div className="index-container">

    <VideoComp/>
  
    
    <Bible/>


</div>
    );
}
export default Home;