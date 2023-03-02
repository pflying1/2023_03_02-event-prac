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
    function moveBtnElement(make){
      make.maker();
    }
    moveBtnElement(notAttributeMaker);
    
    //root > main
    function mainElement(make) {
      let mainStyle = {
        tagName : "main",
        parent : root,
        text : "",
      }
      for(let key in mainStyle){
        make[key] = mainStyle[key];
      }
      make.maker();
    }
    mainElement(notAttributeMaker);
    
    // //root > main > section[0]
    function sectionElement1(make){
      let sectionStyle1={
        tagName : "section",
        setAttriName : "id",
        setAttriValue : "left-section",
        parent : root.children[0],
      }
      for(let key in sectionStyle1){
        make[key] = sectionStyle1[key];
      }
      make.maker();
    }
    sectionElement1(elementMaker);

    // //root > main > section[1]
    function sectionElement2(make){
      let sectionStyle2={
        tagName : "section",
        setAttriName : "id",
        setAttriValue : "right-section",
        parent : root.children[0],
      }
      for(let key in sectionStyle2){
        make[key] = sectionStyle2[key];
      }
      make.maker();
    }
    sectionElement2(elementMaker);
    

    function elementMaker2 (tagname,text,parent) {
      const element = document.createElement(tagname);
      element.textContent = text;
      parent.appendChild(element);
    };
    // root > main >section[0]>ul
    elementMaker2("ul","",root.children[0].children[0]);

    // root >main >section[0] >ul >li
    for(let a= 1; a <6; a++){
      elementMaker2("li",`item-${a}`,root.children[0].children[0].children[0]);
    }
//root > main > section[1] > ul
    elementMaker2("ul","",root.children[0].children[1])