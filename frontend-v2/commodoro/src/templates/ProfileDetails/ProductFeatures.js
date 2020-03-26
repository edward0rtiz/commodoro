import React from 'react';
import SkillRadar from "../../components/SkillRadar";
import Certificate from "../../components/Certificate";

const ProductFeatures = ({farmData, coffeData, _isMounted}) => {
    const {farm_certificate, farm_feature} = farmData;

    // function get the info from the json and translate it for the dinamic skillradar component
    const handelCoffeData = (farm_feature) => {
        return farm_feature.map((feature) => {
            const singleObj = {};
            singleObj['characteristic'] = feature.title;
            singleObj['level'] = feature.percentage;
            return singleObj;
        })
    }

    let skill;
    if (_isMounted) {
        skill = <SkillRadar data={handelCoffeData(farm_feature)}/>
    } else {
        skill = <React.Fragment/>
    }

    return (
        <div className="member-details-middle sm-top-wt">
            <div className="row mtn-50">
                <div className="col-lg-6">
                    <div className="skill-experience-area mem-achieve-item">
                        <h4>Coffee Features</h4>
                        <div className="skill-bar-wrap">
                            {skill}
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="my-history-area mem-achieve-item">
                        <h4>Certificates</h4>

                        <div className="history-content-wrap how-we-works-content mt-40 mt-sm-30">
                            {(()=>{
                                if(_isMounted){
                                    return farm_certificate.map(certificate=>(
                                        <Certificate
                                            designation={certificate.designation}
                                            icon={"team/details/date-1.jfif"}
                                            comment={certificate.comment}
                                        />
                                    ))
                                }
                            })()
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductFeatures;
