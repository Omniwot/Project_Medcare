import React, {Component} from "react";
import './styles.scss';
import { Link, withRouter } from "react-router-dom";
import Buttons from './../forms/Button';
import FileBase64 from 'react-file-base64';
import {Button,Form,FormGroup,Label,FormText,Input} from "reactstrap";



class Upload extends Component {

    constructor(props){
        super(props);

    
    this.state = {
            confirmation : "",
            isLoading : "",
            files : ""
      }

    this.handleChane= this.handleChane.bind(this);
    
    }


    handleChane(event){
        event.preventDefault();
        const target = event.target;
        const value=target.value;
        const name=target.name;

        this.setState({name:value});

    }

    async handleSubmit(event){
        event.preventDefaulr();
        this.setState({confirmation : "Uploading..."});

    }

    async getFiles(files){
       // var new_files= redact.redactImage(files[0],"image/jpeg");
        this.setState({
            isLoading : "Extracting data",
             files : files
    });


    const UID= Math.round(1+ Math.random() * (1000000-1));

    var date={
        fileExt:"png",
        imageID: UID,
        folder:UID,
        img : this.state.files[0].base64
    };

    this.setState({confirmation : "Processing..."})
    await fetch(
        'https://33j8b1sgh8.execute-api.us-east-2.amazonaws.com/Development',
        {
        method: "POST",
        headers: {
            Accept : "application/json",
            "Content-Type": "application.json"
        },
        body : JSON.stringify(date)
        }
    );



    let targetImage= UID + ".png";
    const response=await fetch(
        'https://33j8b1sgh8.execute-api.us-east-2.amazonaws.com/Development',
        {
        method: "POST",
        headers: {
            Accept : "application/json",
            "Content-Type": "application.json"
        },
        body : JSON.stringify(targetImage)
       
        }
       
    );
    this.setState({confirmation : " Uploaded Successfully"})

    const OCRBody = await response.json();
   // console.log("OCRBody",OCRBody);

   // this.setState({Amount :OCRBody.body[0] })
   // this.setState({Invoice :OCRBody.body[1] })
    //this.setState({InvoiceDate :OCRBody.body[2] })


    }

    render() { 
        const processing=this.state.confirmation;
        return (
            <div className="row">
            <div className="col-6 offset-3">
                 <Form onSubmit={this.handleSubmit} >
                     <FormGroup>
                           
                        <h2>Upload Invoice</h2>
                        <FormText color="muted">PNG,JPG</FormText>
                    
                    
                     <div className="form-group files color">
                         <FileBase64 
                         multiple={true} 
                         onDone={this.getFiles.bind(this)}></FileBase64>

                     </div>
                     <h3 className="text-info">{processing}</h3> 
                     </FormGroup>  

                     



                     
                     <Button className="btn btn-lg btn-block  btn-success">
                         Submit
                     </Button>
                 </Form>   
             </div>  
        </div>
      );
 }
}

 
export default Upload;