const Product =require('../models/product');


//GET// route that handels/conttrolls what is to be displayed
exports.getAddProduct = (req, res, next) => {
	res.render('add-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
		formsCSS: true,
		productCSS: true,
		activeAddProduct: true
	});
};

//POST// route that handels/conttrolls what is to be sent by the client
exports.postAddProduct = (req, res, next) => {
	const product = new Product(req.body.title);
	//calls the save functtion in the Product class in controler.js
	product.save();
	res.redirect('/');
};

//GET// route that handels/conttrolls what is to be displayed
exports.getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render('shop', {
			prods: products,
			pageTitle: 'Shop',
			path: '/',
			hasProducts: products.length > 0,
			activeShop: true,
			productCSS: true
		});
	});

};