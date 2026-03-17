import {Router} from "express"
import {analyser} from "../controllers/repo.controller.js"
import {optionalVerifyJWT} from "../middlewares/authentication.middleware.js"
const pub_router = Router()

pub_router.route("/analyse").post(analyser)

export { pub_router }