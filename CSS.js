      //body style
      body.style.overflowX = "hidden";
      body.style.margin = "0px";
      body.style.padding = "0px";
      body.style.boxSizing = "border-box";

      //moveBtn style
      moveBtn.style.width =  "200px";
      moveBtn.style.height = "200px";
      moveBtn.style.backgroundColor =  "#fff";
      moveBtn.style.borderRadius = "50%";
      moveBtn.style.position= "fixed";
      moveBtn.style.bottom= "10px";
      moveBtn.style.left= "50vw";
      moveBtn.style.transform= "translate(-50%, 0)";
          //flex-set
      moveBtn.style.display= "flex";
      moveBtn.style.justifyContent= "center";
      moveBtn.style.alignItems= "center";

      //root style
      root.style.width = "100vw";
      root.style.height = "100vh";
      root.style.backgroundColor = "cadetblue";
          //flex-set
      root.style.display = "flex";
      root.style.justifyContent = "center";
      root.style.alignItems = "flex";

      //root > main style
      main.style.width= "500px"; 
      main.style.height= "500px"; 
      main.style.border= "1px dotted black"; 
          /* flex set */ 
      main.style.display="flex"; 
      main.style.justifyContent= "center"; 
      main.style.alignItems= "center"; 

      //root > main > section[0]
      for(let a= 0; a<main.children.length; a++){
      main.children[a].style.width= "200px";
      main.children[a].style.height="450px"; 
        /* flex set */ 
      main.children[a].style.display= "flex"; 
      main.children[a].style.justifyContent=  "center"; 
      main.children[a].style.alignItems= "center"; 
      }
      sectionLeft.style.border="1px solid black";
      sectionRight.style.border="1px solid blue";

      //root > main > section[0] >ul >li
      
      ul.style.listStyleType = "none";
      //root > main > section[0] >ul >li
      for(j=0; j<ul.children.length; j++){
        ul.children[j].style.width= "100%"; 
        ul.children[j].style.height= "50px"; 
        ul.children[j].style.backgroundColor= "#fff"; 
        ul.children[j].style.border= "1px solid black"; 
      }