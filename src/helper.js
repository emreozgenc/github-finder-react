const BASE_URL = 'http://api.github.com/';

export const getUsers = async () => {
    var query = BASE_URL + 'users';
    var response = await fetch(query);
    var data = await response.json();

    return data;
}

export const findUser = async (keyword) => {
    var query = BASE_URL + 'search/users?q=' + keyword;
    var response = await fetch(query);
    var data = await response.json();

    return data;
}

export const getUserDetail = async (login) => {
    var query = BASE_URL + 'users/' + login;
    var response = await fetch(query);
    var data = await response.json();

    return data;
}

export const getUserRepositories = async (login) => {
    var query = BASE_URL + `users/${login}/repos`;
    var response = await fetch(query);
    var data = await response.json();

    return data;
}