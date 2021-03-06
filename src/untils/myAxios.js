import axios from 'axios';
// 使用Promise封装axios
const instance = axios.create({
    baseURL: 'https://www.fastmock.site/mock/518ff590b4f0e092668688c4b2dd1928/api'
});

export const post = (url, data = {}) => {
    return new Promise((resolove, reject) => {
        instance.post(url, data, {
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {
            resolove(response.data);
        }, err => {
            reject(err)
        })
    })
};
export const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        instance.get(url, { params }).then((response) => {
            resolve(response.data)
        }, err => {
            reject(err)
        })
    })
}