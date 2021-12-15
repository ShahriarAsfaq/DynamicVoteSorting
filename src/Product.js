import { useState } from "react";

function Product(props){

  let voteCount = props.votes;
  function likeHandler(e) {
    props.upvote(props.id);
    console.log(voteCount);
  }

    return(
        <div >
            <div >
            
                <div >
                <div>  
                    <img src={props.Image} />
                </div> 

                <div>
                <button onClick={likeHandler}>
                   Upvote
                </button>
                    <p>
                    {voteCount}
                    </p>
                </div>
                <div>
                    <p>
                       Title : {props.title}
                    </p>
                    <p>
                       Description : {props.description}
                    </p>
                </div>
              <div >
                <span>Submitted by:</span>
                <img
                  src={props.Avatar}
                  width="30" height="40"
                />
              </div>
              <p></p>
              </div>


            </div>
            
        </div>
    );
}

export default Product;