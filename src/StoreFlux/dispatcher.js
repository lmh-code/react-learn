import { Dispatcher } from 'flux';
import type from './type'
import store from './index'
const dispatcher = new Dispatcher()

dispatcher.register((payload) => {
  let actionType = payload.actionType
  let data = payload.data
  switch (actionType) {
    case type.CREATE:
      store.createItem(data)
      store.emit(type.CHANGE_EVENT);
    break;
    case type.DELETE:
      store.deleteItem(data.id)
      store.emit(type.CHANGE_EVENT);
    break;
    case type.ADDCOUNT:
      store.addCount()
      store.emit(type.CHANGE_EVENT);
    break;
    case type.MINCOUNT:
      store.minCount()
      store.emit(type.CHANGE_EVENT);
    break;
    case type.CHANGESTATE:
      store.changeState(data._idx)
      store.emit(type.CHANGE_EVENT);
    break;
    case type.CHOOSEALL:
      store.doChooseHandel()
      store.emit(type.CHANGE_EVENT);
    break;
    
    default: 
      console.log("11111:")
    break;
  }  
})

export default dispatcher;
