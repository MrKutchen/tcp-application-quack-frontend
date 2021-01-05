import axios from "axios";

class ChannelDataService {

    retrieveAllChannels() {
        return axios.get('http://localhost:3000/channels')
    }
}

export default new ChannelDataService();