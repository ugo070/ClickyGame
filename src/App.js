import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import NavBar from "./components/NavBar/navBar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";

class App extends Component {

  state = {
    friends,
    score: 0,
    topScore: 0,
    clicked: [],
    topMessage: "Click an image to begin"
  };

  removeFriend = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({ friends });
  };

  clickedImage = props => {
    if (this.state.clicked.includes(props.id) === false) {
      this.state.clicked.push(props.id);
      this.setState({
        score: this.state.score + 1,
      });
      if (this.state.score >= this.state.topScore) {
        this.setState((prevState) => ({ 
          topScore: prevState.score,
          topMessage:"You guessed correctly!"
         }))
      };
    }
    else {
      this.setState({
        score: 0,
        clicked: [],
        topMessage: "You guessed incorrectly!"
      });
      if (this.state.score >= this.state.topScore) {
        this.setState({ topScore: this.state.score })
      };
    };
  };


  render() {
    return (
      <div>
        <NavBar
          scores={this.state}
        />
        <Header />
        <Wrapper>
          {this.state.friends.map(item => (
            <FriendCard
              // removeFriend={this.removeFriend}
              clickedImage={this.clickedImage}
              id={item.id}
              key={item.id}
              name={item.name}
              image={item.image}
              occupation={item.occupation}
              location={item.location}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  };
};

export default App;
