//import React from 'react';
//import ReactDOM from 'react-dom';

class AppState extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: "2.Header from state.tt.testa. appstate jsx",
            content: "2. This is app state - Content from state..."
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.header}</h1>
                <h2>{this.state.content}</h2>
            </div>
        );
    }
}

//export default AppState;

 ReactDOM.render(
   <AppState />,
     document.getElementById('content')
 );