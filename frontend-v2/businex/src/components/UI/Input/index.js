import React from 'react';

const FormInput = ({tag,type,name,placeholder,classes, value, handleChange}) => {
    return (
        <div className="single-input-item">
            <label>
                {(()=>{
                    if(tag === 'inputrequired'){
                        return <input type={type} name={name} placeholder={placeholder} className={classes}  value={value} onChange={handleChange} required />
                    }else if(tag === 'input'){
                        return <input type={type} name={name} placeholder={placeholder} className={classes} value={value} onChange={handleChange} />
                    }else if(tag === 'textarea'){
                        return  <textarea name={name} cols="30" rows="7" placeholder={placeholder} className={classes} value={value} onChange={handleChange} required/>
                    }else if(tag === 'button'){
                        return <button className={`btn-outline ${classes}`}>Save your changes</button>
                    }
                })()}
            </label>
        </div>
    );
};

export default FormInput;