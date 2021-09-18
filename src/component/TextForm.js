import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was clicked!" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")

    }
    const handleLowClick = () => {
        // console.log("UpperCase was clicked!" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")

    }

    const clearTxt = () => {
        // console.log("UpperCase was clicked!" + text);
        let newText = ' '
        setText(newText);
        props.showAlert("Text has been cleared!", "success")

    }



    const handleOnChange = (event) => {
        // console.log('On change!!');
        setText(event.target.value);
    }

    const changeColor = () => {
        if (textColor.color === 'black') {
            setTextColor({
                color: "chartreuse",
                backgroundColor: 'black',
                border: "2px solid chartreuse",
                borderRadius: '8px',
            })
        }
        else {
            setTextColor({
                color: 'black',
                backgroundColor: "white",
            })
        }
    }

    const [textColor, setTextColor] = useState({
        color: "black",
        backgroundColor: "white",
        borderRadius: '6px',

    })

    const [text, setText] = useState('');
    // text = "new text"; //wrong way to change the state.
    // setText("new text"); //correct way to change the state.

    //Text to speech
    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    //Stop text to speech
    const handleStopSpeaking = () => {
        window.speechSynthesis.cancel();
    }

    const copyTxt = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    return (
        <>
            <div className="container" style={textColor} mystyle={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={textColor} id="myBox" rows="8" mystyle={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}></textarea>
                    <button className='btn btn-outline-primary my-3' onClick={handleUpClick}>Convert to uppercase</button>
                    <button className='btn btn-outline-danger my-3 mx-3' onClick={handleLowClick}>Convert to lowercase</button>
                    <button className='btn btn-outline-success my-3 mx-3' onClick={changeColor} >color</button>
                    <button className='btn btn-outline-info my-3 mx-3' onClick={handleSpeak} >Read text</button>
                    <button className='btn btn-outline-primary my-3 mx-3' onClick={handleStopSpeaking} >Stop reading</button>
                    <button className='btn btn-outline-dark my-3 mx-3' onClick={copyTxt} >Copy</button>
                    <button className='btn btn-outline-primary my-3 mx-3' onClick={clearTxt} >Clear text</button>


                </div>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1> Your text summary </h1>
                <p>{text.split(" ").length} words and {text.length} character </p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h2> Preview </h2>
                <p>{text.length > 0 ? text : "Enter something in the text box above to preview it here"}</p>
            </div>
        </>
    )
}
