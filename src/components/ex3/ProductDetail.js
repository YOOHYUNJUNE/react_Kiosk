import React from "react";

// 오른쪽에 출력될 데이터
function ProductDetail ({cart, removeMenu}) {


    const style = {
        // Detail style
        Detail : {
            width : 200,
            height : 200,
            display : 'inline-block',
            border : '1px solid black',
            textAlign : 'center',
            
        },

        Img : {
            width: '100%',
            height: '100%',
        }
    }


    return(
        <div >
            <ul >
                {
                    cart.map((menu, index) => {
                        // 장바구니 이미지

                        // return <li key={index} style={{...style.Detail, backgroundImage:`url(${menu.img})`}}>
                        return <li key={index} style={{...style.Detail}}>

                            <img src={menu.img} style={style.Img}></img>

                            <p>
                            {menu.name}
                            <button onClick={() => removeMenu(index)}>X</button>
                            </p>
                            - {menu.quantity}개 -
                            
                        </li>
                    })
                }

            </ul>
        </div>
    )
}


export default ProductDetail