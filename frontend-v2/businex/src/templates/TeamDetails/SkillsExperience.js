import React from 'react';
import SkillBar from "../../components/SkillBar";
import SkillRadar from "../../components/SkillRadar";
import Experience from "../../components/Experience";

const SkillsExperience = ({farmUnit, coffeData}) => {
    const {experiences} = farmUnit;
    return (
        <div className="member-details-middle sm-top-wt">
            <div className="row mtn-50">
                <div className="col-lg-6">
                    <div className="skill-experience-area mem-achieve-item">
                        <h4>Coffee Features</h4>
                    <div className="skill-bar-wrap mt-40 mt-sm-30">
                        <SkillRadar data={coffeData}/>
                            {/* {
                                skills.map(skill=>(
                                    <SkillBar key={skill.no} title={skill.title} skillPercent={skill.percentage}/>
                                ))
                            } */}
                    </div>
                </div>
            </div>

                <div className="col-lg-6">
                    <div className="my-history-area mem-achieve-item">
                        <h4>Certificates</h4>

                        <div className="history-content-wrap how-we-works-content mt-40 mt-sm-30">
                            {
                                experiences.map(experience=>(
                                    <Experience
                                        key={experience.no}
                                        designation={experience.designation}
                                        icon={experience.icon}
                                        comment={experience.comment}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsExperience;