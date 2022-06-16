/**
 *
 */
class AppController{
    static getHomepage(request, response){
        const statusCode = 200;
        const message = "Hello Holberton School!"
        response.status(statusCode).send(message)
    }
}
export default  AppController
module.exports = AppController;