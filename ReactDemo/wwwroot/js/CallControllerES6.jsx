class HelloWorldComponent extends React.createClass {
    //constructor() {
    //    super();
    //    this.state = { serverMessage: ''}
    //  }
    componentDidMount() {
        //Fetch data from server
        debugger;
        $.get('/home/getmessage', function (result) {
            if (this.isMounted) {
                this.setState({
                    serverMessage: result
                });
            }
        }.bind(this));
    }
    render() {
        return (
            <h1> 
                This is ES6 Version.
                {
                    this.state.serverMessage
                }
            </h1>);
    }
}

ReactDOM.render(
    <HelloWorldComponent />, document.getElementById("content"));
