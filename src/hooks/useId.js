export default function useId() {
    const userData = JSON.parse(window.localStorage.getItem("userData"));

    const id = userData?.id;

    return id;
}
