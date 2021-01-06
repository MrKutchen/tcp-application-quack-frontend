import axios from "axios";
import {API_URL} from "../Constants";

class ChannelDataService {

    retrieveAllChannels() {
        return axios.get(`${API_URL}/channels`)
    }

    retrieveChannel(id) {
        return axios.get(`${API_URL}/channels/${id}`)
    }
}

export default new ChannelDataService();