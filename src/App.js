import React from "react";
import './App.css';
import axios from 'axios';

class App extends React.Component{
    state={advices:''};

    componentDidMount(){
        this.fetchAdv();
    }

    fetchAdv = () =>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const {advice}=response.data.slip;
            this.setState({advice});
        })
        .catch((error) => {
            console.log(error);
        });
    }

    handleCopy = () => {
        const { advice } = this.state;
        navigator.clipboard.writeText(advice)
          .then(() => alert('Advice copied to clipboard!'))
          .catch(error => console.error('Unable to copy advice:', error));
    };

    render(){
        const {advice}=this.state;
        return(
            <div className="section">
                <div className="card">
                    <h1 className="mainheading">WORDS OF WISDOM</h1>
                    <h1 className="headingg">{advice}</h1>
                    <div className="button-container">
                    <button className="buttonn1" onClick={this.fetchAdv}>
                        <span>NEXT ADVICE</span>
                    </button>
                    <button className="buttonn2" onClick={this.handleCopy}>
                        <span>COPY</span>
                    </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;