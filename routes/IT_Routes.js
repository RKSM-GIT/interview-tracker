const { Router } = require("express");
const router = Router();
const authController = require("../controllers/authController");
const mainController = require("../controllers/mainController");
const prepController = require("../controllers/prepController");
const adminController = require("../controllers/adminController");
const expController = require("../controllers/expController");
const { requireAuth, checkUser, checkAdmin } = require("../middleware/authMiddleware");
const upload = require("../middleware/multerMiddleware");
const provideUsers = require("../middleware/adminMiddleware");


//main routes
router.get("*", checkUser);
router.get("/", mainController.index_get);
router.get("/contact",mainController.contact_get);
router.get("/404",mainController.get_404);

//Prep Routes
router.get("/Interview-Prep", requireAuth, prepController.prep_get);
router.get("/Interview-Prep/:topic", requireAuth, prepController.question_get);
router.post("/Interview-Prep", prepController.question_post);

//Admin routes
router.get("/admin",requireAuth,checkAdmin, adminController.admin_get);
router.get("/add",requireAuth,checkAdmin,provideUsers, adminController.add_get);
router.post("/add", adminController.add_post);
router.get("/remove",requireAuth,checkAdmin,provideUsers, adminController.remove_get);
router.post("/remove", adminController.remove_post);
router.get("/approve_que",requireAuth,checkAdmin, adminController.appr_que_get);
router.post("/approve_que",adminController.approve_que_post);
router.post("/reject_que",adminController.reject_que_post);
router.get("/approve_exp",requireAuth,checkAdmin,provideUsers, adminController.appr_exp_get);
router.post("/approve_exp", adminController.appr_exp_post);
router.get("/na",requireAuth, adminController.notAdmin_get);

//Interview Experience routes
router.get("/interview-exp",expController.exp_get);
router.post("/interview-exp",expController.exp_post);
router.get("/interview-exp/:company",provideUsers,expController.expInner_get);

//Auth routes
router.get("/signup", authController.signup_get);
router.post("/signup", authController.signup_post);
router.post("/signupIMG", upload.single('profile'), authController.signupIMG_post);
router.get("/login", authController.login_get);
router.post("/login", authController.login_post);
router.get("/logout", authController.logout_get);

module.exports = router;
