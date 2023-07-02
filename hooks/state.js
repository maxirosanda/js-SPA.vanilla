 export const state = (value) =>{

    const setState = (newValue) => {
      value = newValue
    }
    return [
      value,
      setState
    ]
  }
