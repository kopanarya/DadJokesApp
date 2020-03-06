import React from 'react'
import axios from 'axios'
import Joke from './Joke'
import './DadJoke.css'

class DadJoke extends React.Component{
  static defaultProps = {
    numJokesToGet:10
  }
  constructor(props){
    super(props)
    this.state = {
      jokes:[],

    }
    this.handleNewJokes = this.handleNewJokes.bind(this)
  }
  async handleNewJokes(e){
    e.preventDefault()
    const jokes = await this.getJokes()
    console.log(jokes);
    this.setState(st => ({jokes:[...st.jokes, ...jokes]}))
  }
   async  getJokes(){
     let jokes = []
     while(jokes.length < this.props.numJokesToGet)
     {
       const url = `https://icanhazdadjoke.com/`
       let res = await axios.get(url,{headers:{Accept:'application/json'}})
       let data = res.data
       if(jokes.length === 0){
         jokes.push({id:data.id,content:data.joke})
       }
       else if (jokes.length>0) {
         const joke =  jokes.map(joke => joke.id !== data.id)
         if(joke)
         jokes.push({id:data.id,content:data.joke})
       }

     }
     return jokes

  }
  async componentDidMount(){
       const jokes = await this.getJokes()
        this.setState({jokes:jokes})

  }
  render(){
    const jokes = this.state.jokes.map(joke =>
      <Joke key={joke.id} joke={joke.content}    />
    )
    return(
      <div className='section'>
         <div className='container'>
           <div className='new-jokes-container'>
              <h1>Dad Jokes</h1>
               <p className='joke-emoji'>😂</p>
              <button onClick={this.handleNewJokes} className='new-jokes-btn'>New Jokes</button>
           </div>
           <div className='jokes-container'>
               {jokes}
           </div>
         </div>
      </div>
    )
  }
}
export default DadJoke
