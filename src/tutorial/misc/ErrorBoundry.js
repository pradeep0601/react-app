import { Component } from "react";

class ErrorBoudry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('========error: ', error);
        console.log('========errorInfo: ', errorInfo);
        this.setState({
            hasError: true
        });
    }

    render() {
        if (this.state.hasError) {
            return <h3>Something went wrong!!</h3>
        }
        return this.props.children;
    }
}

export default ErrorBoudry;