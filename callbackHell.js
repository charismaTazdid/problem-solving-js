// reference: https://medium.com/@raihan_tazdid/callback-hell-in-javascript-all-you-need-to-know-296f7f5d3c1


// Callback Hell
fetchRandomJoke((joke) => {
    console.log(joke);
    translateJoke(joke, (translatedJoke) => {
        console.log(translatedJoke);

        postJoke(translatedJoke, () => {
            console.log("Joke posted successfully!");
        });
    });
});

// Solve Callback Hell with Promises
fetchRandomJoke()
    .then((joke) => {
        console.log(joke);
        return translateJoke(joke);
    })
    .then((translatedJoke) => {
        console.log(translatedJoke);
        return postJoke(translatedJoke);
    })
    .then(() => {
        console.log("Joke posted successfully!");
    })
    .catch((error) => {
        console.error("Something went wrong:", error);
    });
// Solve Callback Hell with async await
async function tellJoke() {
    try {
        const joke = await fetchRandomJoke();
        console.log(joke);

        const translatedJoke = await translateJoke(joke);
        console.log(translatedJoke);

        await postJoke(translatedJoke);
        console.log("Joke posted successfully!");
    } catch (error) {
        console.error("Something went wrong:", error);
    }
};
tellJoke();