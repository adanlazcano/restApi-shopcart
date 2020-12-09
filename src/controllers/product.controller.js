import Product from '../models/Product';
import * as getLibs from '../libs/getLibsProduct';

module.exports = {

    getProducts: async(req, res) => {
        try {
            const { size, page, name } = req.query;

            const { limit, offset } = getLibs.getPagination(size, page);
            const condition = getLibs.search(req.query, name);
            // console.log(condition);
            // const products = await Product.find();
            const products = await Product.paginate(condition, { limit, offset });
            res.json(products);
        } catch (error) {
            res.status(500).json({
                message: error.mesage || "Something wrong"
            });
        }
    },
    saveProduct: async(req, res) => {

        if (!req.body.name) {
            return res.status(400).json({ message: 'name can be empty' });
        }
        try {
            const foundProduct = await Product.findOne({ name: req.body.name });
            if (foundProduct)
                return res.status(303).json({ message: "This Product already exists" });
            const newProduct = new Product({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                done: req.body.done ? req.body.done : false
            });
            const productSaved = await newProduct.save();
            res.json(productSaved);
        } catch (error) {
            res.status(500).json({ message: error.message || 'Something goes wrong creating Product' });
        }
    },
    findAllProductsDone: async(req, res) => {
        try {
            const findAllDone = await Product.find({ done: true });
            res.json(findAllDone);
        } catch (error) {
            res.status(303).json({ message: error.message || "Something Wrong" });
        }
    },
    getOneProduct: async(req, res) => {

        try {
            const { id } = req.params;
            const findProduct = await Product.findById(id);
            if (!findProduct) {
                return res.status(404).json({ message: "Product doesnt exist" });
            }
            res.json(findProduct);
            // throw new Error('my error'); throw an error
        } catch (error) {
            res.status(500).json({ message: error.message || 'Product Not found' }) //throw an error instead error.message;
        }
    },
    updateProduct: async(req, res) => {
        try {
            const productUpdated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (productUpdated) {
                res.json(productUpdated);
            }
        } catch (error) {
            res.json({ message: "Product not found" });
        }
    },
    deleteProduct: async(req, res) => {

        const { id } = req.params;
        try {
            const productDelete = await Product.findByIdAndDelete(req.params.id);
            if (productDelete) {
                res.json({ message: `Product with id ${id} deleted` });
            }
        } catch (error) {
            res.json({ message: 'Not found ' + req.params.id });
        }
    }
}

// module.exports = productController;