import Router from '@koa/router';
import RootController from '../controllers/root';

const router = new Router();
const controller = new RootController;

router.get('root', '/', controller.root);

export default router;
