import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer mAjKPLuX8XwI4__0xpfUNxcj1jWJY5QUbUTM80reYRcy0ZulZuDIYgtdPxZ4fJ-9IiBsvbNskX1XsmiDIJ7CJ_eKEzWDTDPuX6338C8Xw-refboZyaOxKUCk6_egYHYx'
    }
})
