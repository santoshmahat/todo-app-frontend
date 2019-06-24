

const intialState = {
  user:'',
  something:""
}

export default (state=intialState, action) => {
  switch(action.type){
    case "user/LOGIN_USER":
      return {...state, user:action.payload }
    default:
      return state;
  }
  
}