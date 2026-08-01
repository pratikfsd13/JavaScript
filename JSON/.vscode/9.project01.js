function login(password) {
    return new Promise((resolve, reject) => {
        if (password == "admin1234") {
            setTimeout(() => {
                resolve("Login Successful!")
            }, 2000)
        } else {
            setTimeout(() => {
                reject("Invalid Password!")
            },2000)
        }
    });
}

function getProfile() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ID: 101, Name: "Sonam Soni"})
        },2000)
        })
    }

function getMarks() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ Java: 100, JavaScript: 95, React: 99 })
        }, 1000)
    })
}

// use Above Created Functions In Portal
async function studentPortal(password) {
    try {
        console.log("Openig Portal.........!!");
        const loginStatus = await login(password);
        console.log(loginStatus);
        const student = await getProfile();
        console.log(student);
        const marks = await getMarks();
        console.log(marks);
    } catch (error) {
        console.log("Error Occured", error);
    } finally {
        console.log("Portal Closed");
    }
}

studentPortal("admin");
studentPortal("admin1234")