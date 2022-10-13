import './bible.style.css';
const Bible = ()=>{

 return(
     <div className="bible">
<h2>Bible</h2>
<iframe className="bible-frame" src="https://www.bible.com/bible/3202/GEN.1.MACQUL" title="Bible">
     </iframe>

     </div>);
     // here in this bible language is just the number so if change the number i change the language of the page

}

export default Bible;