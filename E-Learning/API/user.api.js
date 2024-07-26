export const userAPI = {

    post: (user) => {
        fetch("http://localhost:8118/user", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        })
    },


    get: async () => {
        let req = await fetch("http://localhost:8118/user");
        let res = await req.json();
        console.log(res);
        return res;
    },
}


export const CourseAPI = {

    post: (user) => {
        fetch("http://localhost:8118/courses", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        })
    },


    get: async () => {
        let req = await fetch("http://localhost:8118/courses");
        let res = await req.json();
        console.log(res);
        return res;
    },
}