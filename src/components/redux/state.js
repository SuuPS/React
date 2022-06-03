let rerenderAnyTree = () => {
    console.log(0)
}


const State = {
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
        NewPostText: "it's-your text"
    }
}

export const addPost = () => {
    let newPost = {
        text: State.ProFilePage.NewPostText    
    }

    State.ProFilePage.Posts.push(newPost)
    State.ProFilePage.NewPostText = ""
    rerenderAnyTree(State)
}

export const changeNewPT = (postMessage) => {

    State.ProFilePage.NewPostText = postMessage
    rerenderAnyTree(State)
}

export const subscribe = (observer) => {
    rerenderAnyTree = observer
}


export default State