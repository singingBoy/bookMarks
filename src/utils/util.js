'use strict'

/*随即颜色*/
export const randomColor=()=>{
  return {backgroundColor: `#${Math.floor(Math.random()*0xffffff).toString(16)}`};
}
