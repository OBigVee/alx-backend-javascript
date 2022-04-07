import { createUser } from "./utils";
export default function signUpUser(firstName, lastName) {
    return Promise.resolve({ firstName, lastName });
}