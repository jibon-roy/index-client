import { auth } from "../../firebase/Auth";
import { AuthContext } from "../providers/AuthProvider";


const useAuth = () => {
    const authContext = AuthContext(auth)
    return authContext
};

export default useAuth;