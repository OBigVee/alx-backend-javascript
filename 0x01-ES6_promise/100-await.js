import { uploadPhoto } from "./utils";
import { createUser } from "./utils";
export default async function asyncUploaderUser() {
    const obj = {};
    try {
        const photoObj = await uploadPhoto();
        const userObj = await createUser();
        obj.photo = photoObj;
        obj.user = userObj;
    } catch (error) {
        obj.photo = null;
        obj.user = null;
    }
    return obj;
}