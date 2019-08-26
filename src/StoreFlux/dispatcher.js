import { Dispatcher } from 'flux';
import * as type from './type'
const dispatcher = new Dispatcher()

// dispatcher.register( callback )

dispatcher.register( ( actions) => {
  switch ( actions.type ) {
    case type.INCRMENT:
        // 用户操作了
        console.log("用户操作了")
      break;
  
    default:
      break;
  }
})

export default dispatcher;
