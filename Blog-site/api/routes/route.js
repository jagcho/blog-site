const router = require("express").Router();
const { createCategory, getCat } = require("../controllers/categoriesController");
const { createPost, update, deletePost, getPost, getAll } = require("../controllers/postController");
const {createUser,login, Update, Delete, fetch}=require('../controllers/userController')


//---------------------User---------------------------//

//REGISTER
router.post("/user/register", createUser);

//LOGIN
router.post("/user/login",login);

//UPDATE
router.put("/user/:id", Update);

//DELETE
router.delete("/user/:id", Delete);

//GET USER
router.get("/user/:id", fetch);

//--------------------Post---------------------------//

//CREATE POST
router.post("/post/create", createPost);

//UPDATE POST
router.put("/post/:id", update);

//DELETE POST
router.delete("/post/:id", deletePost);

//GET POST
router.get("/post/:id", getPost );


//GET ALL POSTS
router.get("/post", getAll );

//---------------------Category-----------------------//

//CREATE CAT
router.post("/cat/create", createCategory);

//GET CAT
router.get("/cat", getCat);


module.exports = router;
