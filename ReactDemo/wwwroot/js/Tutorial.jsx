class CommentList extends React.Component {
    render() {
        if (this.props.data) {
            const commentNodes = this.props.data.map(comment => (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            ));
            return <div className="commentList">{commentNodes}</div>;
        }
        else {
            return <div className="commentList">This is else part from comment list</div>;
        }
    }
}

class CommentForm extends React.Component {
    render() {
        return (
            <div className="commentForm">Hello, world! I am a CommentForm.</div>
        );
    }
}

function createRemarkable() {
    var remarkable =
        'undefined' != typeof global && global.Remarkable
            ? global.Remarkable
            : window.Remarkable;

    return new remarkable();
}

class Comment extends React.Component {
    rawMarkup() {
        const md = new Remarkable();
        const rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    }
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">{this.props.author}</h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
}

const datarecord = [
    { id: 1, author: 'Daniel Lo Nigro aa1', text: 'Hello ReactJS.NET World! aa' },
    { id: 2, author: 'Pete Hunt bb 22', text: 'This is one comment bb' },
    { id: 3, author: 'Jordan Walke cc', text: 'This is *another* comment cc' },
];

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    loadCommentsFromServer() {
        const xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            this.setState({ data: data });
        };
        xhr.send();
    }
    componentDidMount() {
        console.log(React.version);
        console.log(ReactDOM.version);
        
        this.loadCommentsFromServer();
        window.setInterval(
            () => this.loadCommentsFromServer(),
            this.props.pollInterval,
        );
    }
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm />
            </div>
        );
    }
}

//ReactDOM.render(<CommentBox data={datarecord} />, document.getElementById('content'));

ReactDOM.render(
    <CommentBox url="/comments" pollInterval={2000} />,
    document.getElementById('content'),
);
