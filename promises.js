const posts = [

    {

        title: 'Post One', body: 'This is post one'

    },

    {

        title: 'Post Two', body: 'This is post two'

    }

]



function getPosts() {


    setTimeout(() => {

        let output = ''

        posts.forEach((post) => {

            output += `<li>${post.title} </li>`

        })

        document.body.innerHTML = output

    }, 1000)

}
function createPost(post) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            const error = false
            if (!error) {
                resolve()
            } else {
                reject('Error : Something went wrong')
            }
        }, 2000)
    })

}
function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length == 0) {
                reject('All Posts are Deleted')
            } else {
                posts.pop()
                resolve()
            }
        }, 5000)
    })
}

createPost({ title: 'Post Three', body: 'This is post three' }).then(getPosts).catch(err => console.log(err))
createPost({ title: 'Post Four', body: 'This is post four' }).then(deletePost).then(getPosts).catch(err => console.log(err))


let userActivityTime = new Date()
console.log(userActivityTime)

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => setTimeout(() => {
        userActivityTime += new Date()
        console.log(userActivityTime)
        resolve()
    }, 3000)
    )
}

Promise.all([createPost({ title: 'Post Five', body: 'This is post Five' }), updateLastUserActivityTime]).then(() => console.log(posts)).then(deletePost)