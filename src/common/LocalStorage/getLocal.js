import { CODE } from "../../constant/localStorage"

export const getLocal = (key) => {
    return localStorage.getItem(`${CODE}${key}`);
}