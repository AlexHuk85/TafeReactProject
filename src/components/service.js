export const keys = {
    count: 'count',
    feedback_form: 'feedback_form'
}

// get, set, remove
export const getItem = function (key) {
    let item = localStorage.getItem(key);
    return JSON.parse(item);
}

export const setItem = function (key, value) {
    let item = JSON.stringify(value);
    localStorage.setItem(key, item);
}

export const removeItem = function (key) {
    localStorage.removeItem(key);
}

// session - get, set, remove
export const getSessionItem = function (key) {
    let item = sessionStorage.getItem(key);
    return JSON.parse(item);
}

export const setSessionItem = function (key, value) {
    let item = JSON.stringify(value);
    sessionStorage.setItem(key, item);
}

export const removeSessionItem = function (key) {
    sessionStorage.removeItem(key);
}