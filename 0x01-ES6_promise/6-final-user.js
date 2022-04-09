import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";
export default function handleProfileSignup(firstName, lastName, filename) {
    return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
        .then(
            (promise) => (promise.map((info) => ({
                status: info.status,
                value: (info.status === 'fulfilled') ? info.value : String(info.reason),
            })))
        );
}