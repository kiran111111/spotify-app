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
            <a className="audio__link" href="/">
             <img className="audio__image" src={item.images && item.images[2].url }></img>
             <p className="audio__desc"> {item.name}</p>
            </a>
           </li>
        )}
      </ul>
     </div>
    </div>
  )
 }
}


export default Audio;