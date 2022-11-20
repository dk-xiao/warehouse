import QS from 'qs'

export const Submit = {
    get (data) {
        return new Promise((resolve, reject) => {
            this.$axios.get(data.url, data.data).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.data)
            })
        })
    },
    post (data) {
        return new Promise((resolve, reject) => {
            this.$axios.post(data.url, QS.stringify(data.data)).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.data)
            })
        })
    }
}