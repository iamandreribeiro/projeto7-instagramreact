import Sugestao from "./Sugestao"

const suggestions = [
    {
        image: "img/bad.vibes.memes.svg",
        name : "bad.vibes.memes",
        reason: "Segue você"
    },
    {
        image: "img/chibirdart.svg",
        name : "chibirdart",
        reason: "Segue você"
    },
    {
        image: "img/razoesparaacreditar.svg",
        name : "razoesparaacreditar",
        reason: "Novo no Instagram"
    },
    {
        image: "img/adorable_animals.svg",
        name : "adorable_animals",
        reason: "Segue você"
    },
    {
        image: "img/smallcutecats.svg",
        name : "smallcutecats",
        reason: "Segue você"
    }
]

export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {
                suggestions.map((suggest) => {
                    return <Sugestao image = {suggest.image} name = {suggest.name} reason ={suggest.reason}/>
                })
            }

        </div>
    )
}