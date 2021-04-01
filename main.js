view_state = "";
setNumber = "";
ballX = 72;
ballY = 169;
ballBump = ""

function setup() {
    canvas = createCanvas(800, 400);
    canvas.hide();
  }
  
  function draw() {
    console.log("X = " + mouseX + ", Y = " + mouseY)
    background(220);

    if(view_state == "top-view")
    {
        console.log("inside-top-view")
    }
    if(view_state == "side-view")
    {
        console.log("inside-side-view")
        line(790, 350, 70, 350);
        line(740, 300, 740, 350);
        circle(ballX, ballY, 20);
        console.log(ballX, ballY)
        if(ballY > 350)
        {
            ballBump = "yes"
        }
        if(ballBump == "")
        {
            ballX = ballX + 2
            ballY = ballY + 0.8
        }
        if(ballBump == "yes")
        {
            ballY = ballY - 0.8
            ballX = ballX + 2
        }
        }
  }

  function oneNext()
  {
      getSelectedValue = document.querySelector('input[name="hit"]:checked');   
      if(getSelectedValue != null)
      {
          one = getSelectedValue.value;
          console.log(one);
          document.getElementById("one").style.display = 'none';
          document.getElementById("two").style.display = 'block';
        }
      else
      {
          console.log("please select");
      }
}  

function twoNext()
{
    getSelectedValue = document.querySelector('input[name="Length"]:checked');   
    if(getSelectedValue != null)
    {
        two = getSelectedValue.value;
        console.log(two);
        document.getElementById("two").style.display = 'none';
        document.getElementById("three").style.display = 'block';
    }
    else
    {
        console.log("please select");
    }
}

function threeNext()
{
    getSelectedValue = document.querySelector('input[name="grips"]:checked');   
    if(getSelectedValue != null)
    {
        three = getSelectedValue.value;
        console.log(three);
        document.getElementById("three").style.display = 'none';
        document.getElementById("four").style.display = 'block';
    }
    else
    {
        console.log("please select");
    }
}

function fourNext()
{
    getSelectedValue = document.querySelector('input[name="view"]:checked');   
    if(getSelectedValue != null)
    {
        four = getSelectedValue.value;
        document.getElementById("four").style.display = 'none';
        if(four == "side-view")
        {
            sideView();
        }
        else if(four == "top-view")
        {
            topView();
        }
    }
    else
    {
        console.log("please select");
    }
}

function sideView()
{
    console.log("side-view")
    if(two == "full" && three == "fast")
    {
        setNumber = "side1.1";
    }
    if(two == "full" && three == "slow")
    {
        setNumber = "side1.2";
    }
    if(two == "full" && three == "off")
    {
        setNumber = "side1.3";
    }
    if(two == "full" && three == "leg")
    {
        setNumber = "side1.4";
    }

    
    if(two == "good" && three == "fast")
    {
        setNumber = "side2.1";
    }
    if(two == "good" && three == "slow")
    {
        setNumber = "side2.2";
    }
    if(two == "good" && three == "off")
    {
        setNumber = "side2.3";
    }
    if(two == "good" && three == "leg")
    {
        setNumber = "side2.4";
    }


    if(two == "short" && three == "fast")
    {
        setNumber = "side3.1";
    }
    if(two == "short" && three == "slow")
    {
        setNumber = "side3.2";
    }
    if(two == "short" && three == "off")
    {
        setNumber = "side3.3";
    }
    if(two == "short" && three == "leg")
    {
        setNumber = "side3.4";
    }

    if(setNumber != null)
    {
        console.log(setNumber);
        view_state = "side-view";
        canvas.show();
    }

}

function topView()
{
    console.log("top-view")
    if(one == "off" && two == "full" && three == "fast")
    {
        setNumber = "top1.1.1";
    }
    if(one == "off" && two == "full" && three == "slow")
    {
        setNumber = "top1.1.2";
    }
    if(one == "off" && two == "full" && three == "off")
    {
        setNumber = "top1.1.3";
    }
    if(one == "off" && two == "full" && three == "leg")
    {
        setNumber = "top1.1.4";
    }

    if(one == "off" && two == "good" && three == "fast")
    {
        setNumber = "top1.2.1";
    }
    if(one == "off" && two == "good" && three == "slow")
    {
        setNumber = "top1.2.2";
    }
    if(one == "off" && two == "good" && three == "off")
    {
        setNumber = "top1.2.3";
    }
    if(one == "off" && two == "good" && three == "leg")
    {
        setNumber = "top1.2.4";
    }

    if(one == "off" && two == "short" && three == "fast")
    {
        setNumber = "top1.3.1";
    }
    if(one == "off" && two == "short" && three == "slow")
    {
        setNumber = "top1.3.2";
    }
    if(one == "off" && two == "short" && three == "off")
    {
        setNumber = "top1.3.3";
    }
    if(one == "off" && two == "short" && three == "leg")
    {
        setNumber = "top1.3.4";
    }
/* set 2 */
    if(one == "off" && two == "full" && three == "fast")
    {
        setNumber = "top1.1.1";
    }
    if(one == "off" && two == "full" && three == "slow")
    {
        setNumber = "top1.1.2";
    }
    if(one == "off" && two == "full" && three == "off")
    {
        setNumber = "top1.1.3";
    }
    if(one == "off" && two == "full" && three == "leg")
    {
        setNumber = "top1.1.4";
    }

    if(one == "off" && two == "good" && three == "fast")
    {
        setNumber = "top1.2.1";
    }
    if(one == "off" && two == "good" && three == "slow")
    {
        setNumber = "top1.2.2";
    }
    if(one == "off" && two == "good" && three == "off")
    {
        setNumber = "top1.2.3";
    }
    if(one == "off" && two == "good" && three == "leg")
    {
        setNumber = "top1.2.4";
    }

    if(one == "off" && two == "short" && three == "fast")
    {
        setNumber = "top1.3.1";
    }
    if(one == "off" && two == "short" && three == "slow")
    {
        setNumber = "top1.3.2";
    }
    if(one == "off" && two == "short" && three == "off")
    {
        setNumber = "top1.3.3";
    }
    if(one == "off" && two == "short" && three == "leg")
    {
        setNumber = "top1.3.4";
    }
/* Set 2 */
    if(one == "leg" && two == "full" && three == "fast")
    {
        setNumber = "top2.1.1";
    }
    if(one == "leg" && two == "full" && three == "slow")
    {
        setNumber = "top2.1.2";
    }
    if(one == "leg" && two == "full" && three == "off")
    {
        setNumber = "top2.1.3";
    }
    if(one == "leg" && two == "full" && three == "leg")
    {
        setNumber = "top2.1.4";
    }

    if(one == "leg" && two == "good" && three == "fast")
    {
        setNumber = "top2.2.1";
    }
    if(one == "leg" && two == "good" && three == "slow")
    {
        setNumber = "top2.2.2";
    }
    if(one == "leg" && two == "good" && three == "off")
    {
        setNumber = "top2.2.3";
    }
    if(one == "leg" && two == "good" && three == "leg")
    {
        setNumber = "top2.2.4";
    }

    if(one == "leg" && two == "short" && three == "fast")
    {
        setNumber = "top2.3.1";
    }
    if(one == "leg" && two == "short" && three == "slow")
    {
        setNumber = "top2.3.2";
    }
    if(one == "leg" && two == "short" && three == "off")
    {
        setNumber = "top2.3.3";
    }
    if(one == "leg" && two == "short" && three == "leg")
    {
        setNumber = "top2.3.4";
    }

    if(setNumber != null)
    {
        console.log(setNumber);
        view_state = "top-view";
        canvas.show();
    }
}
