import { setupWorker } from "msw/browser";
import { hanlers } from "./hanlers";
const worker = setupWorker(...hanlers);
export default worker;
