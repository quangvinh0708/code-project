import { CODE } from "../../constant/localStorage"

export const setLocal = (key, value) => {
    localStorage.setItem(`${CODE}${key}`, JSON.stringify(value));
}