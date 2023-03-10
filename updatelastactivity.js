const posts = []
let userActivityTime = null
function createPost() {
    const promise = new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'Post'});
            resolve();
        }, 1000)
    })
    return promise
}

function updateLastUserActivityTime() {
    const promise = new Promise( (resolve, reject) => {
        setTimeout( () => {
            userActivityTime = new Date();
            resolve();
        }, 1000)
    })
    return promise
}

function deletePost() {
    const promise = new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.pop();
            resolve();
        }, 1000)
    })
    return promise
}

Promise.all([createPost(), updateLastUserActivityTime()]).then(() => {
    console.log("Posts created :", posts)
    console.log("Last activity time :", userActivityTime)
    return deletePost()
})
.then(() => {
    console.log("Posts after deletion :", posts)
})