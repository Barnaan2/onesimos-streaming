import Bible from "../../components/bible/bible.component";
import VideoComp from "../../components/video/video.component";
import './home.style.css';
import Prayer from "../../components/Prayer/prayer.component";
const Home = ()=>{

    return(
<div className="index-container">

    <VideoComp/>
  
    <Prayer/>
    <Bible/>


</div>
    );
}
export default Home;