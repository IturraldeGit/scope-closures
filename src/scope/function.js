function greeting() {
    let userName = 'Ana'; // Local - Function Scope
    console.log(userName);

    if (userName === 'Ana') {
        console.log(`Hello ${userName}!`);
    }
}

greeting();