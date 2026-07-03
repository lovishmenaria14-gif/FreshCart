import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
    try {
        console.log("Cookies:", req.cookies);

        const token = req.cookies.token;
        console.log("Token:", token);
        console.log("Type:", typeof token);
       console.log("========== AUTH ==========");
console.log("URL:", req.originalUrl);
console.log("Cookies:", req.cookies);
console.log("Headers Cookie:", req.headers.cookie);

        if (!token || typeof token !== "string") {
            return res.status(401).json({
                message: "Invalid or missing token"
            });
        }

        const decodeToken = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = decodeToken.userId;
        next();
    } catch (error) {
        console.error("isAuth Error:", error);
        return res.status(401).json({
            message: error.message
        });
    }
};

export default isAuth;