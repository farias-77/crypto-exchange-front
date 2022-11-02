import useRole from "../../hooks/useRole";
import UserHome from "./userHome";

export default function Home() {
    const role = useRole();

    return role === "USER" ? <UserHome /> : <></>;
}
