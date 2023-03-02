      //body style
      function bodyElement(element){
        let bodyStyle = {
          overflowX : "hidden",
          margin : "0px",
          padding : "0px",
          boxSizing : "border-box",
        }
        for(let key in bodyStyle){
          element.style[key] = bodyStyle[key];
        }
      }
      bodyElement(body);

      //moveBtn style
      function moveBtnElement(element){
        let moveBtnStyle = {
          width :  "200px",
          height : "200px",
          backgroundColor :  "#fff",
          borderRadius : "50%",
          position : "fixed",
          bottom : "10px",
          left : "50vw",
          transform : "translate(-50%, 0)",
                //flex-set
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }
        for(let key in moveBtnStyle){
          element.style[key] = moveBtnStyle[key];
        }
      }
      moveBtnElement(moveBtn);
      //root style
      function rootElement(element) {
        let rootStyle = {
          width: "100vw",
          height: "100vh",
          backgroundColor: "cadetblue",
          
          display : "flex",
          justifyContent: "center",
          alignItems: "flex",
        }
        for(let key in rootStyle){
          element.style[key] = rootStyle[key];
        }
      }
      rootElement(root);

      //root > main style
      function mainElement(element){
        let mainStyle ={
          width : "500px",
          height : "500px",
          border : "1px dotted black",

          display : "flex",
          justifyContent : "center",
          alignItems: "center",
        }
        for(let key in mainStyle){
          element.style[key]= mainStyle[key];
        }
      }
      mainElement(root.children[0]);

      //root > main > section[0]
      function sectionElement(element){
        let sectionStyle = {
          width : "200px",
          height : "450px",
          display : "flex",
          justifyContent : "center",
          alignItems : "center",
          border : "1px solid black",
        }
        for(let b= 0; b<element.children.length; b++){
          for(let key in sectionStyle){
            element.children[b].style[key] = sectionStyle[key];
            if(b===1){
              element.children[b].style.border="1px solid blue";
            }
          }
        }
      }
      sectionElement(root.children[0]);

      //root > main > section[0] >ul 
      function ulElement (element){
        let ulStyle = {
          listStyleType : "none",
        }
        for(let key in ulStyle){
          element.style[key] = ulStyle[key];
        }
      }
      ulElement(root.children[0].children[0].children[0]);
      //root > main > section[0] >ul >li

      function liElement (element){
        let liStyle  = {
          width : "100%",
          height : "50px",
          backgroundColor : "#fff",
          border : "1px solid black",
        }
        for(c=0; c<element.children.length; c++){
          for(let key in liStyle) {
            element.children[c].style[key] = liStyle[key];
          }
        }
      }
      liElement(root.children[0].children[0].children[0])