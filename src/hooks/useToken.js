export default function useToken() {
    const userData = JSON.parse(window.localStorage.getItem("userData"));

    const token = userData?.token;

    return token;
}
