import React, { Component } from 'react';
import LoadingButton from "../../components/LoadingButton/index";
import axios from 'axios';
import '../../assets/scss/pages/_Form.scss';


const farmEndPoint = '/api/v1/farms/'

class From extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: 2,
            farmName: '',
            profilePic: null,
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
            farm_product: [
                {
                    id: 1,
                    coffeeName: '',
                    description: '',
                    price: '',
                    variety: '',
                    processing: '',
                    crop_year: '',
                }
            ],
            farm_feature: [
                {
                    id: 1,
                    title: "Fragance",
                    percentage: '',
                },
                {
                    id: 2,
                    title: "Flavor",
                    percentage: '',
                },
                {
                    id: 3,
                    title: "Aftertaste",
                    percentage: '',
                },
                {
                    id: 4,
                    title: "Acidity",
                    percentage: '',
                },
                {
                    id: 5,
                    title: "Body",
                    percentage: '',
                },
                {
                    id: 6,
                    title: "Uniformity",
                    percentage: '',
                },
                {
                    id: 7,
                    title: "Balance",
                    percentage: '',
                },
                {
                    id: 8,
                    title: "Clean cup",
                    percentage: '',
                },
                {
                    id: 9,
                    title: "Sweetness",
                    percentage: '',
                },
                {
                    id: 10,
                    title: "Overall",
                    percentage: '',
                }
            ],
            farm_certificate: [
                {
                    designation: '',
                    comment: '',
                }
            ],
            farm_history: [
                {
                    location: '',
                    milestone: '',
                    duration: '',
                    comment: '',
                }
            ]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeList = this.handleChangeList.bind(this);
        this.appendInfo = this.appendInfo.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleRedirect = res => {
        if( res.status === 201 && window !== 'undefined'){
            window.location.href = '/farm-profile/' + res.data.farmName + '?id=' + res.data.id
        }else {
          // Something went wrong here
        }

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

    handleImageChange = event => {
        this.setState({
          profilePic: event.target.files[0]
        })
      };

    handleChangeList = event => {
        const name = event.target.name;
        const key = name.split(".");
        let value = event.target.value;
        if (key.length === 3) {
            this.setState(prevState => {
                const newState = { ...prevState };
                newState[key[0]][key[2]][key[1]] = parseInt(value);
                return newState;
            });
        } else {
            if (key[1] === "price" || key[1] === "crop_year") {
                value = parseInt(value);
            }
            this.setState(prevState => {
                const newState = { ...prevState };
                newState[key[0]][0][key[1]] = value;
                return newState;
            });
        }
    };

    appendInfo = (name) => {
        this.setState(prevState => {
            const newState = { ...prevState };
            if (name === "farm_certificate") {
                newState[name] = [{
                    designation: '',
                    comment: ''
                }, ...newState[name]]
            } else if (name === "farm_history") {
                newState[name] = [{
                    location: '',
                    milestone: '',
                    duration: '',
                    comment: '',
                }, ...newState[name]]
            }
            return newState;
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.farm_certificate.length > 1) {
            this.state.farm_certificate.shift();
        }
        if (this.state.farm_history.length > 1) {
            this.state.farm_history.shift();
        }
        let form_data = new FormData();
        form_data.append('image', this.state.profilePic, this.state.profilePic.name);
        axios.post('/api/v1/pictures/', form_data, {
                headers: {'content-type': 'multipart/form-data'}    
            }).then(imgRest => {
                this.setState({
                    profilePic: imgRest.data.image
                  })
                console.log('sucess img upload', imgRest.data);
                return axios.post(farmEndPoint, this.state, {
                    headers: {'content-type': 'application/json'}
                })
            }).then(newfarmRes => {
                console.log('sucess farm upload', newfarmRes.data);
                this.handleRedirect(newfarmRes)
            })
            .catch(err => console.log(err));
    };


    render () {
        // console.log(this.state);
        return (
            <div className="contact-form-wrap">
                <form id="contact-form" onSubmit={event => this.handleSubmit(event)}>
                    <div className="row wrapper-forms">
                        {/* -------------- FARM INFO -------------- */}
                        <div className="col-md-8">
                            <h5 className="font-weight-bold">Farm Information</h5>
                            <p>Fill all the fields to create you own farm page.</p>
                        </div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'farmName'} placeholder={'Farm Name *'} value={this.state.farmName} onChange={this.handleChange} required/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="single-input-item">
                                <input type="file"
                                    id={"profilePic"}
                                    accept={"image/png, image/jpeg"}  onChange={this.handleImageChange} required/>
                                <p>Please, attach a picture of your farm</p>

                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'address'} placeholder={'Address *'} value={this.state.address} onChange={this.handleChange} required/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'email'} name={'email'} placeholder={'Email *'} value={this.state.email} onChange={this.handleChange} required />
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'phone'} placeholder={'Phone No *'} value={this.state.phone} onChange={this.handleChange}  required/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'country'} placeholder={'Country *'} value={this.state.country} onChange={this.handleChange} required />
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'region'} placeholder={'Region *'} value={this.state.region} onChange={this.handleChange} required />
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-message" >
                                <label>
                                    <textarea name={'bio'} cols="60" rows="7" placeholder={'Describe Your Farm *'} value={this.state.bio} onChange={this.handleChange} required />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row wrapper-forms">
                        {/* -------------- SOCIAL MEDIA -------------- */}
                        <div className="col-md-8"><h5 className="font-weight-bold">Social Media Information</h5></div>
                        <div className="col-12">
                            <p>Let people conect with your amaizing coffee.</p>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'facebook'} placeholder={'Facebook link'} value={this.state.facebook} onChange={this.handleChange} required/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'twitter'} placeholder={'Twitter link'} value={this.state.twitter} onChange={this.handleChange} required />
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'linkedin'} placeholder={'Linked link'} value={this.state.linkedin} onChange={this.handleChange} required />
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'instagram'} placeholder={'Instagram link'} value={this.state.instagram} onChange={this.handleChange} required />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row wrapper-forms">
                        {/* -------------- COFFEE INFO -------------- */}
                        <div className="col-md-8"><h5 className="font-weight-bold">Coffee Information</h5></div>
                        <div className="col-12">
                            <p>More information gives your clients the oportunity to know your product.</p>
                        </div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                    <input type={'textarea'} name={'farm_product.coffeeName'} placeholder={'Coffee Name *'} value={this.state.farm_product[0].coffeeName} onChange={this.handleChangeList} required />
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'farm_product.description'} placeholder={'Describe your coffee in less than 10 words *'} value={this.state.farm_product[0].description} onChange={this.handleChangeList} required/>
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'farm_product.variety'} placeholder={'What is the Variety of your Coffee *'} value={this.state.farm_product[0].variety} onChange={this.handleChangeList} required />
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'farm_product.processing'} placeholder={'What is the Process of your Coffee *'} value={this.state.farm_product[0].processing} onChange={this.handleChangeList} required />
                                </label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'farm_product.price'} placeholder={'Kg Price *'} value={this.state.farm_product[0].price} onChange={this.handleChangeList} required />
                                </label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'farm_product.crop_year'} placeholder={'What is the crop year? *'} value={this.state.farm_product[0].crop_year} onChange={this.handleChangeList} required />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row wrapper-forms">
                        {/* -------------- COFFEE FEATURES -------------- */}
                        <div className="col-md-8"><h5 className="font-weight-bold">Coffee Features</h5></div>
                        <div className="col-12">
                            <p>Describe your coffee, let us and your clients know what type of coffee you offer.</p>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'farm_feature.percentage.0'} placeholder={'Score your Fragrance'} value={this.state.farm_feature[0].percentage}  onChange={this.handleChangeList} required />
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'farm_feature.percentage.1'} placeholder={'Score your Flavor'} value={this.state.farm_feature[1].percentage} onChange={this.handleChangeList} required />
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'farm_feature.percentage.2'} placeholder={'Score your Aftertaste'} value={this.state.farm_feature[2].percentage} onChange={this.handleChangeList} required />
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'farm_feature.percentage.3'} placeholder={'Score your Acidity'} value={this.state.farm_feature[3].percentage} onChange={this.handleChangeList} required />
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'farm_feature.percentage.4'} placeholder={'Score your Body'} value={this.state.farm_feature[4].percentage} onChange={this.handleChangeList} required />
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'farm_feature.percentage.5'} placeholder={'Score your Uniformity'} value={this.state.farm_feature[5].percentage} onChange={this.handleChangeList} required />
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'farm_feature.percentage.6'} placeholder={'Score your Balance'} value={this.state.farm_feature[6].percentage} onChange={this.handleChangeList} required/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'farm_feature.percentage.7'} placeholder={'Score your Clean cup'} value={this.state.farm_feature[7].percentage} onChange={this.handleChangeList} required/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'farm_feature.percentage.8'} placeholder={'Score your Sweetness'} value={this.state.farm_feature[8].percentage} onChange={this.handleChangeList} required/>
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'farm_feature.percentage.9'} placeholder={'Score your Overall'} value={this.state.farm_feature[9].percentage} onChange={this.handleChangeList} required />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row wrapper-forms">
                        {/* -------------- CERT INFO -------------- */}
                        <div className="col-md-8"><h5 className="font-weight-bold">Certificates Information</h5></div>
                        <div className="col-12">
                            <p>Certificates will make your product trustable.</p>
                        </div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                <   input type={'textarea'} name={'farm_certificate.designation'} placeholder={'Name your certificate'} value={this.state.farm_certificate[0].designation} onChange={this.handleChangeList} required />
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                    <input type={'textarea'} name={'farm_certificate.comment'} placeholder={'Describe your certificate'} value={this.state.farm_certificate[0].comment} onChange={this.handleChangeList} required />
                                </label>
                            </div>
                        </div>
                        <div><LoadingButton name={'farm_certificate'} appendInfo={this.appendInfo}/></div>
                    </div>
                    <div className="row wrapper-forms">
                        {/* -------------- HISTORY -------------- */}
                        <div className="col-md-8"><h5 className="font-weight-bold">Farms History</h5></div>
                        <div className="col-12">
                            <p>Share your story ang engage with your clients.</p>
                        </div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                <   input type={'textarea'} name={'farm_history.location'} placeholder={'Location'} value={this.state.farm_history[0].location} onChange={this.handleChangeList} required />
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'farm_history.milestone'} placeholder={'Milestone i.e "The Farm was created'} value={this.state.farm_history[0].milestone} onChange={this.handleChangeList} required/>
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'farm_history.duration'} placeholder={'Date (MM - YY)'} value={this.state.farm_history[0].duration} onChange={this.handleChangeList} required />
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="single-input-item">
                                <label>
                                <input type={'textarea'} name={'farm_history.comment'} placeholder={'Description'} value={this.state.farm_history[0].comment} onChange={this.handleChangeList} required/>
                                </label>
                            </div>
                        </div>
                        <div><LoadingButton name={'farm_history'} appendInfo={this.appendInfo}/></div>
                        <div className="col-12">
                            <button type="submit" className={"btn-outline btn-outline"}>Save your changes</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};

export default From;