import {useState} from "react";

export default function Post(props) {
    const [name, setName] = useState("bookmark-outline");
    const [like, setLike] = useState("heart-outline");
    const [classe, setClasse] = useState("");
    const [likes, setLikes] = useState(props.qttLikes);

    function savePost() {
        if(name === "bookmark-outline") {
            setName("bookmark");
        } else {
            setName("bookmark-outline");
        }
    }

    function likePost() {
        let mil = parseInt(likes);
        let centena = (parseFloat(likes)%1).toFixed(3);
        let soma;

        mil*=1000;
        centena*=1000;
        soma = centena+mil;

        if(like === "heart-outline") {
            setLike("heart");
            setClasse("liked");
            soma++;
            setLikes((soma/1000).toFixed(3));
        } else {
            setLike("heart-outline");
            setClasse("");
            setLikes(props.qttLikes);
        }
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userImg} />
                    {props.userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.postImg}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={like} class={classe} onClick={likePost}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={name} onClick={savePost}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgLikes} />
                    <div class="texto">
                        Curtido por <strong>{props.userLikes}</strong> e <strong>outras {likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}