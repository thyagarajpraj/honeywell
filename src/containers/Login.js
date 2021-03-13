import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/UI/Card/Card';
import Auxiliary from '../hoc/Auxiliary';

class Login extends Component {
    state = {
        authForm: {
            email: {
                elementtype: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false,
                hide: false
            },
            password: {
                elementtype: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false,
                hide: false
            },
        },
        errMessage: null,
        forgotPassword: false,
        passwordResetEmail: ''
    }

    onChangedHandler = (e) => {

    };

    render() {

        const formElementsArray = [];
        for (const key in this.state.authForm) {
            formElementsArray.push({
                id: key,
                config: this.state.authForm[key]
            })
        }

        const form = formElementsArray.map(el => {
            return <input
                id={el.id}
                key={el.id}
                {...el.config.value}
                onChange={(e) => this.onChangedHandler(e)}
            />
        });

        let errMessage = this.state.errMessage;

        let formElement = <div>
            {form}
            <input type="submit" id="submit" name="submit" className="" value="Login" />
        </div>

        return (
            <Auxiliary>
                <Card style={{ marginBottom: '1rem' }} >


                    <div className="">
                        <div id="formContent">
                            <div className="">
                                <img src="" alt="Logo" />
                            </div>
                            {formElement}
                        </div>
                    </div>
                </Card>
            </Auxiliary>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);