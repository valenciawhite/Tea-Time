import { API_BASE, BEARER_TOKEN } from "./config";
import queryString from 'query-string'

export function get(path, queryParams){
    const query= queryString.stringify(queryParams);

    return fetch `$(API_BASE)${path}?${query}`, {
        headers:{
            Authrization: `Bearer ${BEARER_TOKEN}`,
            Origin: 'localhost',
            withCredentials: true,
        }
    }
}