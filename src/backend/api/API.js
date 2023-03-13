import { useEffect, useState } from 'react'

export default function LinkScholarAPI(path, field, params = [], restMethod = "GET", docType = "application/json", trigger = []) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = ConstructUrl(path, field, params);

        const reqHeaders = new Headers();
        reqHeaders.append("Accept", docType);

        const options = {
            method: restMethod,
            headers: reqHeaders,
            mode: "cors"
        }

        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                setData(JSON.stringify(data));
                setLoading(false);
            })
            .catch(err => console.error("ERROR FETCHING DATA FROM %s : %s", url, err))
    }, trigger)

    return {
        response: data,
        loaded: loading
    }
}

/**
 * Constructs a url for an API call. 
 * @param {string} path Root URL. Must end in "/".
 * @param {string} field Field Value. Does not end in "/"
 * @param {string[]} params Params if they exist.
 */
export function ConstructUrl(path, field = "", params = []) {
    let url = "http://localhost:5000";
    url += path + field;

    if (params.length > 0) {
        url += "?";
        params.map((param, idx) => {
            url += param;

            if (idx % 2 === 0) {
                url += "=";
            }

            if ((idx % 2 !== 0) & (idx < params.length - 1)) {
                url += "&";
            }
        })
    }

    console.log(url);
    return url;
}