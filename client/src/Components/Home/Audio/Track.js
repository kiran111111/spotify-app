import React from 'react'

class Audio extends React.Component {




 render(){

  console.log(this.props.getTopList)


   return (
    <div className="audio__container">
     <div className="audio__title">
      <h3> Top {this.props.title} of all time</h3>
      <button className="spotify__button"> <a href="/"> See More</a> </button>
     </div>
     <div className="audio__list">
      <ul>
        {this.props.getTopList && this.props.getTopList.map((item,index)=>
            <li key={index}>
            <div href="/" className="track__link">
             <div><img className="track__image" src={item.album && item.album.images[2].url }></img></div>
             <div className="track__params">
               <a href="/"><span className="track__desc"> {item.name}</span>
               <p className="track__descmore">{item.artists[0].name} . {item.album.name}</p>
               </a>
                <span className="  track__time" >3:45</span>
             </div>
            </div>
           </li>
        )}
      </ul>
     </div>
    </div>
  )
 }
}


export default Audio;