let gets=document.querySelectorAll(".get");
// let get=document.querySelectorAll(".get");
gets.forEach((get)=>{
    let  lett=get.textContent.split("");
    get.textContent="";
    lett.forEach((lette)=>{
        let  span=document.createElement("span");
        span.textContent=lette;
        span.className="lette";
        get.append(span);

    });
    });
    let getindex=0;
    let getmax=gets.length-1;
    gets[getindex].style.opacity="1";
    let changtext=()=>{
        let curget=gets[getindex];
        let nextget=getindex===getmax? gets[0]:gets[getindex+1];
        Array.from(curget.children).forEach((lette,i)=>{
            setTimeout(()=>{
                lette.className="lette  out";

            },i*80);
        });
      maxxin.style.opacity="1";
      Array.from(nextget.children).forEach((lette,i)=>{

        lette.className="lette behind";
        setTimeout(()=>{
            lette.className="lette in";


        },340+i*80);


      });
      cugetindex=cugetindex===maxxin?0:cugetindex+1;
    };
    changtext();
    setInterval(changtext,1000);

    alert("hello");