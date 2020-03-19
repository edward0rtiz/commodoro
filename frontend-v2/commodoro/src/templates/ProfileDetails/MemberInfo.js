import React from 'react';
const MemberInfo = ({farmData, userName}) => {
    // const {address,phone,email} = farmUnit;
    const {profilePic,farmName,bio,facebook,twitter,linkedin,instagram,address,phone,email} = farmData;
    console.log(profilePic);
    return (
        <div className="member-details-top">
            <div className="row">
                <div className="col-md-5">
                    <div className="member-pic mb-sm-35">
                        <img src={profilePic} alt={farmName}/>
                    </div>
                </div>

                <div className="col-md-7 ml-auto">
                    <div className="member-desc">
                        <h2>{farmName}</h2>
                        <h5>{userName}</h5>
                        <p dangerouslySetInnerHTML={{__html: bio}}/>

                        <div className="member-social-icons mt-25">
                            <a href={`https://facebook.com/${facebook}`} target="_blank" rel="noopener noreferrer" className="facebook"><i className="fa fa-facebook"/></a>
                            <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer" className="twitter"><i className="fa fa-twitter"/></a>
                            <a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noopener noreferrer" className="linkedin"><i className="fa fa-linkedin"/></a>
                            <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer" className="pinterest"><i className="fa fa-instagram"/></a>
                        </div>

                        <div className="contact-info mt-25">
                            <p><strong>Address</strong> <span dangerouslySetInnerHTML={{__html: address}}/></p>
                            <p><strong>Phone</strong> {phone}</p>
                            <p><strong>Email</strong> {email}</p>
                            <p><strong>Web</strong> www.lasmargaritas.com </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            );
}



export default MemberInfo;