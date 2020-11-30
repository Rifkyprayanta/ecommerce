import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getOrderbyId,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
// THIS IS NEED Controller

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(getOrderbyId);
router.route("/:id/pay").put(protect, updateOrderToPaid);

export default router;
