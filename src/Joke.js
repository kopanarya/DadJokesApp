import React from 'react'
import './Joke.css'
import { AnimateOnChange } from 'react-animation'

class Joke extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      rating:0,
      emojiIndex:4,
      emojis:['😡','😤','😠','🙁','😐','🙂','😊','😀','😁','😃','😄','😆','😂','🤣'],

    }
    this.increaseRating = this.increaseRating.bind(this)
    this.decreaseRating = this.decreaseRating.bind(this)
  }
  increaseRating(){
    console.log(this.state.emojis.length);
    if(this.state.emojiIndex< this.state.emojis.length-1){
        this.setState(st => ({rating:st.rating+1,emojiIndex:st.emojiIndex+1}))
    }


  }
  decreaseRating(){
      if(this.state.emojiIndex>0){
          this.setState(st => ({rating:st.rating-1,emojiIndex:st.emojiIndex-1}))
      }


  }
  render(){
      let color=''
      let ratingVal = this.state.rating
      if(ratingVal>0 && ratingVal <= 3)
       color = 'black'
       else if(ratingVal > 3 && ratingVal<=6)
       color = 'blue'
       else if(ratingVal>6)
       color = 'green'
       else
      color = 'red'


     console.log(color);

    return(
      <div className='joke-box'>
        <div className='rating-container'>
           <div className='arrow-up' onClick={this.increaseRating}>
           <i className="fas fa-arrow-up"></i>
           </div>
           <div className='rating' style={{borderColor:color}}>
               <AnimateOnChange durationOut={450}>
               {this.state.rating}
               </AnimateOnChange>
           </div>
           <div className='arrow-down' onClick={this.decreaseRating}>
           <i className="fas fa-arrow-down"></i>
           </div>
        </div>
        <div className='joke'>
         {this.props.joke}
        </div>
        <div className='emoji' >
        <AnimateOnChange durationOut={450}>
          {this.state.emojis[this.state.emojiIndex]}
          </AnimateOnChange>
        </div>

      </div>
    )
  }
}
export default Joke
