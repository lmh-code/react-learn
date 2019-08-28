import type from './type';
import dispatcher from './dispatcher';

const actions = {
  createItem (_val) {
    dispatcher.dispatch({
      actionType: type.CREATE,
      data: _val
    })
  },
  deleteItem (_id) {
    dispatcher.dispatch({
      actionType: type.DELETE,
      data: {id: _id}
    })
  }
}

export default actions