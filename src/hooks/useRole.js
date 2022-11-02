export default function useRole() {
    const userData = JSON.parse(window.localStorage.getItem("userData"));

    const role = userData?.role;

    return role;
}
