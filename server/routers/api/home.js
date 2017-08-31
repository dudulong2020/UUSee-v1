let homeBanner=require('../../mock/api/homeBanner.json');
let homeTypes=require('../../mock/api/types.json');
let homeMain=require('../../mock/api/home.json');
module.exports = (router)=> {

	router.get('/homeBanner',(req,res)=>{
		res.json(homeBanner)
	});
	router.get('/types',(req,res)=>{
		res.json(homeTypes)
	});
	router.get('/homeMain',(req,res)=>{
		res.json(homeMain)
	})
};