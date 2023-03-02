    const body = document.body;
    const moveBtn = document.getElementById('move-btn');
    const root = document.getElementById('root');
    const leftSection = document.getElementById('left-section');
    const rightSection = document.getElementById('right-section');

    //attribute 없는 요소 만들기
    const notAttributeMaker = {
      tagName : "h1",
      text: "move!",
      parent: moveBtn,

      maker: function() {
        const element = document.createElement(this.tagName);
        element.textContent = this.text;
        this.parent.appendChild(element);
      },

      loopFunc: function() {
        for(let i=0; i<5; i++){
        this.maker();
        }
      },
    }

    //attribute 있는 요소 만들기
    const elementMaker = {
      tagName : "",
      setAttriName: "",
      setAttriValue: "",
      text: "",
      parent: moveBtn,
      
      maker: function() {
        const element = document.createElement(this.tagName);
        element.setAttribute(this.setAttriName, this.setAttriValue);
        element.textContent = this.text;
        this.parent.appendChild(element);
      },
      
      loopFunc: function() {
        for(let i=0; i<5; i++){
          this.maker();
        }
      },
    }
    // moveBtn.chidren[0]
    notAttributeMaker.maker();
    
    //root > main
    notAttributeMaker.tagName= "main";
    notAttributeMaker.parent = root;
    notAttributeMaker.text = "";
    notAttributeMaker.maker();
    
    // //root > main > section[0]
    elementMaker.tagName= "section";
    elementMaker.setAttriName= "id";
    elementMaker.setAttriValue= "left-section";
    elementMaker.parent= root.children[0];
    elementMaker.maker();

    // //root > main > section[1]
    elementMaker.tagName= "section";
    elementMaker.setAttriName= "id";
    elementMaker.setAttriValue= "right-section";
    elementMaker.parent=root.children[0];
    elementMaker.maker(); 

    function elementMaker2 (tagname,text,parent) {
      const element = document.createElement(tagname);
      element.textContent = text;
      parent.appendChild(element);
    };
    // root > main >section[0]>ul
    elementMaker2("ul","",root.children[0].children[0]);

    // root >main >section[0] >ul >li
    for(let b= 1; b <6; b++){
      elementMaker2("li",`item-${b}`,root.children[0].children[0].children[0]);
    }
//root > main > section[1] > ul
    elementMaker2("ul","",root.children[0].children[1])