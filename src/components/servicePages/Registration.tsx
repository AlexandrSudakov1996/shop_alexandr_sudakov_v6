
import type {LoginData, SignUpData} from "../../utils/app-types.ts";
import {registerWithEmailPass} from "../../firebase/firebaseAuthService.ts";
import {useNavigate} from "react-router-dom";
import {Paths} from "../../utils/paths.ts";
import { updateProfile } from "firebase/auth";
import SignUp from "../templates/SignUp.tsx";


const Registration = () => {
    const navigate = useNavigate();
    const registerFirebase = async (data: SignUpData) => {
            const registerData: LoginData = {
                login: data.email,
                password: data.password,
            };

        try {
            const userCredential = await registerWithEmailPass(registerData);

            if (userCredential && "user" in userCredential) {
                const user = userCredential.user;

                await updateProfile(user, {
                    displayName: data.name,
                });
            }

            navigate(`/${Paths.LOGIN}`);
        } catch (e) {
            console.log("Registration error:", e);
            navigate(`/`);
        }
    };
    return (
        <div>
            <SignUp func={registerFirebase} />
        </div>
    );
};


export default Registration;