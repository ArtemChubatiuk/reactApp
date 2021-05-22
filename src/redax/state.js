let state = {
    profile:{
        postData: [
            {id: 1, likes: 15, post: 'сегодня все понял'},
            {id: 2, likes: 40, post: 'крутая штуковина!'},
        ],
    },
    dialogsPage:{
        messages: [
            {id: 1, message: 'приветули'},
            {id: 2, message: 'как делишки?'},
            {id: 3, message: 'когда гулять?'},
            {id: 4, message: 'нормуль вот мой номер'},
            {id: 5, message: '0976965736'},
            {id: 6, message: 'наберешь'},
            {id: 7, message: 'когда вийдешь!'}
        ],
        dialogs: [
            {id: 1, name: 'Artemy'},
            {id: 2, name: 'Dmytro'},
            {id: 3, name: 'Denisca'},
            {id: 4, name: 'Evgeny'},
            {id: 5, name: 'Vlados'},
            {id: 6, name: 'Svyatoslav'},
            {id: 7, name: 'Anka'}
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likes: 0
    };

    state.profile.postData.push(newPost);
}

export default state;