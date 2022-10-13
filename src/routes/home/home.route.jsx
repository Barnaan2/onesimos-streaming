import Bible from "../../components/bible/bible.component";
import VideoComp from "../../components/video/video.component";
import './home.style.css';
import Prayer from "../../components/Prayer/prayer.component";
const Home = ()=>{

    return(
        <div className="home">
            <h1>Onenismos Streaming</h1>
            <h3>Onesimos Streaming , watch Word of GOD online</h3>
            
<figure>

<VideoComp/>

{/* <Prayer/> */}
<Bible/>


</figure>

        </div>

    );
}
export default Home;