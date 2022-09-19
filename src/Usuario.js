import {useState} from "react";

export default function Usuario(props) {
    const [name, setName] = useState(props.userName);
    const [photo, setPhoto] = useState(props.userImg);

    function changeName() {
        let name = prompt("Qual será seu novo nome de usuário?");
        setName(name);
    }

    function changePhoto() {
        let photo = prompt("Qual será sua nova foto?");
        setPhoto(photo);
    }

    return (
        <div class="usuario">
            <img src={photo} onClick={changePhoto} alt={name} />
            <div class="texto">
                <strong>catanacomics</strong>
                <span>
                    {name}
                    <ion-icon name="pencil" onClick={changeName}></ion-icon>
                </span>
            </div>
        </div>
    )
}