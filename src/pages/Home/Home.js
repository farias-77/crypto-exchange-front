import { useNavigate } from "react-router-dom";
import useRole from "../../hooks/useRole";
import UserHome from "./userHome";

export default function Home() {
    const role = useRole();
    const navigate = useNavigate;

    if (!role) {
        navigate("/");
    }

    return role === "USER" ? <UserHome /> : <></>;
}
