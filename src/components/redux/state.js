
import {rerenderAnyTree} from "../../render"

let State = {
    DialogGroup: {
        DialogsData: [
            { name: "Александр", id: "1" },
            { name: "Жусуп", id: "2" },
            { name: "Неизвестный", id: "3" }
        ],
        MessageData: [
            { message: "Hi" },
            { message: "How are you" },
            { message: "jusup text" },
        ]
    },
    ProFilePage: {
        Posts: [
            { text: "Ребята!!! Внимание!!! Пропсы (props)" },
            { text: "важнейшая тема (на мой скромный взгляд). Важно ЧЁТКО-ЧЁТКО представлять" },
            { text: "Поддержать меня и получить доступ к дополнительному контенту" }
        ],
        // newPostText: "it's-your text"
    }
}

export let addPost = (postMessage) => {

    let newPost = {
        text: postMessage    
    }

    State.ProFilePage.Posts.push(newPost)
    rerenderAnyTree(State)
}

export default State