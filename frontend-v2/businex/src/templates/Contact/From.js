import React, { Component } from 'react';
import FormInput from "../../components/UI/Input";
import LoadingButton from "../../components/LoadingButton/index";
import axios from 'axios';


const farmEndPoint = '/api/v1/farms/'

class From extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: 2,
            farmName: '',
            profilePic: 'http://127.0.0.1:3000/media/farms/1.jfif',
            bio: '',
            address: '',
            country: '',
            region: '',
            phone: '',
            email: '',
            facebook: '',
            twitter: '',
            linkedin: '',
            instagram: '',
            farm_product: [{
                coffeeName: '',
                description: '',
                price: '',
                variety: '',
                processing: '',
                crop_year: '',
            }],
            farm_feature: [{
                    id: 1,
                    title: "Fragance",
                    percentage: 0,
                },
                {
                    id: 2,
                    title: "Flavor",
                    percentage: 0,
                },
                {
                    id: 3,
                    title: "Aftertaste",
                    percentage: 0,
                },
                {
                    id: 4,
                    title: "Acidity",
                    percentage: 0,
                },
                {
                    id: 5,
                    title: "Body",
                    percentage: 0,
                },
                {
                    id: 6,
                    title: "Uniformity",
                    percentage: 0,
                },
                {
                    id: 7,
                    title: "Balance",
                    percentage: 0,
                },
                {
                    id: 8,
                    title: "Clean cup",
                    percentage: 0,
                },
                {
                    id: 9,
                    title: "Sweetnes",
                    percentage: 0,
                },
                {
                    id: 10,
                    title: "Overall",
                    percentage: 0,
                }
            ],
            farm_certificate: [{
                    designation: 0,
                    comment: 0,
            }],
            farm_history: [{
                    location: 0,
                    milestone: 0,
                    duration: 0,
                    comment: 0,
            }],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(prevState => {
            const newState = { ...prevState };
            newState[name] = value;
            return newState;
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log('this state', this.From.state);
        const form_data = new FormData ();

        form_data.append('newState', this.Form.newState);


            axios.post(farmEndPoint, form_data, {
                    headers: {
                        Accept: 'application/json',
                        'content-type': 'multipart/form-data',
                    }
                })
                    .then(res => {
                        console.log('sucess', res.data);
                    })
                    .catch(err => console.log(err))
    };

    render () {
        return (
            <div className="contact-form-wrap">
                <form id="contact-form">
                    <div className="row">
                        <div className="col-md-8"><h5 class="font-weight-bold">Farm Information</h5></div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'farmName'} placeholder={'Farm Name *'} value={this.state.farmName} onChange={this.handleChange} onSubmit={this.handleSubmit} required/>
                                </label>
                            </div>

                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'address'} placeholder={'Address *'} value={this.state.address} onChange={this.handleChange} onSubmit={this.handleSubmit} required/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'email'} name={'email'} placeholder={'Email *'} value={this.state.email} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'phone'} placeholder={'Phone No *'} value={this.state.phone} onChange={this.handleChange} onSubmit={this.handleSubmit} required/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'country'} placeholder={'Country *'} value={this.state.country} onChange={this.handleChange} onSubmit={this.handleSubmit} required/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'region'} placeholder={'Region *'} value={this.state.region} onChange={this.handleChange} onSubmit={this.handleSubmit} required/>
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-message" >
                                <label>
                                <textarea name={'bio'} cols="30" rows="7" placeholder={'Describe Your Farm *'} value={this.state.bio} onChange={this.handleChange} onSubmit={this.handleSubmit} required/>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-8"><h5 class="font-weight-bold">Social Media Information</h5></div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'facebook'} placeholder={'Facebook link'} value={this.state.facebook} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'twitter'} placeholder={'Twitter link'} value={this.state.twitter} onChange={this.handleChange}  onSubmit={this.handleSubmit}/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'linkedin'} placeholder={'Linked link'} value={this.state.linkedin} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'instagram'} placeholder={'Instagram link'} value={this.state.instagram} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-8"><h5 class="font-weight-bold">Coffee Information</h5></div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'coffeeName'} placeholder={'Coffee Name *'} value={this.state.coffeeName} onChange={this.handleChange} onSubmit={this.handleSubmit} required/>
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'description'} placeholder={'Describe your coffee in less than 10 words *'} value={this.state.description} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'price'} placeholder={'Price *'} value={this.state.price} onChange={this.handleChange} onSubmit={this.handleSubmit} required/>
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'variety'} placeholder={'What is the Variety of your Coffee *'} value={this.state.variety} onChange={this.handleChange} onSubmit={this.handleSubmit} required/>
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'processing'} placeholder={'What is the Process of your Coffee *'} value={this.state.processing} onChange={this.handleChange} onSubmit={this.handleSubmit} required/>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-8"><h5 class="font-weight-bold">Coffee Features</h5></div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'percentage'} placeholder={'Score your Fragrance'} value={this.state.farm_feature[0].percentage}  onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'percentage'} placeholder={'Score your Flavor'} value={this.state.farm_feature[1].percentage} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'percentage'} placeholder={'Score your Aftertaste'} value={this.state.farm_feature[2].percentage} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'percentage'} placeholder={'Score your Acidity'} value={this.state.farm_feature[3].percentage} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'percentage'} placeholder={'Score your Body'} value={this.state.farm_feature[4].percentage} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'percentage'} placeholder={'Score your Uniformity'} value={this.state.farm_feature[5].percentage} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'percentage'} placeholder={'Score your Balance'} value={this.state.farm_feature[6].percentage} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'percentage'} placeholder={'Score your Clean cup'} value={this.state.farm_feature[7].percentage} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'percentage'} placeholder={'Score your Sweetness'} value={this.state.farm_feature[8].percentage} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'percentage'} placeholder={'Score your Overall'} value={this.state.farm_feature[9].percentage} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-8"><h5 class="font-weight-bold">Certificates Information</h5></div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'designation'} placeholder={'Name your certificate'} value={this.state.farm_certificate[0].designation} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'comment'} placeholder={'Describe your certificate'} value={this.state.farm_certificate[0].comment} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                                </label>
                            </div>
                        </div>
                        <div><LoadingButton/></div>
                        <div className="col-md-8"><h5 class="font-weight-bold">Farms History</h5></div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'location'} placeholder={'Location'} value={this.state.farm_history[0].location} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'milestone'} placeholder={'Milestone i.e "The Farm was created'} value={this.state.farm_history[0].milestone} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'duration'} placeholder={'Date (MM - YY'} value={this.state.farm_history[0].duration} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'comment'} placeholder={'Description'} value={this.state.farm_history[0].comment} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                                </label>
                            </div>
                        </div>
                        <div><LoadingButton/></div>
                        <div className="col-12">
                            <FormInput
                                tag={'button'}
                                classes={'btn-outline'}
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};

export default From;