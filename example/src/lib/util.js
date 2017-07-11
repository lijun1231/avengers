/*eslint-disable*/
import { SERVER } from '../service/service-config.js';
export default {
    getOriginUrl (p) {
        return `${SERVER}${p}`;
    },
}
