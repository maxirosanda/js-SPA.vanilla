 export const state = (value) =>{

    const getState = () => value
    const setState = (newValue) => {
      value = newValue
    }
    return [
      getState,
      setState
    ]
  }
