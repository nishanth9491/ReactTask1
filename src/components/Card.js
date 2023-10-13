import {Component} from "react";
class Card extends Component
{

    constructor()
    {
        super();
        this.state={count:0,name:""};
        
    }
    handleChange=(event)=>{
        const newName=event.target.value;
        const diff=newName.length-this.state.name.length;
        this.setState(
        {
            name:newName,
            count:this.state.name.length+diff,

        });
    }


    render()
    {
    return(

        <div>
            <div class="container">
  <div class="row justify-content-center align-items-center">
    <div class="col-md-7 text-center">
      <div class="card" >
        <div class="card-body">
            <h1>Responsive Paragraph Word Counter</h1>
            <textarea onChange={this.handleChange} class="form-control" id="myTextarea" name="myTextarea" rows="4" style={{width:"100%"}}></textarea>
            <p>Word Count {this.state.count}</p>

        </div>
      </div>
    </div>
  </div>
</div>
        </div>

    );
    }

}
export default Card;