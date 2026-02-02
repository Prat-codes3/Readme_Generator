import {Router} from "express"
import analyser from "../controllers/repo.controller.js"
const router = Router()

router.route("/analyse-repo").post(optionalverifyJWT,analyser)