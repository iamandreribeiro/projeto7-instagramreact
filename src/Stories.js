import Story from "./Story";

const stories = [
    {
        image: "img/9gag.svg",
        user: "9gag"
    },
    {
        image: "img/meowed.svg",
        user: "meowed"
    },
    {
        image: "img/barked.svg",
        user: "barked"
    },
    {
        image: "img/nathanwpylestrangeplanet.svg",
        user: "nathanwpylestrangeplanet"
    },
    {
        image: "img/wawawicomics.svg",
        user: "wawawicomics"
    },
    {
        image: "img/respondeai.svg",
        user: "respondeai"
    },
    {
        image: "img/filomoderna.svg",
        user: "filomoderna"
    },
    {
        image: "img/memeriagourmet.svg",
        user: "memeriagourmet"
    }
]

export default function Stories() {
    return (
        <div class="stories">
            {
                stories.map((story) => {
                    return <Story image={story.image} user={story.user}/>
                })
            }
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}