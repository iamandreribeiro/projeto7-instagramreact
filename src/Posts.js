import Post from "./Post";

const posts = [
    {
        userImg: "img/meowed.svg",
        userName: "meowed",
        postImg: "img/gato-telefone.svg",
        imgLikes: "img/respondeai.svg",
        userLikes: "respondeai",
        qttLikes: "101.523"
    },
    {
        userImg: "img/barked.svg",
        userName: "barked",
        postImg: "img/dog.svg",
        imgLikes: "img/adorable_animals.svg",
        userLikes: "adorable_animals",
        qttLikes: "99.159"
    }
]


export default function Posts() {
    return (
        <div class="posts">
            {
                posts.map((post) => {
                    return <Post userImg={post.userImg} userName={post.userName} postImg={post.postImg} imgLikes={post.imgLikes} userLikes={post.userLikes} qttLikes={post.qttLikes}/>
                })
            }
        </div>
    )
}