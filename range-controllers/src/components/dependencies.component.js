import React, { Component } from 'react';
import { Container, Form, Button, Col, Row } from "react-bootstrap";


class Dependencies extends Component {
    // Load script tag
    componentDidMount() {
        // get root div
        const root = document.getElementById("root")

        // load model.js
        const model1 = document.createElement("script");    
        model1.async = true;    
        model1.src = "./model.js";    
        root.appendChild(model1);  

        // load API.JS
        const api = document.createElement("script");    
        api.async = true;    
        api.src = "insightmaker/js/API/API.js";    
        root.appendChild(api); 

         // load AceEditor.JS
         const aceEditor = document.createElement("script");    
         aceEditor.async = true;    
         aceEditor.src = "insightmaker/js/AceEditor.js";    
         root.appendChild(aceEditor); 

         // load array.JS
         const array = document.createElement("script");    
         array.async = true;    
         array.src = "insightmaker/js/Array.js";    
         root.appendChild(array); 

         // load compareResults.JS
         const compareResults = document.createElement("script");    
         compareResults.async = true;    
         compareResults.src = "insightmaker/js/CompareResults.js";    
         root.appendChild(compareResults); 

         // load configPanel.JS
         const configPanel = document.createElement("script");    
         configPanel.async = true;    
         configPanel.src = "insightmaker/js/ConfigPanel.js";    
         root.appendChild(configPanel); 

         // load converterEditor.JS
         const converterEditor = document.createElement("script");    
         converterEditor.async = true;    
         converterEditor.src = "insightmaker/js/ConverterEditor.js";    
         root.appendChild(converterEditor); 

         // load dataImporter.JS
         const dataImporter = document.createElement("script");    
         dataImporter.async = true;    
         dataImporter.src = "insightmaker/js/DataImporter.js";    
         root.appendChild(dataImporter); 

         // load equationEditor.JS
         const equationEditor = document.createElement("script");    
         equationEditor.async = true;    
         equationEditor.src = "insightmaker/js/EquationEditor.js";    
         root.appendChild(equationEditor); 

         // load equationEditor.JS
         const extOverrides = document.createElement("script");    
         extOverrides.async = true;    
         extOverrides.src = "insightmaker/js/ExtOverrides.js";    
         root.appendChild(extOverrides); 

         // load findReplace.JS
         const findReplace = document.createElement("script");    
         findReplace.async = true;    
         findReplace.src = "insightmaker/js/FindReplace.js";    
         root.appendChild(findReplace); 

         // load graphExplorer.JS
         const graphExplorer = document.createElement("script");    
         graphExplorer.async = true;    
         graphExplorer.src = "insightmaker/js/GraphExplorer.js";    
         root.appendChild(graphExplorer); 

         // load hoverIcons.JS
         const hoverIcons = document.createElement("script");    
         hoverIcons.async = true;    
         hoverIcons.src = "insightmaker/js/HoverIcons.js";    
         root.appendChild(hoverIcons); 

         // load insightEditor.JS
         const insightEditor = document.createElement("script");    
         insightEditor.async = true;    
         insightEditor.src = "insightmaker/js/InsightEditor.js";    
         root.appendChild(insightEditor); 

        // load javascriptEditor.JS
        const javascriptEditor = document.createElement("script");    
        javascriptEditor.async = true;    
        javascriptEditor.src = "insightmaker/js/JavaScriptEditor.js";    
        root.appendChild(javascriptEditor); 

        // load localization.JS
        const localization = document.createElement("script");    
        localization.async = true;    
        localization.src = "insightmaker/js/Localization.js";    
        root.appendChild(localization); 

        // load messenger.JS
        const messenger = document.createElement("script");    
        messenger.async = true;    
        messenger.src = "insightmaker/js/Messenger.js";    
        root.appendChild(messenger); 

        // load modelImporter.JS
        const modelImporter = document.createElement("script");    
        modelImporter.async = true;    
        modelImporter.src = "insightmaker/js/ModelImporter.js";    
        root.appendChild(modelImporter); 

        // load mxShim.JS
        const mxShim = document.createElement("script");    
        mxShim.async = true;    
        mxShim.src = "insightmaker/js/mxShim.js";    
        root.appendChild(mxShim); 

        // load optimizer.JS
        const optimizer = document.createElement("script");    
        optimizer.async = true;    
        optimizer.src = "insightmaker/js/Optimizer.js";    
        root.appendChild(optimizer); 

        // load recorder.JS
        const recorder = document.createElement("script");    
        recorder.async = true;    
        recorder.src = "insightmaker/js/Recorder.js";    
        root.appendChild(recorder); 

        // load results.JS
        const results = document.createElement("script");    
        results.async = true;    
        results.src = "insightmaker/js/Results.js";    
        root.appendChild(results); 

        // load ribbonPanel.JS
        const ribbonPanel = document.createElement("script");    
        ribbonPanel.async = true;    
        ribbonPanel.src = "insightmaker/js/RibbonPanel.js";    
        root.appendChild(ribbonPanel); 

        // load richTextEditor.JS
        const richTextEditor = document.createElement("script");    
        richTextEditor.async = true;    
        richTextEditor.src = "insightmaker/js/RichTextEditor.js";    
        root.appendChild(richTextEditor); 

        // load sanitize.JS
        const sanitize = document.createElement("script");    
        sanitize.async = true;    
        sanitize.src = "insightmaker/js/Sanitize.js";    
        root.appendChild(sanitize); 

        // load sensitivity.JS
        const sensitivity = document.createElement("script");    
        sensitivity.async = true;    
        sensitivity.src = "insightmaker/js/Sensitivity.js";    
        root.appendChild(sensitivity); 

        // load sharedJS.JS
        const sharedJS = document.createElement("script");    
        sharedJS.async = true;    
        sharedJS.src = "insightmaker/js/SharedJS.js";    
        root.appendChild(sharedJS); 

        // load sliders.JS
        const sliders = document.createElement("script");    
        sliders.async = true;    
        sliders.src = "insightmaker/js/Sliders.js";    
        root.appendChild(sliders); 

        // load styleSheet.JS
        const styleSheet = document.createElement("script");    
        styleSheet.async = true;    
        styleSheet.src = "insightmaker/js/StyleSheet.js";    
        root.appendChild(styleSheet); 

        // load textEquations.JS
        const textEquations = document.createElement("script");    
        textEquations.async = true;    
        textEquations.src = "insightmaker/js/TextEquations.js";    
        root.appendChild(textEquations); 

         // load timeSettings.JS
        const timeSettings = document.createElement("script");    
        timeSettings.async = true;    
        timeSettings.src = "insightmaker/js/TimeSettings.js";    
        root.appendChild(timeSettings);

         // load unfold.JS
         const unfold = document.createElement("script");    
         unfold.async = true;    
         unfold.src = "insightmaker/js/Unfold.js";    
         root.appendChild(unfold);

        // load unitsEditor.JS
        const unitsEditor = document.createElement("script");    
        unitsEditor.async = true;    
        unitsEditor.src = "insightmaker/js/UnitsEditor.js";    
        root.appendChild(unitsEditor);

         // load updater.JS
         const updater = document.createElement("script");    
         updater.async = true;    
         updater.src = "insightmaker/js/Updater.js";    
         root.appendChild(updater);

          // load utilities.JS
        const utilities = document.createElement("script");    
        utilities.async = true;    
        utilities.src = "insightmaker/js/Utilities.js";    
        root.appendChild(utilities);

         // load variables.JS
         const variables = document.createElement("script");    
         variables.async = true;    
         variables.src = "insightmaker/js/Variables.js";    
         root.appendChild(variables);

    }
    render() { return null }
}



export default Dependencies;