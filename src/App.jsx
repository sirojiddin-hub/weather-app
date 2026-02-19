import React, {Component} from 'react';
import WeatherComponent from "./components/WeatherComponent.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
class App extends Component {
    // state = {
    //     name :'doston',
    //     user:{
    //         firstName:'Ali',
    //         lastName:'Farhodov'
    //     },
    //     numbers:[1,2,3,4,5]
    // };
    //
    // testFunc =()=>{
    //     this.setState({
    //         name :'Nodir'
    //     })
    // };
    // text='lorem ipsum dolor sit amet';
    // changeName=()=>{
    //     this.state.user.firstName='vali';
    //     this.setState({
    //         user : this.state.user,
    //     })
    // }
    //
    // deleteNumber=(index)=>{
    //     this.state.numbers.splice(index,1);
    //     console.log(index);
    //     this.setState({
    //         numbers : this.state.numbers
    //     });
    // }

    render() {

        return (
            <div className="container my-5">
                {/*<h1>App jsx </h1>*/}
                {/*/!*<NavBar/>*!/*/}
                {/*/!*<Header/>*!/*/}
                {/*/!*<Header/>*!/*/}
                {/*/!*<Footer/>*!/*/}
                {/*<h1>{this.state.name}</h1>*/}

                {/*<button onClick={this.testFunc} className="btn btn-primary">chnge button </button>*/}
                {/*<Card text={this.text} user={this.state.user}*/}
                {/*      changeName={this.changeName}*/}
                {/*      numbers={this.state.numbers}*/}
                {/*      deleteNumber={this.deleteNumber}*/}
                {/*/>*/}
                <WeatherComponent/>
                <ToastContainer/>

            </div>
        );
    }
}

export default App;