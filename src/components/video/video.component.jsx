import './video.style.css';
const VideoComp = ()=>{
    return(
<div className="video">
<iframe className='frame' src="https://www.youtube.com/embed/lXkFZh5Q2nY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


    );
}
export default VideoComp;