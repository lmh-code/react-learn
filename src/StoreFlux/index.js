const EventEmitter = require( 'events' ).EventEmitter
const store = {
  ...EventEmitter.prototype,
  state: {
    count: 0
  },
  getState () {
    return this.state
  }
}
export default store 
