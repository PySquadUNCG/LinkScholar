import { useEffect, useState } from 'react'

export default async function LinkScholarAPI(path, field, params = {}, restMethod = "GET", docType = "application/json") {
    const { url, content } = ConstructURL(path, field, params, restMethod);
    if (url === "") {
        return {
            response: content,
            loading: false
        }
    }

    const reqHeaders = new Headers();
    reqHeaders.append("Accept", docType);

    if (restMethod === "POST") {
        reqHeaders.append("Content-Type", docType);
    }

    const options = {
        method: restMethod,
        headers: reqHeaders,
        body: content,
        mode: "cors"
    }

    const resp = await fetch(url, options)
        .then(res => res.json())
        .then(data => {
            return {
                response: data,
                loading: true
            }
        })
        .catch(err => console.error("ERROR FETCHING DATA FROM %s : %s", url, err))

    return resp
}

/**
 * Constructs a url for a GET API call. 
 * @param {string} path Root URL. Must end in "/".
 * @param {string} field Field Value. Does not end in "/"
 * @param {string[]} params Params if they exist.
 */
export function ConstructGetURL(path, field = "", params = {}) {
    let url = "http://localhost:5000";
    url += path + field;

    const content = null;

    if (Object.keys(params).length > 0) {
        url += "?";
        for (let idx = 0; idx < Object.keys(params).length; idx++) {
            url += Object.keys(params)[idx] + "=" + params[Object.keys(params)[idx]];

            if ((idx < Object.keys(params).length - 1)) {
                url += "&";
            }
        }
    }

    return { url, content };
}

/**
 * Constructs a url for a POST API call. 
 * @param {string} path Root URL. Must end in "/".
 * @param {string} field Field Value. Does not end in "/"
 * @param {string[]} params Params if they exist.
 */
export function ConstructPostURL(path, field = "", params = {}) {
    const url = "http://localhost:5000" + path + field;

    const content = JSON.stringify(params);

    return { url, content };
}

/**
 * Constructs a url for an API call. 
 * @param {string} path Root URL. Must end in "/".
 * @param {string} field Field Value. Does not end in "/"
 * @param {string[]} params Params if they exist.
 * @param {string} method Request Method.
 */
export function ConstructURL(path, field = "", params = {}, method = "GET") {
    if (method === "GET") {
        return ConstructGetURL(path, field, params);
    } else if (method === "POST") {
        return ConstructPostURL(path, field, params);
    } else {
        return {
            url: "",
            content: JSON.stringify({ ERROR: "BAD REQUEST" })
        }
    }
}