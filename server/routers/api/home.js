let homePage=require('../../mock/api/home.json');
let homeBanner=require('../../mock/api/homeBanner.json');
module.exports = (router)=> {

	// router.get('/home',(req, res)=> {
	// 	res.json(homePage);
	// });
	router.get('/homeBanner',(req,res)=>{
		res.json(homeBanner)
	})
};