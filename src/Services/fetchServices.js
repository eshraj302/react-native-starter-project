const responseParser = (res) => res.json();

const errorHandler = (err) => {
    console.error(err);
    throw new Error(err);
}

export const postService = (url, body, headers, token) => (
    fetch(url, {
        method: "POST",
        body, 
        headers,
    }).then(responseParser).catch(errorHandler)
);

export const getService = (url, headers, token) => (
    fetch(url, {
        method: "GET",
        headers,
    }).then(responseParser).catch(errorHandler)
);