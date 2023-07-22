import { InternalServerError } from '@exceptions/InternalServerError';
import { InvalidIdExeption } from '@exceptions/invalidId.exception';
import NotFoundException from '@exceptions/notFound.exception';
import { ResourceConflictException } from '@exceptions/ResourceConflictException';
import { Controller } from '@interfaces/controller.interface';
import { AuthenticationMiddleware } from '@middlewares/authentication.middleware';
import validationMiddleware from '@middlewares/validation.middleware';
import { getParsedPaginationData, translateMessage } from '@utils/functions';
import * as express from 'express';
import httpStatus from 'http-status';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateCategoryDTO } from './dto/update-category.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { categoryModel } from './models/category.model';
import { productModel } from './models/product.model';

export class ProductController extends Controller {
  private productRepository = productModel;
  private categoryRepository = categoryModel;
  constructor() {
    super();
    this.route = '/v1/product';
    this.router = express.Router();
    this.bindMethods();
    this.initializeRoutes();
  }

  private bindMethods() {
    this.createProduct = this.createProduct.bind(this);
    this.createCategory = this.createCategory.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }

  initializeRoutes() {
    this.router
      .use(AuthenticationMiddleware.loginRequired)
      .post('/', validationMiddleware(CreateProductDTO), this.createProduct)
      .post(
        '/category',
        validationMiddleware(CreateCategoryDTO),
        this.createCategory,
      )
      .get(`/`, this.getProducts)
      .get(`/:id`, this.getProduct)
      .put(`/:id`, validationMiddleware(UpdateProductDTO), this.updateProduct)
      .put(
        `/category/:id`,
        validationMiddleware(UpdateCategoryDTO),
        this.updateCategory,
      )
      .delete(`/:id`, this.deleteProduct);
  }

  private createCategory(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
  ) {
    return this.categoryRepository
      .create(request.body)
      .then((res) => response.json(res))
      .catch((error) => {
        if (error.code === 11000) {
          next(
            new ResourceConflictException(
              translateMessage('Category with this name already exists'),
            ),
          );
        }
        next(error);
      });
  }

  private updateCategory(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
  ) {
    return this.categoryRepository
      .findOneAndUpdate({ _id: request.params.id }, request.body, {
        new: true,
      })
      .then((result) => {
        return response.json({ result });
      })
      .catch((error) => {
        if (error.name === 'CastError') {
          // Handle ID cast error
          next(new InvalidIdExeption());
        } else {
          console.error(error);
          next(new InternalServerError());
        }
      });
  }

  private createProduct(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
  ) {
    return this.productRepository
      .create(request.body)
      .then((res) => response.json(res))
      .catch((error) => next(error));
  }

  private async getProducts(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
  ) {
    try {
      const { page, rowsPerPage, searchKeywords } = getParsedPaginationData(
        request.query,
      );
      const filter =
        searchKeywords.trim().length === 0
          ? {}
          : { $text: { $search: searchKeywords } };

      const totalItems = await this.productRepository.find(filter).count();
      const totalPages = Math.ceil(totalItems / rowsPerPage);
      return this.productRepository
        .find(filter)
        .skip((page - 1) * rowsPerPage)
        .limit(rowsPerPage)
        .lean()
        .then((res) =>
          response.json({
            pagination: {
              count: res.length,
              currentPage: page,
              nextPage: page + 1 > totalPages ? null : page + 1,
              totalItems,
              totalPages,
              rowsPerPage,
            },
            items: res,
            message: translateMessage('Success'),
          }),
        );
    } catch (error) {
      next(error);
    }
  }

  private async getProduct(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
  ) {
    try {
      const id = request.params.id;
      const product = await this.productRepository.findById(id).lean();
      if (product) {
        return response.json(product);
      }
      next(
        new NotFoundException(
          translateMessage('The product you are looking for is not found.'),
        ),
      );
    } catch (error) {
      if (error.name === 'CastError') {
        // Handle ID cast error
        next(new InvalidIdExeption());
      } else {
        next(new InternalServerError());
        // Handle other errors
        console.error(error);
      }
    }
  }

  private updateProduct(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
  ) {
    return this.productRepository
      .findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
      .then((result) => {
        return response.json({ result });
      })
      .catch((error) => {
        if (error.name === 'CastError') {
          // Handle ID cast error
          next(new InvalidIdExeption());
        } else {
          next(new InternalServerError());
          // Handle other errors
          console.error(error);
        }
      });
  }

  private async deleteProduct(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
  ) {
    try {
      const result = await this.productRepository.findByIdAndDelete(
        request.params.id,
      );
      if (!result) {
        return next(
          new NotFoundException(`Product with ${request.params.id} not found.`),
        );
      }
      return response.status(httpStatus.OK).json({
        sucess: true,
        message: `Product deleted with ${request.params.id}`,
      });
    } catch (error) {
      if (error.name === 'CastError') {
        // Handle ID cast error
        next(new InvalidIdExeption());
      } else {
        next(new InternalServerError());
        // Handle other errors
        console.error(error);
      }
    }
  }
}
