var HelloWorldComponent = React.createClass({
    getInitialState: function () {
        return {
            serverMessage: ''
        };
    },
    componentDidMount: function () {
        //Fetch data from server

        $.get('/home/getmessage', function (result) {
            if (this.isMounted) {
                this.setState({
                    serverMessage: result
                });
            }
        }.bind(this));
    },
    render: function () {
        return (
            <h1> 
                This is ES5 Version.
                {
                    this.state.serverMessage
                }
            </h1>);
    }

});

ReactDOM.render(
    <HelloWorldComponent />, document.getElementById("content"));

//var HelloWorldComponent = React.createClass({
//    getInitialState: function () {
//        return { data: '' };
//    },
//    componentWillMount: function () {
//        console.log(React.version);
//        debugger;
//        var xhr = new XMLHttpRequest();
//        xhr.open('get', this.props.url, true);
//        xhr.onload = function () {
//            var response = JSON.parse(xhr.responseText);

//            this.setState({ data: response.Data });
//        }.bind(this);
//        xhr.send();
//    },

//    render: function () {
//        return (
//            <h2>{this.state.data}</h2>
//        );
//    }
//});

//ReactDOM.render(<HelloWorldComponent url="/Home/GetMessageNew" />, document.getElementById('content'));
