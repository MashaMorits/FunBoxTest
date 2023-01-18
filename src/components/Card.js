import { useState } from "react";

function Card(props) {

    const [hover, setHover] = useState(false);
    const [clicked, setClicked] = useState(false);

    let cls = ['card', hover ? 'hover' : '', 
                clicked ? 'clicked' : '',
                props.disabled ? 'disabled' : ''].join(' ')

 
    let desc

        if(props.disabled || (props.disabled && clicked)) {
            desc = `Печалька, с ${props.topping} закончился`
        } else if(clicked && !props.disabled) {
            desc = props.description.clicked 
        } 


    return ( 
       
        <div className={cls} onMouseLeave={() => setHover(true)}>
          <div className='card__wrap' onClick={() => setClicked(prevState => !prevState)}>
            <div className='card__wrap-container'>
                <div className='card__wrap-container-content'>
                    <p className="name">{clicked ? 'Котэ не одобряет?' : 'Сказочное заморское яство'}</p>
                    <h3>Нямушка</h3>
                    <h4>с {props.topping}</h4>
                    <p>{props.portion.numb.length ? <b>{props.portion.numb}</b> : ''} {props.portion.text}</p>
                    <p><b>{props.gift.numb}</b> {props.gift.text}</p>
                    { props.gift.text && <p>{props.text}</p> } 
                </div>
                <div>

                </div>
                
                <div className='weight'><p>{props.weight}</p><span>кг</span></div>
            </div>
          </div>
    
            { desc
                ? <div className='card__decription'>{desc}</div>  
                : <div className='card__decription'>Чего сидишь? Порадуй котэ, <b onClick={() => setClicked(prevState => !prevState)}>купи.</b></div>
            }
          
        </div>
     );
}

export default Card;