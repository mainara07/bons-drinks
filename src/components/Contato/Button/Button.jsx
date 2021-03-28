import React from 'react'



function Button({children,style, onClick}) {
    
    return(
        <button  onClick={()=>{
          onClick()}} className={style}>{children}</button>
      //children = tudo que podemos colocar dentro do botão. é uma tag que tem 'recheio'
    )
}

export default Button



// return (
//   <button className= {estilo} onClick ={() => {
//     noClick ()
//   }}> 
// {titulo}
//   </button>
// )