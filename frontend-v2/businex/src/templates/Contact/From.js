import React from 'react';
import FormInput from "../../components/UI/Input";
import LoadingButton from "../../components/LoadingButton/index";

const From = () => {
    return (
        <div className="contact-form-wrap">
            <form id="contact-form">
                <div className="row">
                    <div className="col-md-8"><h5 class="font-weight-bold">Personal Information</h5></div>
                    <div className="col-sm-6">
                        <FormInput
                            tag={'inputrequired'}
                            type={'text'}
                            name={'first_name'}
                            placeholder={'First Name *'}
                        />
                    </div>
                    <div className="col-sm-6">
                        <FormInput
                            tag={'inputrequired'}
                            type={'text'}
                            name={'last_name'}
                            placeholder={'Last Name *'}
                        />
                    </div>
                    <div className="col-sm-6">
                        <FormInput
                            tag={'inputrequired'}
                            type={'address'}
                            name={'address'}
                            placeholder={'Address *'}
                        />
                    </div>
                    <div className="col-sm-6">
                        <FormInput
                            tag={'input'}
                            type={'email'}
                            name={'email'}
                            placeholder={'Email '}
                        />
                    </div>
                    <div className="col-sm-6">
                        <FormInput
                            tag={'inputrequired'}
                            type={'text'}
                            name={'phone'}
                            placeholder={'Phone No *'}
                        />
                    </div>
                    <div className="col-sm-6">
                        <FormInput
                            tag={'inputrequired'}
                            type={'text'}
                            name={'country'}
                            placeholder={'Country *'}
                        />
                    </div>
                    <div className="col-sm-6">
                        <FormInput
                            tag={'inputrequired'}
                            type={'text'}
                            name={'region'}
                            placeholder={'Region *'}
                        />
                    </div>
                    <div className="col-md-8"><h5 class="font-weight-bold">Social Media Information</h5></div>
                    <div className="col-sm-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'facebook'}
                            placeholder={'Facebook username '}
                        />
                    </div>
                    <div className="col-sm-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'twitter'}
                            placeholder={'Twitter username '}
                        />
                    </div>
                    <div className="col-sm-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'linkedIn'}
                            placeholder={'LinkedIn username '}
                        />
                    </div>
                    <div className="col-sm-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'instagram'}
                            placeholder={'Instagram username '}
                        />
                    </div>
                    <div className="col-md-8"><h5 class="font-weight-bold">Farm Information</h5></div>
                    <div className="col-12">
                        <FormInput
                            tag={'inputrequired'}
                            type={'text'}
                            name={'farmName'}
                            placeholder={'Farm Name *'}
                        />
                    </div>
                    <div className="col-12">
                        <FormInput
                            tag={'inputrequired'}
                            name={'bio'}
                            placeholder={'Describe Your Farm *'}
                        />
                        <div className="form-message"/>
                    </div>
                    <div className="col-md-8"><h5 class="font-weight-bold">Coffee Information</h5></div>
                    <div className="col-12">
                        <FormInput
                            tag={'inputrequired'}
                            type={'text'}
                            name={'coffeeName'}
                            placeholder={'Coffee Name *'}
                        />
                    </div>
                    <div className="col-12">
                        <FormInput
                            tag={'input'}
                            type={'textarea'}
                            name={'description'}
                            placeholder={'Describe your coffee in less than 10 words '}
                        />
                    </div>
                    <div className="col-12">
                        <FormInput
                            tag={'inputrequired'}
                            type={'text'}
                            name={'price'}
                            placeholder={'Price *'}
                        />
                    </div>
                    <div className="col-12">
                        <FormInput
                            tag={'inputrequired'}
                            type={'text'}
                            name={'variety'}
                            placeholder={'What is the Variety of your Coffee? *'}
                        />
                    </div>
                    <div className="col-12">
                        <FormInput
                            tag={'inputrequired'}
                            type={'text'}
                            name={'processing'}
                            placeholder={'What is the Process of your Coffee? *'}
                        />
                    </div>
                    <div className="col-md-8"><h5 class="font-weight-bold">Coffee Features</h5></div>

                    <div className="col-sm-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'percentage'}
                            placeholder={'Score your Fragance '}
                        />
                    </div>
                    <div className="col-sm-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'percentage'}
                            placeholder={'Score your Flavor '}
                        />
                    </div>
                    <div className="col-sm-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'percentage'}
                            placeholder={'Score your Aftertaste '}
                        />
                    </div>
                    <div className="col-sm-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'percentage'}
                            placeholder={'Score your Acidity '}
                        />
                    </div>
                    <div className="col-sm-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'percentage'}
                            placeholder={'Score your Body '}
                        />
                    </div>
                    <div className="col-sm-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'percentage'}
                            placeholder={'Score your Uniformity '}
                        />
                    </div>
                    <div className="col-sm-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'percentage'}
                            placeholder={'Score your Balance '}
                        />
                    </div>
                    <div className="col-sm-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'percentage'}
                            placeholder={'Score you Clean cup '}
                        />
                    </div>
                    <div className="col-sm-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'percentage'}
                            placeholder={'Score you Sweetness '}
                        />
                    </div>
                    <div className="col-sm-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'percentage'}
                            placeholder={'Score your Overall '}
                        />
                    </div>
                    <div className="col-md-8"><h5 class="font-weight-bold">Certificates Information</h5></div>
                    <div className="col-12">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'designation'}
                            placeholder={'Name your certificate '}
                        />
                    </div>
                    <div className="col-12">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'comment'}
                            placeholder={'Describe your certificate '}
                        />
                    </div>
                    <div><LoadingButton/></div>
                    <div className="col-md-8"><h5 class="font-weight-bold">Farms History</h5></div>
                    <div className="col-12">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'location'}
                            placeholder={'Location'}
                        />
                    </div>
                    <div className="col-12">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'milestone'}
                            placeholder={'Milestone i.e "The Farm was created" '}
                        />
                    </div>
                    <div className="col-12">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'duration'}
                            placeholder={'Date (MM - YY)'}
                        />
                    </div>
                    <div className="col-12">
                        <FormInput
                            tag={'textarea'}
                            type={'text'}
                            name={'comment'}
                            placeholder={'Description '}
                        />
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
};

export default From;