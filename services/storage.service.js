import axios from 'axios';

class Storage {
    constructor () {
        this.storage = window.sessionStorage;
    }

    getData(key) {
        axios.get('/api/users')
        .then(res => {
            const data = res.data;
            this.setData('contacts', data);
        })
        .catch(err => {
            console.log(err);
        })

        const result = JSON.parse(this.storage.getItem(key));
        return result;
    }

    setData(key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    }

    removeData(key) {
        this.storage.removeItem(key);
    }

    clearData() {
        this.storage.clear();
    }
}
export default Storage