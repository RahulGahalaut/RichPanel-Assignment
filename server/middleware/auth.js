import Jwt from "jsonwebtoken";

//define authentication function
const auth = function (req, res, next) {
    try {
        //extract token from Authorization header
        const token = req.headers.authorization.replace("Bearer ", "");

        //decode token
        const decodedData = Jwt.verify(token, process.env.JWT_SECRET);

        //atach decoded data with request object
        req.user = decodedData;
        next();
    }
    //Verfification Failed
    catch (err) {
        console.error(err);
        res.status(403).json({ message: "Invalid token!!" });
    }

}
//export authentication function
export default auth;