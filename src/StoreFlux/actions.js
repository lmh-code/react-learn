import type from './type';
import dispatcher from './dispatcher';

const actions = {
  addCount () {
    dispatcher.dispatch({
      actionType: type.ADDCOUNT
    })
  },
  minCount () {
    dispatcher.dispatch({
      actionType: type.MINCOUNT
    })
  },
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
  },
  changeItemState (_idx) {
    dispatcher.dispatch({
      actionType: type.CHANGESTATE,
      data: {_idx: _idx}
    })
  },
  doChooseHandel () {
    dispatcher.dispatch({
      actionType: type.CHOOSEALL
    })
  }
}

export default actions