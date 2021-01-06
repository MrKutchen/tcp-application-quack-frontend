import React, {Component} from 'react';
import ChannelDataService from "../../api/ChannelDataService";


class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            channelName: ''
        }
    }

    componentDidMount() {

        if (this.state.id === -1) {
            return
        }
        ChannelDataService.retrieveChannel(this.state.id)
            .then(response => this.setState({
                channelName: response.data.channelName
            }))
    }


    render() {
        let {channelName} = this.state;
        return (
            <div>
                initialValues={{channelName}}
            </div>
        );
    }
}

export default MyComponent;
