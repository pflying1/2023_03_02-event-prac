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
      root.children[0].style.width= "500px"; 
      root.children[0].style.height= "500px"; 
      root.children[0].style.border= "1px dotted black"; 
          /* flex set */ 
      root.children[0].style.display="flex"; 
      root.children[0].style.justifyContent= "center"; 
      root.children[0].style.alignItems= "center"; 

      //root > main > section[0]
      for(let a= 0; a<root.children[0].children.length; a++){
      root.children[0].children[a].style.width= "200px";
      root.children[0].children[a].style.height="450px"; 
        /* flex set*/
      root.children[0].children[a].style.display= "flex"; 
      root.children[0].children[a].style.justifyContent=  "center"; 
      root.children[0].children[a].style.alignItems= "center"; 
      }
      root.children[0].children[0].style.border="1px solid black";
      root.children[0].children[1].style.border="1px solid blue";

      //root > main > section[0] >ul 
      root.children[0].children[0].children[0].style.listStyleType = "none";
      //root > main > section[0] >ul >li
      for(j=0; j<root.children[0].children[0].children[0].children.length; j++){
        root.children[0].children[0].children[0].children[j].style.width= "100%"; 
        root.children[0].children[0].children[0].children[j].style.height= "50px"; 
        root.children[0].children[0].children[0].children[j].style.backgroundColor= "#fff"; 
        root.children[0].children[0].children[0].children[j].style.border= "1px solid black"; 
      }