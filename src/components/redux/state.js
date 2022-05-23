
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
    Posts: [
        { text: "Ребята!!! Внимание!!! Пропсы (props)" },
        { text: "важнейшая тема (на мой скромный взгляд). Важно ЧЁТКО-ЧЁТКО представлять" },
        { text: "Поддержать меня и получить доступ к дополнительному контенту" }
    ]
}

export let addPost = (postMessage) => {

    let newPost = {
        text: postMessage    
    }

    State.Posts.push(newPost)
}

export default State