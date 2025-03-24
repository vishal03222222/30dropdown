import React, { Component } from 'react'
import WeatherApp from './WeatherApp';
import ToDoList from './ToDoList';
import QuizApp from './QuizApp';

import AgeCalculator from './AgeCalculator';

import ImageSearchApp from './ImageSearchApp';
import SimpleCalendar from './SimpleCalendar';
import QuoteBox from './QuoteGenerator';
import PasswordGenerator from './RandomPassword';
import NotePad from './NotesApp';
import TextToSpeech from './Texttospeech';
import DateTimeDisplay from './Date';
import DragAndDrop from './Draganddrop';
import EmailResponseForm from './emailist';
import CircularGraph from './circularbar';
import Darktheme from './Darktheme';
import FormValidation from './formvalidate';
import Stopwatch from './Stopwacth';
import SocialMediaDropdown from './dropdown';
import PasswordStrengthChecker from './passwordstrength';
import QRCodeGenerator from './qrcodegenerator';
import Calculator from './calculator';
import PopupDesign from './popup';
import ToastNotification from './Toast';
import CountdownTimer from './websitesoon';
//import ProductPage from './project 26/26_ecommerce';
//import TodoApp from '../../../../30assingmnents/src/assingments/secondassingment';

export default class Main extends Component {


    constructor(props) {
        super(props)

        this.state = {

            allprojects: [
                { name: "WeatherApp", value: "WeatherApp" },
                { name: "ToDoList", value: "ToDoList" },
                { name: "QuizApp", value: "QuizApp" },
                { name: "PasswordGenerator", value: "PasswordGenerator" },
                { name: "NotePad ", value: "NotePad" },
                { name: " AgeCalculator", value: "AgeCalculator" },
                { name: " TextToSpeech", value: "TextToSpeech" },
                { name: "DateTimeDisplay", value: "DateTimeDisplay" },
                { name: "DragAndDrop", value: "DragAndDrop" },


                { name: "QuoteBox", value: "QuoteBox" },
                { name: "ImageSearchApp", value: "ImageSearchApp" },
                { name: "SimpleCalendar", value: "SimpleCalendar" },
                { name: "EmailResponseForm", value: "EmailResponseForm" },

                { name: "CircularGraph", value: "CircularGraph" },
                { name: "Darktheme", value: "Darktheme" },
                { name: "FormValidation", value: "FormValidation" },
                { name: "Stopwatch", value: "Stopwatch" },
                { name: "SocialMediaDropdown", value: "SocialMediaDropdown" },
                { name: "PasswordStrengthChecker", value: "PasswordStrengthChecker" },
                { name: "QRCodeGenerator", value: "QRCodeGenerator" },
                { name: "PopupDesign", value: "PopupDesign" },
                { name: "Calculator", valoe: "Calculator" },
                { name: "ToastNotification", value: "ToastNotification" },
                { name: "websitecomingsoon", value: "CountdownTimer" },
                {name:"SimpleCalendar",value:"SimpleCalendar"}
                //     { name: "ProductPage", value: "ProductPage" }
            ],
            seletedproject: "",
        };
    }

    selectedcomponent = () => {
        switch (this.state.seletedproject) {
            case "WeatherApp":
                return <WeatherApp />
            case "ToDoList":
                return <ToDoList />
            case "QuizApp":
                return <QuizApp />
            case "PasswordGenerator":
                return <PasswordGenerator />
            case "NotePad":
                return <NotePad />
            case "TextToSpeech":
                return <TextToSpeech />
            case "DateTimeDisplay":
                return <DateTimeDisplay />

            case "AgeCalculator":
                return <AgeCalculator />
            case "QuoteBox":
                return <QuoteBox />
            case "ImageSearchApp":
                return <ImageSearchApp />
            case "SimpleCalendar":
                return <SimpleCalendar />
            case "DragAndDrop":
                return <DragAndDrop />
            case "EmailResponseForm":
                return <EmailResponseForm />
            case "CircularGraph":
                return <CircularGraph />
            case "Darktheme":
                return <Darktheme />
            case "FormValidation":
                return <FormValidation />
            case "Stopwatch":
                return <Stopwatch />
            case "SocialMediaDropdown":
                return <SocialMediaDropdown />
            case "PasswordStrengthChecker":
                return <PasswordStrengthChecker />
            case "QRCodeGenerator":
                return <QRCodeGenerator />
            case "PopupDesign":
                return <PopupDesign />
            case "Calculator":
                return <Calculator />
            case "ToastNotification":
                return <ToastNotification />
            case "CountdownTimer":
                return <CountdownTimer />
            case "SimpleCalendar":
                return<SimpleCalendar/>

            // case "ProductPage":
            //     return <ProductPage />

        }
    }
    handleChange = (e) => {
        console.log(e.target.value);
        const newStateObject = { ...this.state };
        newStateObject.seletedproject = e.target.value;
        this.setState(newStateObject);
    };

    render() {
        // const arrayLength = this.state.allprojects.length
        return (
            <div>
                <h2>There are {this.state.allprojects.length} of projects in this Dropdown File</h2>

                <form >
                    <b><label style={{ fontSize: "20px", color: "red" }}> select project to view</label></b><br />
                    <select name="form-select" onChange={this.handleChange}>
                        <option selected ><select name=" a project" id="">select a prj</select> </option>


                        {this.state.allprojects.map((prj) => (
                            <option value={prj.value}>{prj.name}</option>
                        ))}
                    </select>

                </form>
                {this.selectedcomponent()}


            </div >
        )

    }

}

