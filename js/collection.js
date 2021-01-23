function groupByUser(model) {
    let grouped = [];
    let users = new Map();

    for (let obj of model) {
        let user = {};
        let post = {};
        post.id = obj.id;
        post.title = obj.title;
        post.text = obj.text;
        if (users.has(obj.user.id)) {
            users.get(obj.user.id).posts.push(post);
        } else {
            user.id = obj.user.id;
            user.name = obj.user.name;
            user.posts = [post];
            users.set(user.id, user);
        }
    }
    for (let key of users.keys()) {
        grouped.push(users.get(key));
    }

    return grouped;
}

